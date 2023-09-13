// src/BeerCard.jsimport React from "react";
import Card from "react-bootstrap/Card";

function BeerCard({ beer }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={beer.image_url} />
      <Card.Body>
        <Card.Title>{beer.name}</Card.Title>
        <Card.Text>{beer.tagline}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BeerCard;
