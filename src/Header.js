import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header">
      <div>
        <Link to="/" className="logo">
          Scrimba
        </Link>
      </div>
      <div className="left-items">
        <Link to="/dashboard" className="dashboard">
          Dashboard
        </Link>
        <Link to="/mycourses" className="list-links">
          My Courses
        </Link>
        <Link to="/mynotes" className="list-links">
          My Notes
        </Link>
        <Link to="/myscrims" className="list-links">
          My Scrims
        </Link>
        <Link to="/myplaylists" className="list-links">
          My Playlists
        </Link>
      </div>

      <div className="right-items">
        <button className="btn">Go Pro!</button>
        <Link to="/mycourses">Courses</Link>
        <span>logo</span>
      </div>
    </nav>
  );
}
