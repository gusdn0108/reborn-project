import React, { useEffect, useState } from "react";
import parser from "html-react-parser";
import { StyledButton } from "./BoardWrite2";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import {
  COMMENT_DELETE,
  COMMENT_LIST,
  COMMENT_UPDATE,
  COMMENT_WRITE,
} from "../../common/path";
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
  const [updateText, setUpdateText] = useState("");
  const [comment, setComment] = useState(comment_data);

  const [isLoadding, setIsLoadding] = useState(false);
  const { id } = useParams();
  const fetchData = () => {
    MAIN_API(setIsLoadding, COMMENT_LIST + id, (res) => {
      setComment(res.data.result || []); //데이터 달라는 요청 댓글 추가후 다시 실행시켜야함
    });
  };
  useEffect(() => {
    fetchData(); //새로고침 안해도 바로 데이터가 넘어옴
  }, []);
  console.log("comment", comment);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    MAIN_API(
      setIsLoadding,
      COMMENT_WRITE,
      (res) => {
        console.log(res);
        fetchData();
      },
      { comment: text, nickname: "test", boardId: id }
    );
  };

  const deleteHandler = (commentId) => () => {
    MAIN_API(setIsLoadding, COMMENT_DELETE + commentId, (res) => {
      console.log(res);
      fetchData(); //바로 호출해서 데이터가 바로 보임
    });
  };

  const updateHandler = (commentId) => () => {
    MAIN_API(
      setIsLoadding,
      COMMENT_UPDATE + commentId,
      (res) => {
        console.log(res);
        fetchData(); //바로 호출해서 데이터가 바로 보임
        setCommentId(); // 인풋이 없어짐
      },
      { comment: updateText }
    );
  };

  const [commentId, setCommentId] = useState(); //첨에 아무것도 안들어있음

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
              <div className="comm-person">{comment.nickname}</div>

              {commentId === comment.id ? ( //없는
                <input
                  className="edit-input"
                  value={updateText} //업데이트를 하면 보내줘야할 데이터
                  onChange={(e) => setUpdateText(e.target.value)}
                />
              ) : (
                <div className="comm-content">{comment.comment}</div>
              )}
              <div className="comm-date">{comment.createdAt}</div>
              <div className="comm-writebtn">
                <StyledButton
                  className="delete-btn"
                  onClick={deleteHandler(comment.id)}
                >
                  x
                </StyledButton>
              </div>
              <div className="comm-delebtn">
                {commentId === comment.id ? (
                  <StyledButton
                    className="edit-btn"
                    onClick={updateHandler(comment.id)}
                  >
                    전송
                  </StyledButton>
                ) : (
                  <StyledButton
                    className="edit-btn"
                    onClick={() => {
                      setCommentId(comment.id);
                      setUpdateText(comment.comment);
                    }}
                  >
                    수정
                  </StyledButton>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </CommentWrapper>
  );
};

export default Comment;
