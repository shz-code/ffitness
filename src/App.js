import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ExerciseDetails from "./components/pages/ExerciseDetails";
import Home from "./components/pages/Home";
import fetchData from "./lib/fetchData";

function App() {
  const [exercises, Setexercises] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetchData().then((data) => {
        Setexercises([...data]);
      });
    };
    getData();
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home exercises={exercises} />} />
          <Route
            path="/exercise/:id"
            element={<ExerciseDetails exercises={exercises} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
