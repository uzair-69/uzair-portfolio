import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img from "../assets/images/card.jpg";

export const Projects = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col col-sm-12 col-md-12">
          <h2>Projects</h2>
          <Row xs={1} md={2} className=" my-2 g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={img} height={300} weight={300} />
                  <Card.Body>
                    <Card.Title>Multiplayer Game – Connect4</Card.Title>
                    <Card.Text>
                    The game’s object is to line up four coins in a row in any direction from top to bottom, left to right, or diagonally before your opponent does.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};
