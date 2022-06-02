import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { InputText } from "primereact/inputtext";
// import { Editor } from "primereact/editor";
// 에디터 체인지
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
// import { StyledButton } from "./BoardWrite";

import { MAIN_API } from "../../lib/axios";
import { BOARD_WRITE } from "../../common/path";
import { Link } from "react-router-dom";
import "./asdf.css";
import Button from "../../common/Button";
import { Dialog } from "primereact/dialog";
import { useParams } from "react-router-dom";

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
  border-radius: 10px;
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
  const [writeState, setWriteState] = useState({
    subject: "",
    content: "",
  });
  const [isLoadding, setIsLoadding] = useState(false);

  const updatePath = '/board/list' 


  const [showMessage, setShowMessage] = useState(false);
  const dialogFooter = (
    <div className="flex justify-content-center">
      <Link to={updatePath}>
      <Button  className="p-button-text" autoFocus >글 확인하러가기</Button>
      </Link>
    </div>
  );





  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    MAIN_API(
      setIsLoadding,
      "http://3.39.197.229/api/board/write",
      (res) => {
        setShowMessage(true)
      },
      writeState
    );
  };

  return (
    <Container>
      <Writerapper>

      <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
        <div id="loginalert"className="flex align-items-center flex-column pt-6 px-3">
          <i className="pi pi-check-circle" style={{ fontSize: '10rem', color: 'var(--green-500)' }}></i>
          <p style={{ lineHeight: 7, textIndent: '1rem', fontSize: 20 }}>
            글작성이 완료되었습니다
          </p>
        </div>
        </Dialog>


``
        <form onSubmit={submitHandler}>
          <div className="full">
            <div className="title">자유 게시판 글쓰기</div>

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
            <div className="subject-box">
              {/* <InputText
                className="username"
                placeholder="작성자"
                required={true}
                onChange={(e) => {
                  setWriteState({
                    ...writeState,
                    username: e.target.value,
                  });
                }}
              ></InputText> */}
            </div>
            <div className="editor-edit">
              {/* <Editor
              style={{ height: "320px" }}
              value={text}
              onTextChange={(e) => setText(e.htmlValue)}
            /> */}
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
                    "/", // Line break
                    ["outdent", "indent"],
                    ["align", "horizontalRule", "list", "lineHeight"],
                    ["table", "link", "image", "video", "audio" /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                    /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                    ["fullScreen", "showBlocks", "codeView"],
                    ["preview", "print"],
                    ["save", "template"],
                    /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
                  ],
                  // ,lang:lang.ko
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

                <StyledButton type="submit" id="why">
                  등록
                </StyledButton>

                {/* <button type="submit">등록</button> */}
              </div>
            </div>
          </div>
        </form>
      </Writerapper>
    </Container>
  );
};

export default BoardWrite2;
