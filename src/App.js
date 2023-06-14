import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import logo from "./logo.png";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Bookmark from "./pages/bookmark/Bookmark";
import LikedPost from "./pages/likedPost/LikedPost";
import Login from "./pages/login/Login";
import Error from "./pages/error/Error";
import Mockman from "mockman-js";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/signup/Signup";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/liked" element={<LikedPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
