import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Editor } from "primereact/editor";
import { StyledButton } from "./BoardWrite2";
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
    display: felx; //정렬위해
    align-items: center; //위아래정렬
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

const BoardUpdate = () => {
  const [text, setText] = useState();
  return (
    <Container>
      <Writerapper>
        <div className="full">
          <div className="title">실내 자유 게시판 글 수정</div>
          <div className="subject-box">
            <div className="subject-name">subject</div>
            <div className="subject-empty">제목내용</div>
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
              <StyledButton>수정</StyledButton>
            </div>
          </div>
        </div>
      </Writerapper>
    </Container>
  );
};

export default BoardUpdate;