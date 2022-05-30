// route.use('/comment',Comment)
// '/api/board/comment/
// create , list ,delete , update '
import { Comment, sequelize } from '../models'


const express = require('express')
const router = express.Router()






























router.post('/delete/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const { id } = req.params
        // id 몇번째 게시판의 글을 삭제할지
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
            msg: '게시글이 삭제되었습니다.'
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