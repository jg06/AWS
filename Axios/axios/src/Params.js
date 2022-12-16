import React from "react";
import PropTypes from "prop-types";

function Params({ value, changeVal }) {
  return (
    <div>
      <h3>Param Value</h3>
      <textarea value={value} onChange={changeVal} />
    </div>
  );
}

Params.propTypes = {
  value: PropTypes.string.isRequired,
  changeVal: PropTypes.func.isRequired,
};

export default Params;
