import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux"; // redux의 모듈 명이 react-redux
// Provider는 제공하는 것 이라는 의미로 리액트에게 리덕스 정보를 제공한다.
import App from "./App";
import store from "./app/store"; // store를 불러옴.
// configureStore의 코드를 가지고 온다.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // react를 redux로 감싸서 redux를 사용할 수 있게 작성
  <Provider store={store}>
    <App />
  </Provider>
);
