import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Letter = ({ letter }) => {
  if (letter.length === 0) return null;
  return (
    <Fragment>
      <h2>Letra de la canción</h2>
      <p className="letra">{letter}</p>
    </Fragment>
  );
};

Letter.propTypes = {
  letter: PropTypes.array.isRequired
};

export default Letter;
