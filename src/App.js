import React from "react";
// react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Landing from "./components/Landing";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
