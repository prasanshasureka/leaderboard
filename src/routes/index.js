import React from "react";
import { Route, Routes } from "react-router-dom";
import Leaderboard from "../components/Leaderboard";

const AppRoutes = () => {
  <Routes>
    <Route path="/" element={<Leaderboard />} />
    <Route path="rank" element={<Leaderboard />} />
    <Route path="name" element={<Leaderboard />} />
    <Route path="points" element={<Leaderboard />} />
    <Route path="age" element={<Leaderboard />} />
  </Routes>;
};

export default AppRoutes;
