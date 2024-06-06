import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Player from "./pages/player/Player";
import toast, { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        toast.success("Logged In Successfully");
        navigate("/");
      } else {
        toast.success("Logged Out Successfully");
        navigate("/login");
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
