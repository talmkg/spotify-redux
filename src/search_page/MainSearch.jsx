import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Job from "./Job";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import Navbar from "../components/Navbar";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();

  const baseEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Sidebar />
      <main>
        <Navbar />
        <Row className="d-flex">
          <Col xs={10} className="mx-auto justify-content-between d-flex">
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="🔍 What do you want to listen to?"
                style={{
                  color: "white",
                  backgroundColor: "black",

                  width: "380px",
                  borderRadius: "20px",
                }}
              />
            </Form>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {jobs.map((obj, i) => (
              <Job key={i} i={i} {...obj} cover={obj.album.cover_xl} />
            ))}
          </Col>
        </Row>
      </main>
      <Player />
    </>
  );
};

export default MainSearch;
