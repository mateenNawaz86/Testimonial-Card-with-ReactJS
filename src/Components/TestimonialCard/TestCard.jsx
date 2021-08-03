import React from "react";
import Card from "../UI/Card";

import "./TestCard.css";

const TestCard = () => {
  const usersData = [
    {
      userImage: "../img/user-1.png",
      userName: "Mark",
      userJob: "UI/UX Designer",
      infoText: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
      dolores ad nam nihil, quis molestiae!`,
    },
    {
      userImage: "../img/user-2.png",
      userName: "Jonas",
      userJob: "Web Developer",
      infoText: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
      dolores ad nam nihil, quis molestiae!`,
    },

    {
      userImage: "../img/user-3.png",
      userName: "Smith",
      userJob: "App Developer",
      infoText: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
      dolores ad nam nihil, quis molestiae!`,
    },
  ];

  return usersData.map((items, index) => {
    return (
      <Card key={index}>
        <section className="card_container">
          <div className="profile">
            <img src={items.userImage} alt="First User" />
            <h4>{items.userName}</h4>
            <p>{items.userJob}</p>
          </div>
          <div className="info_text">
            <i className="fas fa-quote-left" />
            <p>{items.infoText}</p>
            <i className="fas fa-quote-right" />
          </div>
        </section>
      </Card>
    );
  });
};

export default TestCard;
