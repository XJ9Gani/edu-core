import React, { useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState(localStorage.getItem("name"));
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Hello : {userName}
    </div>
  );
};

export default Home;
