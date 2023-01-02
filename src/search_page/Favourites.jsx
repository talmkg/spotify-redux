import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { HeartFill, Heart } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <>
      <Sidebar />
      <main>
        <Navbar />
        <Row>
          <Col xs={10} className="d-flex align-items-center mx-auto my-3">
            <div className="me-3">
              <Heart
                color="white"
                size={150}
                id="gradient-liked-songs"
                style={{ padding: "3rem" }}
              />
            </div>
            <div>
              <p className="px-1 m-0">PLAYLIST</p>
              <h1
                className="text-light"
                style={{ fontSize: "80px", fontWeight: "600" }}
              >
                Liked Songs
              </h1>
            </div>
          </Col>
          <div className="w-100">
            <hr style={{ color: "white" }} />
          </div>
          <Col xs={10} className="mx-auto my-3">
            <ListGroup>
              {favourites.map((fav, i) => (
                <ListGroupItem
                  key={i}
                  className="bg-transparent border-none d-flex align-items-center rounded"
                  id="song-favourite-item"
                  style={{ fontSize: "17px" }}
                >
                  <div>
                    <HeartFill
                      className="text-success me-2"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_FAVOURITE",
                          payload: fav,
                        })
                      }
                    />
                  </div>
                  <div className="text-light">{fav}</div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </main>
      <Player />
    </>
  );
};

export default Favourites;
