import React, { useEffect, useState } from "react";
import "../styles/AllCourses.scss";
import MyCourses from "./MyCourses";
const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/all-courses");
      const data = await response.json();
      setCourses(data);
    }
    fetchData();
  }, []);
  const [myCourses, setMyCourses] = useState([]);
  const addToMyCourses = (id) => {
    const selectedCourse = courses.find((el) => el.id === id);
    setMyCourses((prevCourses) => [...prevCourses, selectedCourse]);
    localStorage.setItem("myCourses", JSON.stringify(myCourses)); // Update state
  };
  if (!courses.length) {
    return <>Loading</>;
  }
  return (
    <section className="allCourses">
      <ul className="allCourses__container">
        {courses.map((el) => (
          <li key={el.id} className="allCourses__container--item">
            <div className="image"></div>
            <h1 className="title">{el.title}</h1>
            <div className="description">{el.description}</div>
            <div className="level">{el.level}</div>
            <button
              onClick={() => addToMyCourses(el.id)}
              disabled={myCourses.some((course) => course.id === el.id)}
              className="addButton"
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AllCourses;
