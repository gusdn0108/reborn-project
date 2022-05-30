import express from 'express'
// 라우터 불러올거 가져오는곳 
import Auth from './Auth'
import Board from './Board'

import Comment from './Comment'





const route = express.Router()

// 라우터 나누는곳

route.use("/auth", Auth)
route.use("/board", Board)
route.use("/board/comment", Comment)



export default route