import React from "react";
import PropTypes from "prop-types";

function InputArea({ change, value, add }) {
  return (
    <div>
      <input type="text" onChange={change} value={value} />
      <button type="button" onClick={add}>
        추가
      </button>
    </div>
  );
}

InputArea.propTypes = {
  change: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
};

export default InputArea;
