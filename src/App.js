import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import ExerciseDetails from "./components/pages/ExerciseDetails";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
