import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx"
import Home from "./Pages/Home.jsx";
import ExcerciseDetail from "./Pages/ExcerciseDetail.jsx";
import "./App.css";

function App() {
  return (
    <Box width="400px" sx={{width : {xl: "1488px"}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excercise/:id" element={<ExcerciseDetail />} />
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
