import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./utils/ProtectedRoute";
// import Login from "./pages/Login";
import Journal from "./pages/Journal";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import Broker from "./pages/Broker";
import Company from "./pages/Company";
import Map from "./pages/Map";
import Loads from "./pages/Load";
import RootLayout from "./layouts/RootLayout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout removePadding={false} />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/map" element={<Map />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/broker" element={<Broker />} />
          <Route path="/company" element={<Company />} />
          <Route path="/load" element={<Loads />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
