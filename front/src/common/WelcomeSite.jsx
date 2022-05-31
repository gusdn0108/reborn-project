import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'


const textcolor = styled.div`
  color: black;
`;


const WelcomeSite = () => {
  return (

    <Carousel>
      <Carousel.Item interval={7000} >
        <img
          className="d-block w-100"
          src="https://img.medicalreport.kr/resources/2018/07/28/MdRWAqRptSpr0uBU.jpg"
          alt="고양이"
        />
        <Carousel.Caption className='textcolor'>
          <h3>우리고양이 착해요</h3>
          <p>몰라용 ㅎㅎ</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={7000}>
        <img
          className="d-block w-100"
          src="https://ifh.cc/g/nS9lkQ.jpg"
          alt="고양이2"
        />

        <Carousel.Caption>
          <h3>애옹</h3>
          <p>애옹</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={7000}>
        <img
          className="d-block w-100"
          src="https://ifh.cc/g/n6pNQS.jpg"
          alt="고양이 친구"
        />
        <Carousel.Caption className='textcolor2'>
          <h3>애옹</h3>
          <p>애옹</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default WelcomeSite