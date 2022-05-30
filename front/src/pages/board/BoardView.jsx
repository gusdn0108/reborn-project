import React, { useState } from "react";
import parser from "html-react-parser"
import { StyledButton } from "./BoardWrite2";
import styled from "styled-components";

const ViewWrapper = styled.div`
  clear: both;
  height: 20rem;
  font: 600 12px/14px "Open Sans", sans-serif;
  width: 100%;
  background: white;
  color: #555;
  .title {
    font-size: 30px;
    margin: 16px 0px;
  }
  .line {
    margin: 16px 0px;
  }
  .comment {
    margin-bottom: 16px;
    display: flex;
  }
  .first {
    display: flex;
  }
  .subname {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 47px;
    width: 140px;
    border-top: 1px solid #e3e3e3;
  }
  .subquest {
    height: 47px;
    border-top: 1px solid #e3e3e3;
    flex: 1;
    display: flex; 
    justify-content: center; 
    align-items: center; 
  }
  .second {
    display: flex;
  }
  .sec-name {
    height: 47px;
    width: 140px;
    border-top: 1px solid #e3e3e3;
    display: flex; 
    justify-content: center; 
    align-items: center; 
  }
  .sec-que {
    height: 47px;
    /* width: 100px; 넓이 필요없음 */
    flex: 1; 
    border-top: 1px solid #e3e3e3;
    display: flex; 
    /* justify-content: center; 
    align-items: center; */
  }
  .datebig {
    display: flex;
  }
  .datename {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 47px;
    width: 140px;
    border-top: 1px solid #e3e3e3;
  }
  .date {
    height: 47px;
    border-top: 1px solid #e3e3e3;
    flex: 1;
    display: flex; 
    justify-content: center; 
    align-items: center; 
  }
  .count {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 47px;
    width: 140px;
    border-top: 1px solid #e3e3e3;
  }
  .countnum {
    height: 47px;
    border-top: 1px solid #e3e3e3;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    height: 300px;
    width: 100%;
    border-top: 1px solid #e3e3e3;
  }
  .before {
    height: 40px;
    width: 100%;
    border-top: 1px solid #e3e3e3;
    display: flex; 
    align-items: center; 
  }
  .next {
    height: 40px;
    width: 100%;
    border-top: 1px dotted #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    display: flex;
    align-items: center;
  }
  .button {
    display: flex;
    justify-content: flex-end;
  }
`;
const Container = styled.div`
  max-width: 800px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
`;
const StyledInput = styled.input`
  height: 24px;
  margin-right: 20px;
`;

const BoardView = () => {
  const [text, setText] = useState("");

  return (
    <Container>
      <ViewWrapper>
        <div className="first">
          <div className="subname">subject</div>
          <div className="subquest">[자주하는 Q&A] 경치좋은곳</div>
        </div>
        <div className="second">
          <div className="sec-name">name</div>
          <div className="sec-que">bullang Girls</div>
        </div>
        <div className="datebig">
          <div className="datename">date</div>
          <div className="date">2022-05-26</div>
          <div className="count">hit</div>
          <div className="countnum">8175</div>
        </div>
        <div className="content">

        {parser(`     <p>
            글 내용 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo nsequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, suntn
            culpa qui officia deserunt mollit anim id est laborum.
          </p>`)}
     
        </div>
        <hr className="line" />

        <div className="button">
          <StyledButton>목록</StyledButton>
        </div>
        <div className="comment">
          <StyledInput></StyledInput>
          <StyledButton>댓글달기</StyledButton>
        </div>
        <div className="before">이전글</div>
        <div className="next">다음글</div>
      </ViewWrapper>
    </Container>
  );
};

export default BoardView;