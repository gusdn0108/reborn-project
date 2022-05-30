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
      <Route path="/write" element={<BoardWrite2 />} />
      <Route path="/update/:id" element={<BoardUpdate />} />
      <Route path="/view" element={<BoardView />} />
      <Route path="/list" element={<BoardList />} />
    </Routes>
  );
}

export default App;