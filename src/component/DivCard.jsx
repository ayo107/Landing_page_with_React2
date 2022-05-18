import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {
  return (
    <div className="card col-12 col-md-4 p-2">
      <img />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.buttonUrl} className="btn btn-primary">
          {props.buttonLabel}
        </a>
      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonLabel: PropTypes.string
};
