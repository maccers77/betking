import { Route, Routes } from "react-router-dom";

import Sports from "./pages/sports/Sports";
import SportsHome from "./pages/sports/SportsHome";
import JackpotsPage from "./pages/JackpotsPage";
import EventPage from "./pages/sports/EventPage";
import Virtuals from "./pages/virtuals/Virtuals";
import Layout from "./components/layout/Layout";
import VirtualGame from "./pages/virtuals/VirtualGame";
import VirtualsHome from "./pages/virtuals/VirtualsHome";

function App() {
  return (
    <Layout>
      <Routes >
        <Route path="/" element={<Sports />}>
          <Route index element={<SportsHome />} />
          <Route path="sports/:sport/events/:eventId/:eventDate/:eventName" element={<EventPage />} />
        </Route>
        <Route path="/jackpots" element={<JackpotsPage />} />
        <Route  path="/virtuals" element={<Virtuals />}>
          <Route index element={<VirtualsHome />} />
          <Route path=":game" element={<VirtualGame />} />
        </Route>
    
       
      </Routes>
    </Layout>
  );
}

export default App;
