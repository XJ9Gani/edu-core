import React, { useState, useEffect } from "react";
import "../styles/MyCourses.scss";

const ProfessorCourses = () => {
  const [courses, setCourses] = useState([]); // Массив курсов
  const [title, setTitle] = useState(""); // Название курса
  const [description, setDescription] = useState(""); // Описание курса
  const [level, setLevel] = useState(""); // Уровень курса

  // Загружаем курсы при монтировании компонента
  useEffect(() => {
    fetch("http://localhost:3000/all-courses")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  // Функция для добавления нового курса
  const addCourse = () => {
    const newCourse = { title, description, level };

    fetch("http://localhost:3000/all-courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    })
      .then((response) => response.json())
      .then((newCourseData) => {
        setCourses([...courses, newCourseData]);
        setTitle("");
        setDescription("");
        setLevel("");
      })
      .catch((error) => console.error("Error adding course:", error));
  };

  return (
    <div>
      <h1>Courses</h1>

      {/* Форма добавления нового курса */}
      <div className="form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Course Title"
          className="addCourse-inp"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Course Description"
          className="addCourse-inp"
        />
        <input
          type="text"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          placeholder="Course Level (e.g. Beginner, Intermediate)"
          className="addCourse-inp"
        />
        <button className="addCourse-btn" onClick={addCourse}>
          +
        </button>
      </div>

      <ul className="MyCourses__container">
        {courses.map((course) => (
          <li key={course.id} className="MyCourses__container--item">
            <div className="image"></div>
            <h1 className="title">{course.title}</h1>
            <div className="description">{course.description}</div>
            <div className="level">{course.level}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessorCourses;
