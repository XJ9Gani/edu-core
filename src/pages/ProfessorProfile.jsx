import React, { useEffect, useState } from "react";
import "../styles/MyProfile.scss";
import { Link } from "react-router-dom";
import "../styles/MyProfile.scss";
const ProfessorCourses = () => {
  const [myCourses, setMyCourses] = useState([]);
  useEffect(() => {
    setMyCourses(JSON.parse(localStorage.getItem("myCourses")));
    console.log(myCourses);
  }, []);
  return (
    <section className="myProfile">
      <div className="upSide">
        <div className="upSide__leftSection">
          <div className="upSide__leftSection__welcome">
            <h1 className="upSide__leftSection__welcome--name">
              Welcome Back , {localStorage.getItem("teacherName")}
            </h1>
          </div>
          <div className="upSide__leftSection__info">
            <img
              src="https://www.figma.com/file/8YjlT2Farcv1kJl6L4LWTB/image/7477f82b9c40718d318719bb01e1f48c41db88ee"
              alt=""
              className="upSide__leftSection__info--img"
            />
            <div className="text">
              <h1 className="text__name">{localStorage.getItem("name")}</h1>
              <h1 className="text__burth">Buth Date: 04:05:2004</h1>
              <h1 className="text__email">
                Email:{localStorage.getItem("email")}{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="upSide__rightSection">
          <h1 className="upSide__rightSection--title">Available quizes</h1>
          <Link
            to="https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS"
            className="upSide__rightSection--quiz"
          >
            {" "}
            JavaScript Quiz{" "}
          </Link>
        </div>
      </div>
      <div className="downSide">
        <ul className="list">
          <h1 className="list__title">Current Courses</h1>
          {myCourses.map((el) => (
            <li key={el.id} className="list__item">
              <h1 className="list__item--title">{el.title}</h1>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProfessorCourses;
