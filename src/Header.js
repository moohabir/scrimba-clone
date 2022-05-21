import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header">
      <div>
        <Link to="/" className="logo">
          Scrimba
        </Link>
      </div>
      <div className="header-items">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/mycourses">My Courses</Link>
        <Link to="/mynotes">My Notes</Link>
        <Link to="/myscrims">My Scrims</Link>
        <Link to="/myplaylists">My Playlists</Link>
      </div>

      <div>
        <button>Go Pro</button>
        <h1>Courses</h1>
        <span>logo</span>
      </div>
    </nav>
  );
}
