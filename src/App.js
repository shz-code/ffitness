import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Box sx={{ width: { xs: "95%", md: "80%" } }} m="auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </Router>
    </div>
  );
}

export default App;
