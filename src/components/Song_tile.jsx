import { Button, Col } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import React, { Component } from "react";
import { BsPlayCircle } from "react-icons/bs";
const Song_tile = ({ title, cover, preview }) => {
  const favourites = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();
  const isFav = favourites.includes(title);
  let audio = new Audio(`${preview}`);
  const start = () => {
    audio.play();
  };

  return (
    <div class="col">
      <div class="background-card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={cover}
              class="img-fluid rounded-start w-100 h-100 cover"
            />
          </div>

          <div class="col-md-8 d-flex align-items-center">
            <Col xs={9}>
              <h5 className="card-title  mx-1 text-truncate">{title}</h5>
            </Col>
            <Col xs={2} id="top-buttons">
              <BsPlayCircle
                size={30}
                onClick={start}
                className="text-success bi-play-fill"
              />
              {/* #top-buttons:hover .bi-play-fill */}
            </Col>
            {/* <Col xs={2}>
              <div class="card-body">
                {isFav ? (
                  <HeartFill
                    color="green"
                    size={22}
                    className="mr-2 my-auto hearts"
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
              </div>
            </Col> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Song_tile;
