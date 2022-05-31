import styled from 'styled-components'
import Responsive from './Responsive'
import { Link } from 'react-router-dom'
import Button from './Button'
import Login from '../pages/auth/Login'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const HeaderTemplate = styled.div`
    position: fixed;
    width:100%;
    background:#fff;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
    z-index : 5;
`

const Wrapper = styled(Responsive)`
    position: relative; ;
    height:8rem;
    display:flex;
    justify-content: space-between;
    align-items: center;

    .logo{
        font-size: 1.125rem;
        letter-spacing: 2px;
    }

    .menu{
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > li {
            margin-left: 0.75rem;
        }

        & > li > a {
            font-size:1.2rem;
        }
    }
`

const Spacer = styled.div`
    height:10rem;
`



const Header = () => {

    const auth = useSelector((state) => {
        return state.user
      });
    

    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
      

      return () => {
        
      }
    }, [])
    
    const LoginCheck = localStorage
    console.log(LoginCheck)
    const logoutHandler = ()=>{
        localStorage.removeItem('token')

    }
   

    

    return (
        <>
            <HeaderTemplate>
                <Wrapper>
                    <h1 className='logo'>

                        기본만해보자

                    </h1>
                    <ul className='menu'>
                        <li>
                            <Button to="/">Home</Button>
                        </li>
                        <li>
                            <Button to="/board/list">게시판</Button>
                        </li>
                        <li>
                            <Button to="/signup">회원가입</Button>
                        </li>
                        <li>
                            {/* localStorage에 쿠키값이 있으면 로그아웃 / 없으면 로그인 */}

                            <div>{LoginCheck.length === 2 ? <Button onClick={logoutHandler} >로그아웃</Button> : <Button to="/login">로그인</Button>}  </div>

                        </li>
                    </ul>
                </Wrapper>
            </HeaderTemplate>
            <Spacer />
        </>
    )
}

export default Header