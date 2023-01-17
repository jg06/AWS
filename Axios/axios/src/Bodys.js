import React from "react";
import PropTypes from "prop-types";

function Bodys({ value, changeVal }) {
  return (
    <div>
      <h3>Body Value</h3>
      <textarea value={value} onChange={changeVal} />
    </div>
  );
}

Bodys.propTypes = {
  value: PropTypes.string.isRequired,
  changeVal: PropTypes.func.isRequired,
};

export default Bodys;
