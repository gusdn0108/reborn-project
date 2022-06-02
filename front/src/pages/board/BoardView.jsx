import React, { useEffect, useState } from "react";
import parser from "html-react-parser";
import { StyledButton } from "./BoardWrite2";
import styled from "styled-components";
import { Link, useParams, useLocation } from "react-router-dom";
import { BOARD_DELETE, BOARD_VIEW } from "../../common/path";
import { MAIN_API } from "../../lib/axios";
import '../../common/css/atag.css'
import Comment from "./Comment";
import Button from "../../common/Button";
import { Dialog } from "primereact/dialog";

const ViewWrapper = styled.div`
  clear: both;
  /* height: 20rem; 높이고정x */
  font: 600 12px/14px "Open Sans", sans-serif;
  width: 100%;
  color: #555;
  margin-top: -30px;

  .title {
    font-size: 30px;
    margin: 16px 0px;
  }
  .line {
    margin: 16px 0px;
  }
  .comment {
    margin-bottom: 16px;

    height: 27px;
    display: flex;
  }
  .inputbox {
    width: 80%;
    margin-right: 11px;
    margin-top: 25px;
  }

  .commbtn {
    margin-top: 23px;
    height: 26px;
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
    justify-content: baseline;
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

    align-items: center; //위아래정렬
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
    justify-content: baseline;
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
    padding-top: 23px;
    padding-left: 10px;
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
    display: inline-block;
    margin: 0 5px;
    float: right;
  }

  .updatebutton {
    display: inline-block;
    margin-right: 5px;
  }
  .delebutton {
    display: inline-block;
    margin-left: 2px;
  }

  .nextgroup {
    width: 100%;
    margin: 15px 0;
    padding-bottom: 40px;
  }
`;
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



const BoardView = () => {


  const [text, setText] = useState("");
  const [comment, setComment] = useState();
  const [posts, setPosts] = useState([]);
  const [isLoadding, setIsLoadding] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    MAIN_API(setIsLoadding, BOARD_VIEW + id, (res) => {
      setPosts(res.data.result);
    });

    return () => {
      setPosts([]);
    };
  }, []);


  // console.log(window.location.pathname)
  const updateIdx = window.location.pathname.split('/')[3]
  console.log(updateIdx)
  const updatePath = '/board/update/' + updateIdx
  const deletePath = '/board/list'

  const [showMessage, setShowMessage] = useState(false);
  const dialogFooter = (
    <div className="flex justify-content-center">
      <Link to={deletePath}>
        <Button className="p-button-text" autoFocus >리스트로가기</Button>
      </Link>
    </div>
  );



  const deleteHandler = (e) => {
    e.preventDefault()
    MAIN_API(setIsLoadding, BOARD_DELETE + id, (res) => {
      setShowMessage(true)
    })

  }

  return (
    <Container>
      <ViewWrapper>

        <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
          <div id="loginalert" className="flex align-items-center flex-column pt-6 px-3">
            <i className="pi pi-check-circle" style={{ fontSize: '10rem' }}></i>
            <p style={{ lineHeight: 7, textIndent: '1rem', fontSize: 20 }}>
              글삭제가 완료되었습니다
            </p>
          </div>
        </Dialog>


        <div className="first">
          <div className="subname">제목</div>
          <div className="subquest">{posts.subject}</div>
        </div>
        <div className="second">
          <div className="sec-name">작성자</div>
          <div className="sec-que">{posts.username}</div>
        </div>
        <div className="datebig">
          <div className="datename">날짜</div>
          <div className="date">{posts.createdAt}</div>
          <div className="count">hit</div>
          <div className="countnum">{posts.hit}</div>
        </div>

        <div className="content">{parser(posts.content || "")}</div>

        <hr className="line" />

        <div className="button">
          <Link to="/board/list">
            <StyledButton to="/board/list">목록</StyledButton>
          </Link>
        </div>
        <div className="updatebutton">
          <Link to={updatePath}>
            <StyledButton>수정</StyledButton>
          </Link>
        </div>
        <div className="delebutton">
          <form onSubmit={deleteHandler}>
            <StyledButton>삭제</StyledButton>
          </form>
        </div>
        <Comment></Comment>
        <div className="nextgroup">
          <div className="before">이전글 {posts.subject}</div>
          <div className="next">다음글 {posts.subject}</div>
        </div>
      </ViewWrapper>
    </Container>
  );
};

export default BoardView;
