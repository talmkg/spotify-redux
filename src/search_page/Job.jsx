import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";

const Job = ({ id, title, name, type, cover, i }) => {
  const favourites = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();

  const isFav = favourites.includes(title);

  return (
    <>
      <Row
        className="mx-0 mt-3 p-3 text-light d-flex align-items-center justify-content-between"
        style={{
          border: "2px solid #00000033",
          borderRadius: "15px",
          backgroundColor: "transparent",
        }}
      >
        {i}
        <Col xs={1} className="d-flex align-items-center">
          <img src={cover} className="w-75 h-75" />
        </Col>

        <Col xs={4}>{title}</Col>
        <Col>
          <Link to={`/${title}`} className="mx-3" id="no-deco">
            {title}
          </Link>
        </Col>
        <Col xs={2}>
          {isFav ? (
            <HeartFill
              color="green"
              size={22}
              className="mr-2 my-auto"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_FAVOURITE",
                  payload: title,
                })
              }
            />
          ) : (
            <Heart
              color="green"
              size={22}
              className="my-auto"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_FAVOURITE",
                  payload: title,
                })
              }
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default Job;
