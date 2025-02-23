import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import UpdateUser from "./component/updateUser/UpdateUser";
import Comment from "./component/comment/Comment";
import UpdatePost from "./component/updatepost/UpdatePost";
import Messenger from "./pages/messenger/messenger";
import SearchUserPage from "./pages/searchUserPage/SearchUserPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const { currentUser: user } = useSelector((state) => state.user);
  const adminToken = localStorage.getItem("adminToken");

  return (
    <>
      <Routes>
        {/* Normal User Routes */}
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/messenger" element={user ? <Messenger /> : <Navigate to="/" />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/searchuser" element={<SearchUserPage />} />
        <Route path="/profile/update" element={<UpdateUser />} />
        <Route path="/note/update/:notesid" element={<UpdatePost />} />
        <Route path="/viewcomment/:notesid" element={<Comment />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={adminToken ? <AdminDashboard /> : <Navigate to="/admin/login" />} />
      </Routes>
    </>
  );
}

export default App;
