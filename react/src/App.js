import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import JackpotsPage from "./pages/JackpotsPage";
import EventPage from "./pages/EventPage";
import Virtuals from "./pages/Virtuals";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/jackpots" element={<JackpotsPage />} />
        <Route path="/virtuals" element={<Virtuals />} />
        <Route path="/sports/:sport/events/:eventId/:eventDate/:eventName" element={<EventPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
