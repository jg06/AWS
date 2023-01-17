function checkEng(str) {
  const regExp = /[a-zA-Z]/g; // 영어
  if (regExp.test(str)) {
    return true;
  } else {
    return false;
  }
}

        let namePrompt = prompt("이름을 입력하세요.");

        let name = Number(namePrompt);

        if (name >= 20) {
          alert("출입이 가능합니다!");
        } else {
          alert("출입이 금지 되었습니다!");
        }