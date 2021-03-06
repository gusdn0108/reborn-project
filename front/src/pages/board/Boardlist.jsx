import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledButton } from "./BoardWrite2";
import leftarrow from "../../img/btn_.png";
import rightarrow from "../../img/btn_p.png";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MAIN_API } from "../../lib/axios";
import { BOARD_LIST } from "../../common/path";
import { Link, useNavigate } from "react-router-dom";

const ListWrapper = styled.div`
  .table {
    /* border-top: 1px solid #eee; */
    border-collapse: collapse;
    color: #555;
    width: 100%;
    margin-bottom: 20px;
  }

  .bigcard {
    background: #fff;
    /* background-color: red; */
    font: 545 11px/13px "Open Sans", sans-serif;
    width: 100%;
    height: 100%;
    font-size: 13px;
    margin-top: 13px;
    padding: 12 4px;
    /* border-bottom: 1px solid #eee; */
    text-align: center;
    th td {
      /* text-align: center; */
    }
  }

  .p-datatable-thead {
    /* background-color: #fbeded; */
    /* background-color: #fbf2f2; */
    /* background-color: #fff2f2; */
    background-color: #fbe7e7;
    border-bottom: 1px solid #e3e3e3;
    border-top: 1px solid #e3e3e3;
  }

  .p-datatable-tbody {
    /* margin-bottom: black; */
    /* border-top: 1px solid #e3e3e3; */
    /* background-color: red; */
    tr {
      border-bottom: 1px solid #e3e3e3;
    }
    td {
      border-bottom: 1px solid #e3e3e3;
    }
  }

  .boxid {
    text-align: center;
    /* background-color: red; */
    padding: 11px;
  }
  .boxsub {
    text-align: center;
    /* background-color: yellow; */
    width: 280px;
  }
  .p-datatable {
    /* background-color: orange; */
  }
  .p-column-header-content {
    text-align: center;
    /* background-color: green; */
    justify-content: center;
  }

  .datatable-wrapper {
    border-bottom: 1px solid #555;
  }

  .p-paginator {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 22px;
    /* background-color: purple; */
  }
  .button-write {
    display: flex;
    justify-content: flex-end;
    /* border-top: 1px solid #eee; */
    padding-top: 13px;
  }

  .search {
    margin: 12px 0;
    display: flex;
    /* background-color: red; */
  }
  .click {
    margin: 0 4px;
  }
  .title {
    width: 220px;
    margin: 0px auto;
    height: 27px;
    /* background: url(/web/upload/romi/bg/top_bg.png) bottom center repeat-x; */
    padding: 10px 0;
    font: 18px/13px "Open Sans", sans-serif;
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
  .inputbox {
    margin-right: 5px;
  }
`;
const Container = styled.div`
  max-width: 900px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;

  /* background-color: red; */
`;

const StyledInput = styled.input`
  height: 28px;
  width: 20%;
  margin-right: 20px;
`;

const BoardList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoadding, setIsLoadding] = useState(false);
  useEffect(() => {
    MAIN_API(setIsLoadding, "http://3.39.197.229/api/board/list", (res) => {
      setPosts(res.data.list);
    });

    return () => {
      setPosts([]);
    };
  }, []);
  const navigate = useNavigate();
  return (
    <Container>
      <ListWrapper>

        <div className="cardcard">
          <h2 className="title">?????? ?????? ??????</h2>

          <div className="table">
            <DataTable
              className="bigcard"
              value={posts}
              emptyMessage="???????????? ????????? ?????????????????? ^_^"
              paginator
              responsiveLayout="scroll"
              paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              currentPageReportTemplate=""
              rows={10}
              rowsPerPageOptions={[10, 20, 50]}
              onRowClick={(e) => navigate(`/board/view/${e.data.id}`)}
            >
              <Column className="boxid" field="id" header="?????????" />
              <Column className="boxsub" field="subject" header="??????" />
              <Column field="username" header="?????????" />
              <Column field="updatedAt" header="??????" />
            </DataTable>
          </div>
          <div className=""></div>
          <div className="button-write">
            <Link to="/board/write">
              <StyledButton>?????????</StyledButton>
            </Link>
          </div>
          <div className="search">
            <select className="click">
              <option>??????</option>
              <option>??????</option>
              <option>??????</option>
            </select>
            <StyledInput className="inputbox"></StyledInput>
            <StyledButton>??????</StyledButton>
          </div>

          {/* <div className="card">
          <h2 className="title">?????? ?????? ??????</h2>

          <table className="table">
            <thead>
              <tr>
                <th className="w-50">idx</th>
                <th>??????</th>
                <th>??????</th>
                <th>??????</th>
                <th>?????????</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>?????? ?????? ???</td>
                <td>??????</td>
                <td>22-05-25</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>?????????</td>
                <td>?????????</td>
                <td>22-05-26</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="button-group">
          <StyledButton>?????????</StyledButton>
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
            <option>??????</option>
            <option>??????</option>
            <option>?????????</option>
          </select>
          <StyledInput></StyledInput>
          <StyledButton>??????</StyledButton>
        </div> */}
        </div>
      </ListWrapper>
    </Container>
  );
};

export default BoardList;