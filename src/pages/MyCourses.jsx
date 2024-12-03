import React from "react";
import { useState, useEffect } from "react";
import "../styles/MyCourses.scss";
const MyCourses = () => {
  const [myCourses, setMyCourses] = useState([]);
  useEffect(() => {
    setMyCourses(JSON.parse(localStorage.getItem("myCourses")));
    console.log(myCourses);
  }, []);
  return (
    <section className="MyCourses">
      <ul className="MyCourses__container">
        {myCourses.map((el) => (
          <li key={el.id} className="MyCourses__container--item">
            <div className="image"></div>
            <h1 className="title">{el.title}</h1>
            <div className="description">{el.description}</div>
            <div className="level">{el.level}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyCourses;
