import "./pages/Sign-up/page";
import SignUp from "./pages/Sign-up/page";
import Login from "./pages/Login/page";
import MainPage from "./pages/Main-page_np/page";
import Anime from "./pages/Anime/page";
import Manga from "./pages/Manga/page";
import About from "./pages/About/page";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = true;
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
