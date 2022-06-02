import { Auth, Board, sequelize } from "../models";
import { Op } from "sequelize";



const express = require("express");
const router = express.Router();

router.post("/list", async (req, res) => {
    try {

        const list = await Board.findAll({

        });
        console.log(list)
        res.json({
            list: list,
            msg: "문제없이 게시판써",
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            result: null,
            msg: "문제있음",
        });
    }
});

router.post("/write", async (req, res) => {
    console.log(req.body);

    try {
        // if(req.isLogin){//로그인 체크

        // }
        const { subject, content, username } = req.body;
        const { id } = req.params
        const data = req.body;
        await Board.create({
            subject: req.body.subject,
            content: req.body.content,
            username: req.body.username,
            id: id,
            hit: 0,
        });

        res.json({
            status: true,
            result: data, id,
            msg: "?",
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            status: false,
            result: null,
            msg: "예상치 못한 오류가 발생되었습니다.",
        });
    }
});

router.post("/update/:id", async (req, res) => {
    try {
        //2. 아이디값 검출
        console.log(req.params);
        const { id } = req.params;
        //3. 게시글 가져오기
        const post = await Board.findOne({
            where: {
                id: {
                    [Op.eq]: id,
                },
            },
        });

        await Board.update(req.body, {
            where: {
                id: {
                    [Op.eq]: id,
                },
            },
        }).then(() => {
            //5. 결과 보내기
            res.json({
                status: true,
                msg: "수정완료되었습니다.",
            });
        })
            .catch((e) => {
                res.status(500).json({
                    status: false,
                    msg: "수정x",
                });
            });
    } catch (error) {
        // console.log(error);
    }
});



router.post('/delete/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const { id } = req.params
        // id 몇번째 게시판의 글을 삭제할지
        exports.delete = await Board.destroy({
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

router.post("/view/:id", async (req, res) => {
    try {
        // id 몇번째 게시판의 글을 불러올것인지
        const { id } = req.params;
        const view = await Board.findOne({
            where: {
                id: {
                    [Op.eq]: id,
                },
            },
        });

        res.json({
            status: true,
            result: view,
            msg: "몇번째 게시글입니다.",
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            status: false,
            result: null,
            msg: "예상치 못한 오류가 발생되었습니다.",
        });
    }
});
module.exports = router;