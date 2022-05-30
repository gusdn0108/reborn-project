// route.use('/comment',Comment)
// '/api/board/comment/
// create , list ,delete , update '
import { Auth, Board, Comment, sequelize } from '../models'
import { Op } from 'sequelize'


const express = require('express')
const router = express.Router()


router.post('/write', async (req, res) => {
    try {
        console.log(req.body)
        const { comment } = req.body
        const data = req.body

        await Comment.create({
            // username: req.body.username,
            comment: req.body.comment,
            nickname: req.body.nickname
        })
        res.json({
            status: true,
            result: data,
            msg: ''
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: false,
            result: null,
            msg: '예상치 못한 오류가 발생되었습니다.',
        })
    }
})

router.post('/view/:id', async (req, res) => {

    try {
        // id 몇번째 게시판의 댓글을 불러올것인지
        const { id } = req.params
        const view = await Comment.findOne({
            order: [['id', 'DESC']],
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        })

        res.json({
            status: true,
            result: view,
            msg: '몇번째 댓글입니다.'
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: false,
            result: null,
            msg: '예상치 못한 오류가 발생되었습니다.',
        })
    }
})



router.post('/update/:id', async (req, res) => {
    try {
        const { id } = req.params
        const comm = await Comment.findOne({
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        })
        if (comm.userData === req.userData) {
            await Comment.update(req.body, {
                where: {
                    id: {
                        [Op.eq]: id,
                    }
                }
            })
                .then(() => {
                    //5. 결과 보내기  
                    res.json({
                        status: true,
                        msg: '수정완료되었습니다.',
                    })
                }).catch((e) => {
                    res.status(500).json({
                        status: false,
                        msg: '수정안돼씀',
                    })
                })
        } else {
            res.json({
                status: false,
                msg: '작성자가아닙니다.',
            })
        }

    } catch (error) {
        console.log(error)
    }
})



router.post('/delete/:id', async (req, res) => {
    try {

        const { id } = req.params
        // id 몇번째 게시판의 댓글을 삭제할지
        exports.delete = await Comment.destroy({
            where: {
                id: {
                    [Op.eq]: id,
                }
            }
        })

        res.json({
            status: true,
            // result: ,
            msg: '댓글이 삭제되었습니다.'
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: false,
            result: null,
            msg: '예상치 못한 오류가 발생되었습니다.',
        })
    }
})

module.exports = router;