const http = require("http");

http
  .createServer((req, res) => {
    res.write(`<h1>Hello Node!</h1>`);
    res.end(`<p>Hello Server</p>`);
  })
  .listen(3000, () => {
    console.log(`3000번 포트가 서버 대기중입니다!`);
  });
