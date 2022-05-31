import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import BoardUpdate from "./pages/board/BoardUpdate";
import BoardView from "./pages/board/BoardView";
import BoardWrite2 from "./pages/board/BoardWrite2";
import BoardList from "./pages/board/Boardlist";
import Main from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/board/write" element={<BoardWrite2 />} />
      <Route path="/board/update/:id" element={<BoardUpdate />} />
      <Route path="/board/view/:id" element={<BoardView />} />
      <Route path="/board/list" element={<BoardList />} />
      {/* <Route path="/board/update" element={<BoardUpdate />} /> */}
    </Routes>
  );
}

export default App;
