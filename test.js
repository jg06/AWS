// 함수 기본형을 Promise으로 구현
// resolve -> 성공
// reject -> 실패
function mul(v1, v2) {
  return new Promise((t, f) => {
    const result = v1 * v2;
    t(result);
  });
}

mul(1, 2).then((result) => {
  console.log(result);
});

//함수를 callback으로 구현
function div(v1, v2, callback) {
  const result = v1 / v2;
  callback(result);
}

div(2, 42, (result) => {
  console.log(result);
});

//함수 div를 callback -> Promise로 구현
function div(v1, v2) {
  return new Promises((t, f) => {
    const result = v1 / v2;
    t(result);
  });
}

div(2, 42).then((result) => {
  console.log(result);
});

// setTimeout 1초가 들어간 callback 덧셈
function setSum(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}

setSum(2, 42, (result) => {
  console.log(result);
});

// setTimeout 1초가 들어간 Promise 덧셈
function setAdd(v1, v2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(v1 + v2);
    }, 1000);
  });
}

setAdd(1, 2).then((result) => {
  console.log(result);
});

//callback mul -> setAdd 결과값 console.log
function mul(v1, v2, callback) {
  callback(v1 * v2);
}

function setAdd(v1, v2, callback) {
  setTimeout(() => {
    callback(v1 + v2);
  }, 1000);
}

mul(1, 2, (r1) => {
  console.log(r1);
  setAdd(r1, 3, (r2) => {
    console.log(r2);
  });
});

// Promise mul -> setAdd 결과값 console.log
function mul(v1, v2) {
  return new Promise((resolve, reject) => {
    resolve(v1 * v2);
  });
}

function setAdd(v1, v2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(v1 + v2);
    }, 1000);
  });
}
mul(1, 2).then((r1) => {
  setAdd(r1, 3, (r2) => {
    console.log(r2);
  });
});

// add 함수 만들고 resolve, reject를 이용해서 Promise를 만들어 주세요 그리고 나서 .then, .catch로 사용 해 주세요
function add(v1, v2) {
  return new Promise((resolve, reject) => {
    if (err === true) {
      reject("add에서 err가 발생했습니다.");
    } else {
      resolve(v1 + v2);
    }
  });
}
add(1, 2)
  .then((r1) => {
    console.log(r1);
  })
  .catch((err) => {
    console.log(err);
  });

const error2 = false; // true면 에러, false면 정상
// add2를 만들어 주세요. 함수 내용은 add와 같습니다.
// 다만 add와 add2의 에러를 구분 해 주시고
// add2에서만 에러를 발생 해 주세요
// .then으로 묶어서 사용 해 주세요.
function add2(v1, v2) {
  return new Promise((resolve, reject) => {
    if (error2) {
      reject("add2에서 에러가 발생 했습니다.");
    } else {
      resolve(v1 + v2);
    }
  });
}

add(1, 2)
  .then((v1) => {
    console.log("밑에 함수를 v2로 넘겨주려면");
    return add2(v1, 3);
  })
  .then((v2) => {
    console.log(v2);
  })
  .catch((err) => {
    console.log(err);
  });

// add2에서 에러가 발생 했습니다.

//문제 1 - Promise 만들기
function call(v1) {
  return new Promise((resolve, reject) => {
    const result = v1[0] + v1[1];
    resolve(result);
  });
}

call([1, 2]).then((result) => {
  console.log(result);
});

//아래의 Callback 함수를 promise로 바꾸어 주세요.
function promise(result) {
    new Promise((resolve, reject) => {
        const result;
    if (error === true) {
      resolve("success");
    } else {
      reject("fail");
    }
  });
}

promise(result).then((result) => {
  console.log(result);
});


//문제 3 - 여러 함수 Promise로 묶기
function add(v1, v2) {
  return new Promise((resolve) => {
    resolve(v1 + v2);
  });
}

function min(v1, v2) {
  return new Promise((resolve) => {
    resolve(v1 - v2);
  });
}

function mul(v1, v2) {
  return new Promise((resolve) => {
    resolve(v1 * v2);
  });
}

function div(v1, v2) {
  return new Promise((resolve) => {
    resolve(v1 / v2);
  });
}

add(3, 1)
  .then((v1) => min(v1, 2))
  .then((v1) => mul(v1, 4))
  .then((v1) => div(v1, 2))
  .then((v1) => {
    console.log(v1);
  });



//문제 4 - Promise로 바꾸기
function getComm(userId) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.responseText);
    };

    xhr.open("GET", `http://localhost:3000/comment/get/user/${userId}`);
    xhr.send();
  });
}

function makeComment(cid, userId, nick, date, content, sort = "DESC") {
  const div1 = document.createElement("div");
  div1.className = "comment-wrap";

  const div1_1 = document.createElement("div");
  div1_1.className = "comment-first";
  const div1_1_1 = document.createElement("div");
  div1_1_1.className = "comment-first-left";
  const span1_1_1_1 = document.createElement("span");
  span1_1_1_1.innerText = nick;
  const span1_1_1_2 = document.createElement("span");
  span1_1_1_2.innerText = date;
  div1_1_1.append(span1_1_1_1, span1_1_1_2);
  div1_1.append(div1_1_1);

  const div1_2 = document.createElement("div");
  div1_2.className = "comment-second";
  const span1_2_1 = document.createElement("span");
  span1_2_1.innerText = content;
  div1_2.append(span1_2_1);

  div1.append(div1_1, div1_2);

  if (sort === "ASC") {
    document.getElementsByClassName("profile-bottom")[0].prepend(div1);
  } else if (sort === "DESC") {
    document.getElementsByClassName("profile-bottom")[0].append(div1);
  }
}

getComm(1)
  .then((response) => {
    response.content.forEach((element) => {
      makeComment(
        element.cid,
        element.uid,
        element.nick,
        element.date,
        element.content
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

  // 5번 문제
function getFollowing(userId) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.responseText);
    };

    xhr.open(
      "GET",
      `http://localhost:3000/profile/following/${userId}?page=${fingPage}&count=${fingCount}`
    );
    xhr.send();
  });
}

function makeFollow(userId, nick, sort) {
  const div1 = document.createElement("div");
  div1.className = "follow-content";

  const div1_1 = document.createElement("div");
  div1_1.className = "follow-top";
  const span1_1 = document.createElement("span");
  span1_1.innerText = nick;

  div1_1.addEventListener("click", () => {
    location.href = `http://localhost:3000/profile.html?uid=${userId}`;
  });

  div1_1.append(span1_1);
  div1.append(div1_1);

  if (sort === "ASC") {
    document.getElementsByClassName("profile-bottom")[0].prepend(div1);
  } else if (sort === "DESC") {
    document.getElementsByClassName("profile-bottom")[0].append(div1);
  }
}

getFollowing(1)
  .then((response) => {
    response.following.forEach((element) => {
      makeFollow(element.u_id, element.u_nick, "DESC");
    });
  })
  .catch((err) => {
    console.error(err);
  });


// 6번 문제
function solution(array) {
  var answer = 0;
  // array.sort((a, b) => {
  //   if (a > b) {
  //     return 1;
  //   }
  //   if (a < b) {
  //     return -1;
  //   }
  //   if (a === b) {
  //     return 0;
  //   }
  // });
  array.sort((a, b) => {
    return a - b;
  });
  answer = array[Math.floor(array.length / 2)];
  return answer;
}

function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}


// 7번 문제
function solution(my_string) {
  var answer = 0;
  const my_array = my_string.split("");
  for (let i = 0; i < my_array.length; i++) {
    const checkNumber = parseInt(my_array[i]);
    if (Number.isNaN(checkNumber) === false) {
      answer = answer + checkNumber;
    }
  }
  return answer;
}

// 삼항연산자
let condition = false;
let page;
if (condition === false) {
  page = 0;
} else {
  page = 1;
}
const page = condition === false ? 0 : 1;

const page2 =
  condition === false && 0;


// 만약에 아래와 같이 obj가 정의 되어 있습니다
const user = {
  name: "123",
};
// name이라는 변수를 넣어주시는데 user가 hun이면 이름을 그대로 넣고
// 아니면 unknown이라고 name의 변수에 넣어 주세요.

let name;
if (user.name === "hun") {
  name = "hun";
} else {
  name = "unknown";
}
const name2 = user.name === "hun" ? "hun" : "unknown";

//////////////////////////////////////////12월 5일//////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////


//1
let confition = true / false;
let name;
if (confition === true) {
  name = "트루";
} else {
  name = "팔스";
}

let name2 = confition === true ? "트루" : "팔스";


//2
const param = 5;
let confition = (v1) => {
  return v1 % 2;
};
let name;
if (confition(param) === 0) {
  name = "짝수";
} else {
  name = "홀수";
}

let name2 = confition(param) === 0 ? "짝수" : "홀수";


//3
const param = 9;
let confition = (v1) => {
  return v1 % 2;
};
let name;
if (confition(param) === 0) {
  if (param >= 10) {
    name = "10보다 큰 짝수";
  } else {
    name = "10보다 작은 짝수";
  }
} else {
  name = "홀수";
}

// let name2 =
//   confition(param) === 0
//     ? param >= 10
//       ? "10보다 큰 짝수"
//       : "10보다 작은 짝수"
//     : "홀수";
let name2 =
  if (confition(param) === 0) {
    if(param >= 10) {
      "10보다 큰 짝수"
    } else { "10보다 작은 짝수"}
  } else {
    "홀수"  
  } ;
  

//4
router.get("/follower/:uid", (req, res) => {
  let { page, count } = req.query;
  if (page === undefined) page = 0;
  if (count === undefined) count = 10;
}
  
const req = {
	body: {
    page: 0,
    count: 5
	}
}

let page = if (req.body.page === undefined) {
  page = 0
} else {
  page = page
}
let page = req.body.page === undefined ? 0 : page

let count = if (req.body.count === undefined) {
  count = 0
} else {
  count = count
}
let count = req.body.count === undefined ? 0 : count

혹은

const { page = req.body.page === undefined ? 0 : req.body.page, count = req.body.count === undefined ? 0 : req.body.count } = req.body;


//5번
<div id="profile" class="wrap-left-profile">
  <span>PROFILE</span>
</div>

const Span = () => { return <span>PROFILE</span> }
const Div = () => {
  return <div id="profile" className="wrap-left-profile">
    <Span />
  </div>
}


//6번
<div id="following">
  <span class="count" id="following-count"></span>
  <span>팔로잉</span>
</div>
const Span1 = () => {
  return <span className="count" id="following-count"></span>
}
const Span2 = () => {
  return <span>팔로잉</span>
}

const Div = () => {
  return <div id="following">
    <Span1 />
    <Span2 />
  </div>
}


//7
<div class="wrap-left-search"> -> Div
  <img src="./images/search.png" /> -> Img
  <input type="text" id="search" placeholder="Search" /> -> Input
</div>

const Img = () => {
  const src = "./images/search.png"
  return <img src={ src } />
}
const Input = () => {
  return <input type="text" id="search" placeholder="Search" />
}

const Div = () => {
  return <div class="wrap-left-search">
    <Img />
    <Input />
  </div>
}

//8
function solution(n, t) {
  var answer = n;
  for (let i = 0; i < t; i++) {
    answer = answer * 2
  }
  return answer;
}

// function solution(n, t) {
//   return n * 2 ** t;
// }
// console.log(solution(2, 10));


//9
// Set   제일 쉬운데 뭔가 개념을 안친숙 할 수 있어요
// indexOf   그나마 이게 제일 낫습니다
// for => array  힘들어요
// for => object   // array보다는 쉽지만 indexOf보다는 어려워요
const my_string = "people";
function solution(my_string) {
  var answer = "";
  // 같은 문자가 없으면 다른 배열에 추가 해 주자!
  const arr1 = []; // 고유한 문자 저장
  const arr2 = my_string.split(""); // 받은 문자 저장
  for (let i = 0; i < arr2.length; i++) {
    let check = false;
    // arr1에서 arr2의 같은 것을 찾으면 그냥 넘어가고 찾지 못하면 arr1에 추가
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        check = true;
      }
    }
    if (check === false) {
      arr1.push(arr2[i]);
    }
  }
  answer = arr1.join("");
  return answer;
}

// for문에 object를 이용하여 찾기
function solution(my_string) {
  var answer = "";
  const obj = {
    answer: "",
  };
  const arr = my_string.split("");
  for (let i = 0; i < arr.length; i++) {
    console.log(obj);
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = true;
      obj.answer = obj.answer + arr[i];
    }
  }
  answer = obj.answer;
  return answer;
}


//exp
const arr = [-2, 3, 0, 2, -5];
for (let i = 0; i < 5; i++) {
  for (let j = i + 1; j < 5; j++) {
    for (let k = j + 1; k < 5; k++) {
      console.log(
        `첫번째 비교 대상은 ${arr[i]}, 두번째 비교 대상은 ${arr[j]}, 세번째 비교 대상은 ${arr[k]}`
      );
    }
  }
}

//////////////////////////////////////////12월 6일//////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// 1번 문제 정답
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 2번 문제 정답
const array = [1, 2, 3, 4, 5];
for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

// 3번 문제 정답
const array = [1, 2, 3, 4, 5]
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
		console.log(array[i], array[j])
	}
}
// 4번 문제 정답
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i = i + 2) {
  for (let j = 0; j < array.length; j++) {
    console.log(array[i], array[j]);
  }
}
// 5번 문제 정답
let isTrue = false;
let name;
if (isTrue === flase) {
  name = "거짓";
} else {
  name = "진실";
}
// 아래에 빈칸을 채워 주세요.
name = isTrue === flase ? "거짓" : "진실";


//6
const root = ReactDOM.createRoot(document.getElementById("root"));

const obj = {
	lastLogin: "2022-12-06",
	name: "hun",
	phon: "010-1234-1234"
}

function Userinfo(props) {
  return (
    <div className="UserInfo">
      <h1 className="name">{props.name}</h1>
      <h2 className="phon">{props.phon}</h2>
      <h2 className="lastLogin">{props.lastLogin}</h2>
    </div>
  );
}

root.render(
        <UserInfo
            name={UserInfo.name}
            phon={UserInfo.phon}
            lastLogin={UserInfo.lastLogin}
        />
);


//7
const root = ReactDOM.createRoot(document.getElementById("root"));

//const obj = {
//	lastLogin: "2022-12-06",
//	name: "hun",
//	phon: "010-1234-1234"
//}

function Userinfo(props) {
  return (
    <div className="UserInfo">
      <h1 className="name">{UserInfo.name}</h1>
      <h2 className="phon">{UserInfo.phon}</h2>
      <h2 className="lastLogin">{UserInfo.lastLogin}</h2>
    </div>
  );
}

// 여기에 defaultProps를 넣어주세요
Userinfo.defaultProps = {
  name: "기본값",
  phon: "기본값",
  lastLogin: "기본값"
    };

root.render(
        <UserInfo
            name={UserInfo.name}
            phon={UserInfo.phon}
            lastLogin={UserInfo.lastLogin}
        />
);


//8
const root = ReactDOM.createRoot(document.getElementById("root"));

function Userinfo(props) {
  return (
    <div className="UserInfo">
      <h1 className="work">{props.author.work}</h1>
      <h2 className="UserInfo-name">{props.author.name}</h2>
    </div>
  );
}

Userinfo.propTypes = {
  author: PropTypes.shape({
    work: PropTypes.string.isRequire,
    name: PropTypes.string,
}

function Comment(props) {
  return (
    <div className="Comment">
      <Userinfo author={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}

Comment.propTypes = {
  author: PropTypes.object,
  text: PropTypes.number,
  date: PropTypes.string,
}

const comment = {
  author: {
    name: "hun",
    work: "효성직업전문학원",
  },
  text: 5,
  date: new Date().toLocaleDateString(),
};

root.render(
  <Comment
    author={comment.author}
    text={comment.text}
    date={comment.date}
  />
);

//9-type1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer = answer + numbers[i];
  }
  return answer / numbers.length;
}

//9-type2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function solution(numbers) {
  numbers.reduce((a, b) => {
    console.log(a, b);
    return a + b;
  });
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function reduce(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = func(num, arr[i]);
  }
}

reduce(numbers, (a, b) => {
  return a + b;
});

solution(numbers);

//
function reduce(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = func(num, arr[i]);
  }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reduce(numbers, (a, b) => {
  console.log(a, b);
  return a + b;
});
