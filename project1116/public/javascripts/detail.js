// [0]? [1]bid[0] = 38[1]
const url = location.search;
const bid = url.split("?")[1].split("=")[1];

sessionStorage.setItem("id", 3);
sessionStorage.setItem("name", "4");
sessionStorage.setItem("nick", "4");

getBoard(bid, () => {});

document.getElementById("comment-btn").addEventListener("click", () => {
  if (document.getElementById("comm").value.length) {
    const xhr = new XMLHttpRequest();
    const data = {
      userId: sessionStorage.getItem("id"),
      content: document.getElementById("comm").value,
      bid,
      // bid: bid와 같습니다.
    };

    xhr.onload = () => {
      if (xhr.status === 201) {
        // 동적 DOM 만들어서 추가
      }
    };

    xhr.onerror = () => {
      console.error(xhr.responseText);
    };

    xhr.open("POST", "http://localhost:3000/comment/write");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  }
});

function getBoard(boardId, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
      document.getElementById("nick").innerText = response.nick;
      document.getElementById("date").innerText = getTime(response.date);
      document.getElementById("content").innerText = response.content;
      callback();
    }
  };

  xhr.onerror = () => {
    console.error(xhr.responseText);
  };

  xhr.open("GET", `http://localhost:3000/board/get/board/${boardId}`);
  xhr.send();
}

function getTime(date) {
  const dt = new Date(date);
  const year = dt.getFullYear();
  const month = `0${dt.getMonth() + 1}`.slice(-2);
  const day = `0${dt.getDate()}`.slice(-2);
  const hh = `0${dt.getHours()}`.slice(-2);
  const mm = `0${dt.getMinutes()}`.slice(-2);

  // 입력 받은 시간의 UNIX Timestamp
  dt.getTime();

  // 현재 시간의 UNIX Timestamp
  const now = new Date();

  const pass = now.getTime() - dt.getTime();

  let val = "";
  console.log(pass);
  switch (true) {
    case pass >= 31536000000:
      val = `${Math.floor(pass / 31536000000)}년 전`;
      break;

    case pass >= 2592000000:
      val = `${Math.floor(pass / 2592000000)}월 전`;
      break;

    case pass >= 86400000:
      val = `${Math.floor(pass / 86400000)}일 전`;
      break;

    case pass >= 60000:
      console.log(pass);
      val = `${Math.floor(pass / 60000)}분 전`;
      break;

    default:
      console.log("default");
      val = "0분 전";
      break;
  }

  return `${year}-${month}-${day} ${hh}:${mm} (${val})`;
}
