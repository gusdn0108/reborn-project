import React, { useEffect, useState } from "react";

import parser from "html-react-parser";

import { StyledButton } from "./BoardWrite2";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { BOARD_VIEW } from "../../common/path";
import { MAIN_API } from "../../lib/axios";

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
  .inputbox {
    width: 50%;
    margin-right: 11px;
  }
  .commentviewrapper {
    background-color: #fbfbfb;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    padding: 12px 3px;
  }
  .comment-view {
    display: flex;
    margin: 8px;
  }
  .comm-person {
    width: 100px;
  }
  .comm-content {
    flex: 1;
  }
  .comm-date {
    display: flex;
    width: 550px;
    justify-content: end;
  }
  /* .comm-date {
    width: 80px;
  } */
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
  .nextgroup {
    /* padding: 16px; */
    width: 100%;
    margin: 15px 0;
    padding-bottom: 40px;
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

const comment_data = [
  { title: "test1", content: "test1 콘텐트입니다", date: "2022-05-28" },
  { title: "test2", content: "test2 콘텐트입니다", date: "2022-05-29" },
  { title: "test3", content: "test3 콘텐트입니다", date: "2022-05-30" },
];

const BoardView = () => {
  const [text, setText] = useState("");
  const [comment, setComment] = useState(comment_data);
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
  console.log(posts);

  return (
    <Container>
      <ViewWrapper>
        <div className="first">
          <div className="subname">subject</div>
          <div className="subquest">{posts.subject}</div>
        </div>
        <div className="second">
          <div className="sec-name">name</div>
          <div className="sec-que">{posts.username}</div>
        </div>
        <div className="datebig">
          <div className="datename">date</div>
          <div className="date">{posts.createdAt}</div>
          <div className="count">hit</div>
          <div className="countnum">{posts.hit}</div>
        </div>

        <div className="content">{parser(posts.content || "")}</div>

        <hr className="line" />

        <div className="button">
          <Link to="/board/list">
            <StyledButton>목록</StyledButton>
          </Link>
        </div>
        <div className="comment">
          <StyledInput className="inputbox"></StyledInput>
          <StyledButton>댓글달기</StyledButton>
        </div>
        <div className="commentviewrapper">
          {comment.map((comment) => {
            return (
              <div className="comment-view">
                <div className="comm-person">{comment.title}</div>
                <div className="comm-cotent">{comment.content}</div>
                <div className="comm-date">{comment.date}</div>
              </div>
            );
          })}
        </div>
        <div className="nextgroup">
          <div className="before">이전글 {posts.subject}</div>
          <div className="next">다음글 {posts.subject}</div>
        </div>
      </ViewWrapper>
    </Container>
  );
};

export default BoardView;