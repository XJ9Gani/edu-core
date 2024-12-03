import React, { useEffect, useState } from "react";
import "../styles/Registration.scss";
import { Link, useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/api/courses");
  //       if (!response.ok) {
  //         throw new Error("Сетевая ошибка");
  //       }
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Ошибка fetch: ", error);
  //     }
  //   };

  //   setData(getData());
  //   console.log(data);
  // }, []);

  useEffect(() => {
    localStorage.setItem("professorEmail", "admin");
    localStorage.setItem("teacherName", "Professor Aruzhan");
    localStorage.setItem("professorPassword", "password");
  }, []);
  const setToStorageData = () => {
    if (name === "" || password === "" || email === "") {
      alert("Заполните все данные!!");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      setName("");
      setPassword("");
      setEmail("");
      alert("your registration has been сonfirmed!! ");
      navigate("/my-profile");
    }
  };
  return (
    <section className="registration">
      <Link to="/instructor-sing-in" className="mode">
        I am professor
      </Link>
      <div className="registration__leftSide">
        <h1 className="registration__leftSide--title">Welcome Back!</h1>
        <span className="registration__leftSide--subtitle">
          Enter your personal details to use all of the features
        </span>
        <Link className="registration__leftSide--button" to="/sing-in">
          Sign In
        </Link>
      </div>
      <div className="registration__rightSide">
        <h1 className="registration__rightSide--title">Create Account</h1>
        <span className="registration__rightSide--subtitle">
          write your email for registartion
        </span>

        <input
          className="registration__rightSide--nameInp"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="registration__rightSide--emailInp"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="registration__rightSide--passwordInp"
          placeholder="Password"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link
          className="registration__rightSide--submit"
          onClick={setToStorageData}
        >
          Join us
        </Link>
      </div>
    </section>
  );
};

export default RegistrationPage;
