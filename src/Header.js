import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header">
      <div>
        <li>
          <Link to="/">Scrimba</Link>
        </li>
      </div>
      <div>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/mycourses">My Courses</Link>
        </li>
        <li>
          <Link to="/mynotes">My Notes</Link>
        </li>
        <li>
          <Link to="/myscrims">My Scrims</Link>
        </li>
        <li>
          <Link to="/myplaylists">My Playlists</Link>
        </li>
      </div>

      <div>
        <button>Go Pro</button>
        <h1>Courses</h1>
        <span>logo</span>
      </div>
    </nav>
  );
}
