import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes></Routes>
      </div>
    </Router>
  );
}
