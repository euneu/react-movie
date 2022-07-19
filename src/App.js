import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import NavBar from "./components/NavBar";
import Group from "./routes/Group";

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page/:group/:page" element={<Group />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
