import React, { useState, useMemo } from "react";
import "./App.css";
import TextArea from "./TextArea";
import TextList from "./TextList";
import InputArea from "./InputArea";

function App() {
  const user = [
    {
      id: 0,
      name: "홍길동",
      status: true,
    },
    {
      id: 1,
      name: "김아무개",
      status: false,
    },
    {
      id: 2,
      name: "이아무개",
      status: true,
    },
    {
      id: 3,
      name: "최아무개",
      status: false,
    },
    {
      id: 4,
      name: "박아무개",
      status: true,
    },
  ];

  const [users, changeUsers] = useState(user);
  const [value, changeValue] = useState("");

  const addUser = () => {
    changeUsers([...users, { id: user.length, name: value, status: "online" }]);
    changeValue("");
  };

  const reValue = (e) => {
    changeValue(e.target.value);
  };

  const reStatus = (index) => {
    changeUsers(
      users.map((user1) =>
        user1.id === index ? { ...user1, status: !user1.status } : user1
      )
    );
  };

  const countOnline = () => {
    console.log("이게 반복 됩니다.");
    return users.filter((user2) => user2.status === true).length;
  };

  const memo = useMemo(() => {
    countOnline();
  }, [users]);

  return (
    <>
      <InputArea value={value} change={reValue} add={addUser} />
      <TextArea count={memo} />
      <TextList items={users} reStatus={reStatus} />
    </>
  );
}

export default App;
