import React, { useEffect, useState } from "react";
import parser from "html-react-parser";
import { StyledButton } from "./BoardWrite2";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { BOARD_VIEW, COMMENT_VIEW, COMMENT_WRITE } from "../../common/path";
import { MAIN_API } from "../../lib/axios";
import "../../common/css/atag.css";

const CommentWrapper = styled.div`
  clear: both;
  /* height: 20rem; 높이고정하면안됨 얘땜시 풋터가 망가졌음x */
  font: 600 12px/14px "Open Sans", sans-serif;
  width: 100%;
  color: #555;
  margin-top: -30px;

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
  .commentviewrapper {
    background-color: #fbfbfb;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    padding: 12px 4px;
    z-index: 500;
    margin-top: 45px;
  }
  .comment-view {
    display: flex;
    margin: 8px;
  }
  .comm-person {
    width: 100px;
    margin-left: 5px;
    display: flex;
    align-items: center;
  }
  .comm-content {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .comm-date {
    width: 80px;
    display: flex;
    align-items: center;
  }
  .edit-input {
    width: 60%;
    margin-right: 44px;
    margin-top: 2px;
  }
  .group-btn {
    /* display: flex;
    height: 9px; */
  }
  .edit-btn {
    margin-left: 3px;
  }
  .delete-btn {
  }
`;

const StyledInput = styled.input`
  height: 24px;
  margin-right: 20px;
`;

const comment_data = [
  { id: 1, title: "test1", content: "test1 콘텐트입니다", date: "2022-05-28" },
  { id: 2, title: "test2", content: "test2 콘텐트입니다", date: "2022-05-29" },
  { id: 3, title: "test3", content: "test3 콘텐트입니다", date: "2022-05-30" },
];

const Comment = () => {
  const [text, setText] = useState("");
  const [comment, setComment] = useState(comment_data);

  const [isLoadding, setIsLoadding] = useState(false);
  const { id } = useParams();
  //   useEffect(() => {
  //     MAIN_API(setIsLoadding, COMMENT_VIEW + id, (res) => {
  //       setComment(res.data.result || []);
  //     });
  //   }, []);
  console.log("comment", comment);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    MAIN_API(
      setIsLoadding,
      COMMENT_WRITE,
      (res) => {
        console.log(res);
      },
      { comment: text, nickname: "test" }
    );
  };

  const [commentId, setCommentId] = useState();

  return (
    <CommentWrapper>
      <div className="comment">
        <StyledInput
          className="inputbox"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></StyledInput>
        <StyledButton className="commbtn" onClick={submitHandler}>
          댓글달기
        </StyledButton>
      </div>
      <div className="commentviewrapper">
        {comment.map((comment) => {
          return (
            <div className="comment-view">
              <div className="comm-person">{comment.title}</div>

              {commentId === comment.id ? (
                <input className="edit-input" />
              ) : (
                <div className="comm-content">{comment.content}</div>
              )}
              <div className="comm-date">{comment.date}</div>
              <div className="comm-writebtn">
                <StyledButton className="delete-btn">x</StyledButton>
              </div>
              <div className="comm-delebtn">
                <StyledButton
                  className="edit-btn"
                  onClick={() => {
                    setCommentId(comment.id);
                  }}
                >
                  수정
                </StyledButton>
              </div>
            </div>
          );
        })}
      </div>
    </CommentWrapper>
  );
};

export default Comment;
