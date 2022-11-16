var express = require('express');
const process = require('process');
const logger = require("logger");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

logger.log({
  level: "info",
  message: "로그 함수로 레벨를 지정 해 주며 레벨 및 메세지를 로그로 남김",
});

logger.info("레벨은 info로 지정하고, 메세지만 남김");

logger.error("레벨은 error로 지정하고, 메세지만 남김");

logger.debug("레벨이 info이기 때문에 해당 로그는 남지 않습니다.");

module.exports = router;
