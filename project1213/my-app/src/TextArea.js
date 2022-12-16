import React from "react";
import PropTypes from "prop-types";

function TextArea({ count }) {
  return (
    <div>
      <span>{`현재 온라인 한 고객의 수는 ${count}명 입니다.`}</span>
    </div>
  );
}

// TextArea.defaultProps = {
//   count: 0,
// };

TextArea.propTypes = {
  count: PropTypes.number.isRequired,
};

export default TextArea;
