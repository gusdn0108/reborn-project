import express from 'express'
import cors from 'cors'
import router from './router'
import path from 'path'
import {  sequelize } from './models'
import AuthCheck from "./lib/AuthCheck"
import dotenv from "dotenv";




const app = express()
const port = process.env.PORT || 3500
app.use(cors({
    origin: ['dateplace.shop'],
    credentials: true,
}))

dotenv.config();

app.use(AuthCheck)
app.use(express.json({ limit: '500mb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ limit: '500mb', extended: true }));
app.use('/api', router)


// 흐음
sequelize.sync({ force: false })
    .then(() => {
        console.log('Connect')
    })
    .catch(() => {
        console.log(' Disconect ')
    })



app.listen(port, () => {
    console.log(`Api server Open! Port :${port}`)
})