import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
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
          <Col xs={10} className="mx-auto my-3">
            <h1 className="text-light">Liked Songs</h1>
          </Col>
          <Col xs={10} className="mx-auto my-3">
            <ListGroup>
              {favourites.map((fav, i) => (
                <ListGroupItem
                  key={i}
                  className="bg-dark d-flex align-items-center"
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
