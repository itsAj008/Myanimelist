import "./navbar.css";
import Avatar from "./Avatar";

// import { IoIosAddCircleOutline } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { SiMyanimelist, SiAboutdotme } from "react-icons/si";
import { BsFillBookFill } from "react-icons/bs";
import { SiAcademia } from "react-icons/si";
import { LuSettings } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addanime } from "../features/animelist/animeSlice";
import Searchbar from "./Searchbar";

import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const username = queryParams.get("username");
  const email = queryParams.get("email");
  // const password = queryParams.get("password");
  const month = queryParams.get("month");
  const days = queryParams.get("days");
  const year = queryParams.get("year");
  // console.log(month);
  // console.log(days);

  const d = new Date();
  let currentyear = d.getFullYear();
  const age = currentyear - year;

  // console.log(password);
  // console.log(email);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Get the selected file from the input
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("File selected:", selectedFile);
    }
  };

  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="page-logo-item">
          <Link to="/main" className="anchortag">
            <SiMyanimelist className="page-logo" />
          </Link>
        </li>
        <li>
          <NavLink to="/home" className="anchortag">
            <AiFillHome className="navlogo" />
            <span className="link-text">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/anime" className="anchortag">
            <SiAcademia className="navlogo" />
            <span className="link-text">Anime</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/manga" className="anchortag">
            <BsFillBookFill className="navlogo" />
            <span className="link-text">Manga</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="anchortag">
            <SiAboutdotme className="navlogo" />
            <span className="link-text">About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="anchortag">
            <LuSettings className="navlogo" />
            <span className="link-text">Settings</span>
          </NavLink>
        </li>
      </ul>
      <Searchbar />
      <div className="Profile">
        <Avatar />
        <Link to="#">{username}</Link>
        <div className="profileDisplay">
          <p>{email ? email : username}</p>
          <p>{age}</p>
          <br />
          <input
            className="choosefile"
            type="file"
            onChange={handleFileChange}
          />

          <button className="photoaddbtn" onClick={handleUpload}>
            Add photo
          </button>
        </div>
      </div>
    </div>
  );
}
