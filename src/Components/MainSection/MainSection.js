import React from "react";
import "./MainSection.css";

function MainSection() {
  return (
    <div className="main-section">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvpJzlaQCISuDZpyyoWHakTbBSXNmuAY_pg&usqp=CAU"
        alt="Profil de Pete"
        className="profile-photo"
      />
      <h2 className="welcome-text">Hello, I am Pete!</h2>
      <h1 className="title">A frontend developer specialised in React</h1>
    </div>
  );
}

export default MainSection;
