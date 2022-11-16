const winston = require("winston");

const path = require('path');

const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(label({ label: "라벨 예제입니다." }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "./log/combined.log" }),
    new transports.File({
      filename: "./log/error.log",
      level: "error",
    }),
  ],
});

logger.log({
  level: "info",
  message: "로그 함수로 레벨를 지정 해 주며 레벨 및 메세지를 로그로 남김",
});

logger.info("레벨은 info로 지정하고, 메세지만 남김");

logger.error("레벨은 error로 지정하고, 메세지만 남김");

logger.debug("레벨이 info이기 때문에 해당 로그는 남지 않습니다.");

function getTime() {
  const dt = new Date();
  const year = dt.getFullYear();
  const month = `0${dt.getMonth() + 1}`.slice(-2);
  const date = `0${dt.getDate()}`.slice(-2);
  const hh = `0${dt.getHours()}`.slice(-2);
  const mm = `0${dt.getMinutes()}`.slice(-2);
  const ss = `0${dt.getSeconds()}`.slice(-2);
  const gt = `${year}-${month}-${date} ${hh}:${mm}:${ss}`;
  return gt;
}
function infoLog(func, eventName, sender, receiver, data) {
  infoLogs.log({
    level: "info",
    time: `${getTime()}`,
    function: `${func}`,
    eventName: `${eventName}`,
    sender: `${sender}`,
    receiver: `${receiver}`,
    data: `${data}`,
  });
}

infoLog(
  "sendMessage",
  "send",
  "hun1",
  "hun2",
  "추후 채팅방 만들 때 이렇게 해 주세요~"
);
module.exports = router;