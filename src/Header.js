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
        <Link to="/mycourses">My Courses</Link>
        <Link to="/mynotes">My Notes</Link>
        <Link to="/myscrims">My Scrims</Link>
        <Link to="/myplaylists">My Playlists</Link>
      </div>

      <div className="right-items">
        <button className="btn">Go Pro!</button>
        <Link to="/mycourses">Courses</Link>
        <span>logo</span>
      </div>
    </nav>
  );
}
