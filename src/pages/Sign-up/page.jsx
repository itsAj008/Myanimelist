import { useState } from "react";
import "./sign-up.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    Month: "",
    days: "",
    year: "",
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
    console.log(formData);
    await axios.post("/register", {
      userName: formData.userName,
      email: formData.email,
      password: formData.password,
      Month: formData.Month,
      days: formData.days,
      year: formData.year,
    });
    // navigate(
    //   `/main?username=${formData.userName}&email=${formData.email}&month=${formData.Month}&days=${formData.days}&year=${formData.year}`
    // );
  }

  return (
    <div className="container maing-background-formate">
      <div className="main">
        <div className="title">
          <h1>
            Welcome to your{" "}
            <span>
              <br /> AnimeList{" "}
            </span>
          </h1>
        </div>

        <div className="signupform">
          <form action="" onSubmit={handleSubmit}>
            <input
              className="inputfield topfiled"
              type="text"
              placeholder="UserName"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
            ></input>
            <br></br>
            <input
              className="inputfield"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
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
            <div className="dob">
              <select
                name="Month"
                value={formData.Month}
                onChange={handleInputChange}
              >
                <option value="month">Month</option>
                <option value="jan">January</option>
                <option value="feb">February</option>
                <option value="march">March</option>
              </select>
              <select
                name="days"
                value={formData.days}
                onChange={handleInputChange}
              >
                <option value="days">days</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select
                name="year"
                value={formData.year}
                onChange={handleInputChange}
              >
                <option value="year">Year</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
              </select>
            </div>

            <br></br>
            <input className="sign-up" type="submit" value="Sign-up"></input>
          </form>
          <p>Already have an account?</p>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="Login"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
