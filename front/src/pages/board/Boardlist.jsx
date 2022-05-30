import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledButton } from "./BoardWrite2";
import leftarrow from "../../img/btn_.png";
import rightarrow from "../../img/btn_p.png";
import {DataTable} from 'primereact/datatable'
import { Column } from "primereact/column";
import { MAIN_API } from "../../lib/axios";
import { BOARD_LIST } from "../../common/path";
const ListWrapper = styled.div`
  .table {
    border-top: 1px solid #eee;
    border-collapse: collapse;
    color: #555;
    width: 100%;
    margin-bottom: 20px;
    th,
    td {
      border: 1px solid #eee;
      border-left: none;
      border-right: none;
      padding: 10px;
      border-top: 1px dotted #e3e3e3;
      text-align: center;
      font: 600 11px/13px "Open Sans", sans-serif;
    }
    .w-50 {
      width: 50px;
    }
  }
  .button-group {
    display: flex;
    justify-content: flex-end;
  }
  .search {
    margin: 12px 0;
    display: flex;
  }
  .click {
    margin: 0 4px;
  }
  .title {
    width: 220px;
    margin: 0px auto;
    height: 17px;
    /* background: url(/web/upload/romi/bg/top_bg.png) bottom center repeat-x; */
    padding: 10px 0;
    font: 600 11px/13px "Open Sans", sans-serif;
    color: #333;
    text-align: center;
    letter-spacing: 3px;
  }
  .out {
  }
  .number {
    /* margin: 10px; */
    padding: 5px 11px 8px 11px;
    border: 1px solid #888;
    border-radius: 2px;
    margin: 3px;
    background: #fff;
    &:hover {
      background: #666;
      color: #fff;
    }
  }
  .arrow {
    padding: 5px 11px 8px 11px;
    margin: 3px;
  }
  .middle {
    display: flex; 
    justify-content: center;
    height: 40px;
    font-size: 12px;
  }
`;
const Container = styled.div`
  max-width: 800px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
`;

const StyledInput = styled.input`
  height: 23px;
  margin-right: 20px;
`;

const BoardList = () => {
  const [posts, setPosts] = useState([])
  const [isLoadding, setIsLoadding] = useState(false)
 useEffect(() => {
  MAIN_API(setIsLoadding,BOARD_LIST,(res)=>{
    setPosts(res.data.list)
  },)   
 
   return () => {
    setPosts([])
   }
 }, [])

  

  return (
    <Container>
      <ListWrapper>
          <DataTable value={posts} emptyMessage="게시글이 없으니 먹이를주세용 ^_^"
           paginator responsiveLayout="scroll"
           paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
           currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10,20,50]}>
              <Column field="id" header="글번호"/>
              <Column field="subject" header="제목"/>
              <Column field="userid" header="작성자"/>
              <Column field="updatedAt" header="날짜"/>
          </DataTable>






































        {/* <div className="card">
          <h2 className="title">실내 장소 추천</h2>

          <table className="table">
            <thead>
              <tr>
                <th className="w-50">idx</th>
                <th>제목</th>
                <th>이름</th>
                <th>날짜</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>경치 이쁜 곳</td>
                <td>장미</td>
                <td>22-05-25</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>여기가</td>
                <td>데이지</td>
                <td>22-05-26</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="button-group">
          <StyledButton>글쓰기</StyledButton>
        </div>
        <div className="out">
          <div className="middle">
            <img className="arrow" src={leftarrow}></img>
            <div className="number">1</div>
            <div className="number">2</div>
            <div className="number">3</div>
            <div className="number">4</div>
            <div className="number">5</div>
            <div className="number">6</div>
            <div className="number">7</div>
            <div className="number">8</div>
            <div className="number">9</div>
            <div className="number">10</div>
            <img className="arrow" src={rightarrow}></img>
          </div>
        </div>

        <div className="search">
          <select className="click">
            <option>전체</option>
            <option>한달</option>
            <option>일주일</option>
          </select>
          <StyledInput></StyledInput>
          <StyledButton>검색</StyledButton>
        </div> */}
      </ListWrapper>
    </Container>
  );
};

export default BoardList;