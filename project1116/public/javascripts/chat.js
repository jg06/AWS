/* eslint-disable no-undef */
// io("url", {options})
let socket = "";

const connect = document.getElementById("connect");
connect.addEventListener("click", () => {
  socket = io("ws://localhost:3000", {
    autoConnect: false,
    transports: ["websocket"],
  });

  socket.open((err) => {
    console.log(err);
  });

  socket.on("connect", () => {
    console.log(`socket의 아이디는 ${socket.id}`);
    console.log(`socket의 연결 상태는${socket.connected}`);
  });

  socket.on("hi", (arg) => {
    console.log(arg);
  });
});

const send = document.getElementById("send");
send.addEventListener("click", () => {
  socket.emit("chat", "hellow");
});
