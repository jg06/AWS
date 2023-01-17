import React, { useEffect, useState } from "react";
import "./App.css";
import InputArea from "./InputArea";
import sendHttp from "./api/sendHttp";
import Params from "./Params";
import Bodys from "./Bodys";

// 가칭 sendman
function App() {
  const [option, changeOption] = useState("GET");
  const [url, changeUrl] = useState("");
  const [value, changeValue] = useState("");
  const [data, changeData] = useState();

  const changeOpt = (event) => {
    changeOption(event.target.value);
    changeValue("");
  };

  const changeURL = (event) => {
    changeUrl(event.target.value);
  };

  const changeVal = (event) => {
    changeValue(event.target.value);
  };

  const btnClick = () => {
    sendHttp(option, url, value).then((res) => {
      changeData(res);
    });
  };

  // jsonplaceholder 페이지
  // https://jsonplaceholder.typicode.com/guide/
  // Parmas가 들어간 GET 경로
  // https://jsonplaceholder.typicode.com/posts?userId=1
  // GET 경로
  // https://jsonplaceholder.typicode.com/posts/1

  // 나는 페이지가 시작되자마자 get으로 불러 왔으면 좋겠다.
  useEffect(() => {
    console.log("렌더 및 업데이트가 될 때");
    sendHttp("GET", "https://jsonplaceholder.typicode.com/posts/1").then(
      (res) => {
        changeData(res);
      }
    );
  }, []);

  return (
    <>
      <InputArea
        option={option}
        url={url}
        changeOpt={changeOpt}
        changeURL={changeURL}
        btnClick={btnClick}
      />
      {option === "GET" || option === "DELETE" ? (
        <Params value={value} changeVal={changeVal} />
      ) : (
        <Bodys value={value} changeVal={changeVal} />
      )}
      <span>{JSON.stringify(data)}</span>
    </>
  );
}

export default App;
