 import jwt from 'jsonwebtoken'
 import env from 'dotenv'
 env.config()
 const AuthCheck =async (req,res,next)=>{
     console.log('auth check',req.headers.authorization)

     if(req.headers.authorization!==undefined){
        try {
            const userData =await jwt.verify(
                req.headers.authorization,
                process.env.SECRET_KEY
            )
            if(userData){
                console.log('토큰 유효')
                //토큰 유효
                req.userData=userData
                req.isLogin=true
            }else{
                console.log('토큰 Not 유효')
                req.userData=null
                req.isLogin=false
            }
        } catch (error) {
            //error
            console.log('토큰ERROR')
            req.userData=null
            req.isLogin=false
        }
     }else{
        console.log('토큰 Not 유효')
        req.userData=null
        req.isLogin=false
     }
  
 await   next()
}
export default AuthCheck