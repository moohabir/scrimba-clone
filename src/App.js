import Header from "./Header";
import Dashboard from "./Dashboard";
import MyNotes from "./MyNotes";
import MyScrims from "./MyScrims";
import MyPlaylists from "./MyPlaylists";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import MyCourses from "./MyCoures";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mycourses" element={<MyCourses />} />
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/myscrims" element={<MyScrims />} />
          <Route path="/myplaylists" element={<MyPlaylists />} />
        </Routes>
      </div>
    </Router>
  );
}
