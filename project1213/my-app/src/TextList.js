import React from "react";
import PropTypes from "prop-types";

function TextList({ items, reStatus }) {
  return (
    <ul>
      {items.map((value, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <span>{`이름 : ${value.name}, 상태 : ${
              !value.status ? "로그인" : "로그아웃"
            }`}</span>
            {!value.status ? (
              <button
                type="button"
                onClick={() => {
                  reStatus(index);
                }}
              >
                로그아웃 시키기
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  reStatus(index);
                }}
              >
                로그인 시키기
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

TextList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      status: PropTypes.bool,
    })
  ).isRequired,
  reStatus: PropTypes.func.isRequired,
};

export default TextList;
