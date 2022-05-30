import route from ".";
import { Board, sequelize } from "../models";
// import Auth from '../models/Auth'

const express = require("express");
const router = express.Router();

router.post("/list", async (req, res) => {
  try {
    const list = await Board.findAll({
      // 내림차순? 쓰삼
      // 도큐멘트 근본 수업
    });

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
  // try {
  //     // if(req.isLogin){//로그인 체크
  //     // }
  //     const { subject, content } = req.body
  //     const data =req.body
  //     await Board.create({
  //         subject: req.body.subject,
  //         content: req.body.content,
  //         writeUser:req.userData,
  //         hit: 0,
  //     })
  //     res.json({
  //         status: true,
  //         result: data,
  //         msg: ''
  //     })
  // } catch (e) {
  //     console.log(e)
  //     res.status(500).json({
  //         status: false,
  //         result: null,
  //         msg: '예상치 못한 오류가 발생되었습니다.',
  //     })
  // }
});

router.post("/update/:id", async (req, res) => {
  try {
    //2. 아이디값 검출
    console.log(req.params);
    const { id } = req.params;
    //3. 게시글 가져오기
    const post = await Board.find({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    }); // where 문
    //1. 자네가 이글의 주인인가? //
    if (post.userData.email === req.userData.email) {
      //4. 게시글 업데이트
      await Board.update(req.body, {
        where: {
          id: {
            [Op.eq]: id,
          },
        },
      })
        .then(() => {
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
    } else {
      res.json({
        status: false,
        msg: "작성자가아닙니다.",
      });
    }
  } catch (error) {}
});
router.post("/delete/:id", (req, res) => {
  console.log(req.params.id);
  // id 몇번째 게시판의 글을 삭제할지
});
router.post("/view/:id", (req, res) => {
  // id 몇번째 게시판의 글을 불러올것인지
});

// route.use('/comment',Comment)
// '/api/board/comment/
// create , list ,delete , update '

module.exports = router;
