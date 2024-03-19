import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Explore from "./Pages/Explore";
import Reels from "./Pages/Reels";
import Messages from "./Pages/Messages";
import Create from "./Pages/Create";
import Profile from "./Pages/Profile";
import Sidebar from "./sections/Sidebar";
function App() {
  return (
    <>
      <Router>
        <div className="flex w-full h-screen overflow-hidden">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
