import bcrypt from 'bcrypt'
import { Op } from 'sequelize'
import jwt from 'jsonwebtoken'
import { Auth, sequelize } from '../models'


const express = require('express')
const router = express.Router()


router.post('/signup', (req, res) => {
    const { password } = req.body
    try {
        bcrypt.hash(password, 10, async (err, hash) => {

            req.body.password = hash
            await Auth.create(req.body).then((user) => {
                console.log(user)
                res.json({
                    status: true,
                    result: user,
                    msg: ''
                })
            }).catch((error) => {
                console.log(error)
            })
        })

    } catch (e) {
        res.status(500).json({
            status: false,
            result: null,
            msg: '예상치 못한 오류가 발생되었습니다.',
        })
    }
})




// 로그인 
router.post('/signin', async (req, res) => {
    try {
        const _user = await Auth.findOne({
            where: {
                email: {
                    [Op.eq]: req.body.email
                }
            }
        })

        if (_user) {
            if (bcrypt.compareSync(req.body.password, _user.dataValues.password)) {

                delete _user.dataValues.password
                console.log(_user.dataValues)

                let token = jwt.sign({
                    ..._user.dataValues,
                    exp: Math.floor(Date.now() / 1000) + 60000,
                    iat: Math.floor(Date.now() / 1000)
                },
                    process.env.SECRET_KEY
                )

                _user.dataValues.token = token
                res.json({
                    status: true,
                    userData: _user.dataValues,
                    token: token
                })
            } else {
                res.json({
                    status: false,
                    msg: '너 비밀번호틀렸어 '
                })
            }
        } else {
            res.json({
                status: false,
                msg: '너 이메일이 틀렸엉 '
            })
        }
    } catch (error) {
        res.json({
            status: false,
            msg: '관리자한태 문의해봐 ㅎㅎ '
        })
    }
}
)





module.exports = router;