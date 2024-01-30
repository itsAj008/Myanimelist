import "./log-in.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    // try {
    //   const response = await axios.post("/register", {
    //     userName: formData.userName,
    //     password: formData.password,
    //   });

    //   console.log("Response:", response.data);
    // } catch (error) {
    //   console.error("Error:", error.message);
    // }
    navigate(`/home?username=${formData.userName}`);
  }

  return (
    <div className="main-background-formate">
      <div className="main">
        <div className="title">
          <h1>
            Welcome to your{" "}
            <span>
              <br /> AnimeList{" "}
            </span>
          </h1>
        </div>

        <div className="loginform">
          <form action="" onSubmit={handleSubmit}>
            <input
              className="inputfield usr"
              type="text"
              placeholder="UserName"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
            ></input>
            <br></br>
            <input
              className="inputfield"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            ></input>
            <br></br>
            <input className="login" type="submit" value="Log in"></input>
          </form>
        </div>
      </div>
    </div>
  );
}
