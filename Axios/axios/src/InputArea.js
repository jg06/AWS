import React from "react";
import PropTypes from "prop-types";

function InputArea({ option, url, changeOpt, changeURL, btnClick }) {
  const options = ["GET", "POST", "PUT", "DELETE"];

  return (
    <div>
      <select value={option} onChange={changeOpt}>
        {options.map((value) => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
      <input type="text" value={url} onChange={changeURL} />
      <button type="button" onClick={btnClick}>
        보내기
      </button>
    </div>
  );
}

InputArea.propTypes = {
  option: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  changeOpt: PropTypes.func.isRequired,
  changeURL: PropTypes.func.isRequired,
  btnClick: PropTypes.func.isRequired,
};

export default InputArea;
