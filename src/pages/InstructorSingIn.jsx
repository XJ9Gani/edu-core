import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/SingIn.scss";
const InstructorSingIn = () => {
  const navigate = useNavigate();
  const [emailFromStore, setEmailFromStore] = useState(
    localStorage.getItem("professorEmail")
  );
  const [passwordFromStore, setPasswordFromStore] = useState(
    localStorage.getItem("professorPassword")
  );

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setIputPassword] = useState("");

  const checkData = () => {
    if (emailFromStore === "") {
      alert("Please Sing Up , There no account with such data!!");
    } else if (inputEmail === "" || inputPassword === "") {
      alert("INPUT DATA!");
    } else if (
      inputEmail !== emailFromStore ||
      inputPassword !== passwordFromStore
    ) {
      alert("Не правильный логин или пороль!!");
    } else {
      alert("Login successful!");
      setInputEmail("");
      setIputPassword("");
      navigate("/instructor-profile");
      localStorage.setItem("current-user", "teacher");
    }
  };
  return (
    <section className="singIn">
      <Link to="/sing-in" className="mode2">
        I am Student
      </Link>
      <div className="singIn__leftSide">
        <h1 className="singIn__leftSide--title">Sign In</h1>
        <input
          className="singIn__leftSide--nameInp"
          placeholder="Name"
          val={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <input
          className="singIn__leftSide--passwordInp"
          placeholder="Password"
          type="password"
          val={inputPassword}
          onChange={(e) => setIputPassword(e.target.value)}
        />
        <button className="singIn__leftSide--link" onClick={checkData}>
          Sing In
        </button>
      </div>
      <div className="singIn__rightSide">
        <h1 className="singIn__rightSide--title">Good afternoon, Professor!</h1>
        <span className="singIn__rightSide--subtitle">
          Register with your personal details to use all of the features
        </span>
      </div>
    </section>
  );
};

export default InstructorSingIn;
