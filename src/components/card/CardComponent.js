import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardComponent = ({ item }) => {
  return (
    <Card
      style={{
        width: "90%",
        height: 600,
        border: "1px solid black",
        backgroundColor: "#fff",
        color: "000",
        margin: "auto",
      }}
    >
      <Card.Img
        style={{ width: "100%", height: "50%" }}
        variant="top"
        src={item?.image}
      />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Subtitle>{item.subtitle}</Card.Subtitle>
        <Card.Text>{item.text}</Card.Text>
        <Link to={item.link} target="_blank">
          <button className="--btn --btn-primary">View Project</button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
