import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import Journal from "./pages/Journal";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import Broker from "./pages/Broker";
import RootLayout from "./layouts/RootLayout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/broker" element={<Broker />} />
      </Route>
    </Routes>
  );
}

export default App;
