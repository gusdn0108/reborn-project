import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { InputText } from "primereact/inputtext";
// import { Editor } from "primereact/editor";
// 에디터 체인지
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
// import { StyledButton } from "./BoardWrite";
import "../../common/css/Board.css";
import { Link } from "react-router-dom";
import { MAIN_API } from "../../lib/axios";
import { BOARD_UPDATE } from "../../common/path";
import { useParams } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import Button from "../../common/Button";

const Container = styled.div`
  max-width: 900px;
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
    font: 600 11px/13px "Open Sans", sans-serif;
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
    font: "Open Sans", sans-serif;
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
    /* display: inline-block; */
    display: flex;
  }
  .btn {
    display: flex;
    margin-top: -2px;
  }
  .btn-two {
    /* display: flex; */
    /* justify-content: end; */
    /* flex: 1; */
    height: 31px;
    display: flex;
    margin-top: 2px;
    justify-content: space-between;
  }
  .btn-three {
    display: flex;
    margin-left: 11px;
  }
`;
export const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: #555 1px solid;
  border-radius: 10px;
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

const BoardUpdate = () => {
  const { id } = useParams()


  const ViewIdx = window.location.pathname.split('/')[3]
  const updatePath = '/board/view/' + ViewIdx


  const [writeState, setWriteState] = useState({
    subject: "",
    content: "",
    updatedAT: "",

  });

  const [isLoadding, setIsLoadding] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const nextHandler = () => {
    setShowMessage(true)
  }

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Link to={updatePath}>
        <Button className="p-button-text" autoFocus >글보러가기</Button>
      </Link>
    </div>
  );

 const backuUpdatePath = "http://3.39.197.229/api/board/update/"


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    MAIN_API(setIsLoadding, backuUpdatePath + id, (res) => {
    }, writeState)

  };
  return (

    <Container>
      <Writerapper>


        <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
          <div id="loginalert" className="flex align-items-center flex-column pt-6 px-3">
            <i className="pi pi-check-circle" style={{ fontSize: '10rem', color: 'var(--green-500)' }}></i>
            <p style={{ lineHeight: 7, textIndent: '1rem', fontSize: 20 }}>
              글수정이 완료되었습니다
            </p>
          </div>
        </Dialog>

        <form onSubmit={submitHandler}>
          <div className="full">
            <div className="title">실내 자유 게시판 글쓰기</div>

            <div className="subject-box">
              <InputText
                className="subject"
                placeholder="제목을 입력하세요"
                required={true}
                onChange={(e) => {
                  setWriteState({
                    ...writeState,
                    subject: e.target.value,
                  });
                }}
              ></InputText>
            </div>
            <div className="editor-edit">
              <SunEditor
                onChange={(html) => {
                  setWriteState((prev) => {
                    return {
                      ...prev,
                      content: html,
                    };
                  });
                }}
                setOptions={{
                  minHeight: "300px",
                  buttonList: [
                    ["undo", "redo"],
                    ["font", "fontSize", "formatBlock"],
                    ["paragraphStyle", "blockquote"],
                    [
                      "bold",
                      "underline",
                      "italic",
                      "strike",
                      "subscript",
                      "superscript",
                    ],
                    ["fontColor", "hiliteColor", "textStyle"],
                    ["removeFormat"],
                    "/",
                    ["outdent", "indent"],
                    ["align", "horizontalRule", "list", "lineHeight"],
                    ["table", "link", "image", "video", "audio"],

                    ["fullScreen", "showBlocks", "codeView"],
                    ["preview", "print"],
                    ["save", "template"],
                  ],
                }}
              />
            </div>

            <div className="potoplus">
              <div className="potoname"></div>
              <div className="potourl"></div>
            </div>

            <div className="btn-group">
              <div className="btn">
                <Link to="/board/list">
                  <StyledButton>목록</StyledButton>
                </Link>
              </div>
              <div className="btn-two">
                <Link to="/board/list">
                  <StyledButton>취소</StyledButton>
                </Link>
                <div className="btn-three">



                  <StyledButton type="submit" onSubmit={submitHandler} onClick={nextHandler} >등록</StyledButton>


                </div>
              </div>
            </div>
          </div>
        </form>
      </Writerapper>
    </Container>
  );
};

export default BoardUpdate;