import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import your route components too
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import NavBar from "./components/NavBar";
import Group from "./routes/Group";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path={`${process.env.PUBLIC_URL}/page/:group/:page`}
            element={<Group />}
          ></Route>
          <Route
            path={`${process.env.PUBLIC_URL}/movie/:id`}
            element={<Detail />}
          ></Route>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
