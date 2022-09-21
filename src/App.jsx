import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages";

function App() {
  return (
    <>
      <div className="d-flex mx-auto nav">
        <Link to="/" className="h2 text-white p-3">
          Home
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;