import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const RequireAuth = ({ children }) => {
  const {
    state: { user },
  } = useContext(AuthContext);
  return user ? <Navigate to="/" /> : children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hotels" element={<List />} />
        <Route path="hotels/:id" element={<Hotel />} />
        <Route
          path="login"
          element={
            <RequireAuth>
              <Login />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
