import React from "react";
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Container from "./common/Container";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import BoardList from "./pages/board/Boardlist";
import BoardUpdate from "./pages/board/BoardUpdate";
import BoardView from "./pages/board/BoardView";
import BoardWrite2 from "./pages/board/BoardWrite2";
import Main from "./pages/Main";

function App() {
  return (
    <>
    
      <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/write" element={<BoardWrite2 />} />
            <Route path="/board/update/:id" element={<BoardUpdate />} />
            <Route path="/board/view" element={<BoardView />} />
            <Route path="/board/list" element={<BoardList />} />
          </Routes>
        </Container>
       
      <Footer>Copyright All right &copy; reserved</Footer>
    </>
  );
}

export default App;
