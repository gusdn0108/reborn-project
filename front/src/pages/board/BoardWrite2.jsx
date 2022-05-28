import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { InputText } from 'primereact/inputtext';
import { Editor } from "primereact/editor";
// import { StyledButton } from "./BoardWrite";
import "../../common/css/Board.css";
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

const Writerapper = styled.div`
  margin-top: 20px;
  .title {
    color: #333;
    font-family: "HallymMjo-Regular";
    font-size: 15px;
    height: 20px;
    width: 220px;
    margin: 0px auto;
    padding: 10px 0;
    text-align: center;
    letter-spacing: 3px;
  }
  .subject-box {
    display: flex;
    margin: 15px 0;
    font-size: 15px;
    width: 100%;
  }
  .subject-name {
    height: 47px;
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e3e3e3;
    border-top: 2px solid #e3e3e3;
    font-family: "HallymMjo-Regular";
  }
  .subject-empty {
    height: 47px;
    width: 140px;
    flex: 1;
    display: felx; 
    align-items: center; 
    border-bottom: 1px solid #e3e3e3;
    border-top: 2px solid #e3e3e3;
    font-family: "HallymMjo-Regular";
  }
  .potoplus {
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
  }
  .potoname {
    height: 47px;
    width: 140px;
    display: flex;
    align-items: center;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
  }
  .potourl {
    height: 47px;
    width: 140px;
    flex: 1;
    border-top: 1px solid #e3e3e3;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e3e3e3;
  }
  .btn-group {
    display: flex;
  }
  .btn {
    display: flex;
  }
  .btn-two {
    display: flex;
    justify-content: end;
    flex: 1;
  }
`;
export const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: #555 1px solid;
  border-radius: 2px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  /* border-color: grey; */
  /* 크기 */
  padding: 4px 10px;
  font-size: 12px;
  /* 색상 */
  background: #555;
  &:hover {
    background: #fff;
    color: #555;
  }
  &:active {
    background: #555;
  }
  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

const BoardWrite2 = () => {
  const [text, setText] = useState();
  return (
    <Container>
      <Writerapper>
        <div className="full">
          <div className="title">실내 자유 게시판 글쓰기</div>
          <div className="subject-box">
            <InputText className="subject" placeholder="제목을 입력하세요"></InputText>
          </div>
          <div className="editor-edit">
            <Editor
              style={{ height: "320px" }}
              value={text}
              onTextChange={(e) => setText(e.htmlValue)}
            />
          </div>
          <div className="potoplus">
            <div className="potoname">사진첨부</div>
            <div className="potourl">인</div>
          </div>
          <div className="btn-group">
            <div className="btn">
              <StyledButton>목록</StyledButton>
            </div>
            <div className="btn-two">
              <StyledButton>취소</StyledButton>
              <StyledButton>등록</StyledButton>
            </div>
          </div>
        </div>
      </Writerapper>
    </Container>
  );
};

export default BoardWrite2;