import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "../../API/api";
import { Col, Card, Button } from "react-bootstrap";

function About() {
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .post(
          "https://id.twitch.tv/oauth2/token?client_id=4fgsgwz1bvja18hy27flb01s4u29an&client_secret=s8fcgrw2dtm0zhn9lp4utuq45kuexv&grant_type=client_credentials"
        )
        .then((response) => console.log(response.data));
    };
    fetchData();
  });

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/games/top");
      /* console.log(result.data); */
      let dataArray = result.data.data
      let finalArray = dataArray.map(game => {
          let newURL = game.box_art_url.replace('{width}','{300}').replace('{height}','{300}')
          game.box_art_url = newURL
      })
      setGames(result.data.data);
    };
    fetchData();
  });

  return (
    <>
      <h1 style={{ color: "#4A96D2" }} className="d-flex justify-content-center mt-5" > Twitch</h1>
      <div className="row justify-content-center">
        {games.map((game) => (
          <Col xs={4} className="d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className="img"
                variant="top"
                src={game.box_art_url}
              />
              <Card.Body>
                <Card.Title> {game.name} </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                <Button variant="primary">
                <Link style={{color:'White'}}  className="link" to= {{
                    pathname: "game/" + game.name,
                    state: {
                        gameID: game.id
                    }
                }}>
                    {game.name} streams {" "}        
                </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    </>
  );
}
export default About;
