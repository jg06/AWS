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
// for => splice 힘들어요
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

// for문으로 해서 앞에서 뒤에꺼를 찾으면 뒤에꺼 삭제
function solution(my_string) {
  var answer = "";
  const arr2 = my_string.split("");
  for (let i = arr2.length; i >= 0; i -= 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      if (arr2[i] === arr2[j]) {
        arr2.splice(i, 1);
      }
    }
  }
  answer = arr2.join("");
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

//////////////////////////////////////////12월 7일//////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

////////////////1
class Study {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name}을 공부하고 있습니다.`);
  }
}

class Coding extends Study {
  constructor(name, today) {
    super(name);
    this.today = today;
  }

  speak() {
    console.log(`${this.today}은 ${this.name}를 공부 하고 있습니다.`);
  }
}

const coding = new Coding("React", "오늘");
coding.speak();

// |출력 결과를 입력 해 주세요|
오늘은 리엑트를 공부하고 있습니다


////////////////2
const root = document.getElementById("root");

class H1 extends React.Fragment {
  constructor(props) {
      super(props);
  }

  render() {
      return <h1>여기는 {this.props.name}!!!</h1>;
  }
}

const Container = () => {
  return (
    <React.Fragment>
      <H1 name="대한민국" />
    </React.Fragment>
  );
};
ReactDOM.render(<Container />, root);


/////3
const root = document.getElementById("root");

function H1(props) {
  return <h1>여기는 {props.name}!!!</h1>;
}

const Container = () => {
  return (
    <React.Fragment>
      <H1 name="대한민국" />
    </React.Fragment>
  );
};
ReactDOM.render(<Container />, root);



/////4
const root = document.getElementById("root");
class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
                counter: 0,
            };
  }

  add = () => {
		this.setState({
                counter: this.state.counter + 1,
            });
  };

  render() {
    return (
      <div>
        <span>클릭: {this.state.counter}</span>
        <button style={{ color: "red" }} onClick={this.add}>
          클릭
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, root);


// 5번문제 정답
const root = document.getElementById("root");
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  // state = {
  //   counter: 0
  // }

  componentDidMount() {
    console.log("페이지 로딩이 완료되었습니다");
  }

  add = () => {
    this.setState((v1) => ({
      counter: v1.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        <span>클릭: {this.state.counter}</span>
        <button style={{ color: "red" }} onClick={this.add}>
          클릭
        </button>
      </div>
    );
  }
}


// 6번 문제 정답
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer = answer + 1;
    }
  }
  return answer;
}

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    for (let l = 1; l <= n; l++) {
      if (i * l === n) {
        answer = answer + 1;
      }
    }
  }
  return answer;
}

//////////////////////////////////////////12월 8일//////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

///1
const array = [1,2,3,4,5]
const array2 = []
for (let i = 0; i < array.length; i++) {
  array2.push(array[i]*2);
}
console.log(array2);

//2
const array = [1, 2, 3, 4, 5];
const array2 = [];
array.forEach((v) => {
  array2.push(v * 2);
  array2[i] = v * 2;
});

//3
const array = [1,2,3,4,5]
const array2 = array.map((value) => {
  return value * 2;
});
console.log(array2);


//4
const array = ["일어나기", "씻기", "커피사기", "출근하기", "일하기", "점심먹기", "일하기", "퇴근하기"]
const array2 = []
for (let i = 0; i < array.length; i++) {
  array2.push(<li>{array[i]}</li>);
}


//5
const array = ["일어나기", "씻기", "커피사기", "출근하기", "일하기", "점심먹기", "일하기", "퇴근하기"]
const array2 = []
array.forEach((v) => {
  array2.push(<li>{v}</li>);
});


// 6번 문제 정답
const array = [
  "일어나기",
  "씻기",
  "커피사기",
  "출근하기",
  "일하기",
  "점심먹기",
  "일하기",
  "퇴근하기",
];
const array2 = array.map((v) => {
  return <li>{v}</li>;
});


// 7번 문제 정답
const root = ReactDOM.createRoot(document.getElementById("root"));
const array = [
  { id: "1", name: "김", nick: "김씨" },
  { id: "2", name: "이", nick: "이씨" },
  { id: "3", name: "최", nick: "최씨" },
  { id: "4", name: "박", nick: "박씨" },
];

function ClientList(props) {
  return <ul>{props.clientList}</ul>;
}
const array2 = [];
for (let i = 0; i < array.length; i++) {
  array2.push(
    <li>{`${array[i].id}번의 이름은 ${array[i].name}이고 닉네임은 ${array[i].nick}입니다.`}</li>
  );
}

root.render(<ClientList clientList={array2} />);


// 8번 문제 정답
const root = ReactDOM.createRoot(document.getElementById("root"));
const array = [
  { id: "1", name: "김", nick: "김씨" },
  { id: "2", name: "이", nick: "이씨" },
  { id: "3", name: "최", nick: "최씨" },
  { id: "4", name: "박", nick: "박씨" },
];

function ClientList(props) {
  return <ul>{props.clientList}</ul>;
}
const array2 = [];
array.forEach((v) => {
  array2.push(
    <li>{`${v.id}번의 이름은 ${v.name}이고 닉네임은 ${v.nick}입니다.`}</li>
  );
});

root.render(<ClientList clientList={array2} />);

// 



// 9번 문제 정답
const root = ReactDOM.createRoot(document.getElementById("root"));
const array = [
  { id: "1", name: "김", nick: "김씨" },
  { id: "2", name: "이", nick: "이씨" },
  { id: "3", name: "최", nick: "최씨" },
  { id: "4", name: "박", nick: "박씨" },
];

function ClientList(props) {
  return <ul>{props.clientList}</ul>;
}
const array2 = array.map((v) => {
  return (
    <li>{`${v.id}번의 이름은 ${v.name}이고 닉네임은 ${v.nick}입니다.`}</li>
  );
});

root.render(<ClientList clientList={array2} />);



// // 10번 문제 정답
const root = ReactDOM.createRoot(document.getElementById("root"));
const array = [
  { id: "1", name: "김", nick: "김씨" },
  { id: "2", name: "이", nick: "이씨" },
  { id: "3", name: "최", nick: "최씨" },
  { id: "4", name: "박", nick: "박씨" },
];

function ClientList(props) {
  return <ul>{props.clientList}</ul>;
}
const array2 = array.map((v) => {
  if (v.name === "김") {
    return (
      <li>{`${v.id}번의 이름은 ${v.name}이고 닉네임은 ${v.nick}입니다.`}</li>
    );
  }
});

root.render(<ClientList clientList={array2} />);


//11
function solution(my_string, letter) {
  var answer = "";
  const my_array = my_string.split("");
  console.log(my_array);
  for (let i = my_array.length - 1; i >= 0; i--) {
    console.log(i);
    if (my_array[i] === letter) {
      my_array.splice(i, 1);
    }
  }
  answer = my_array.join("");
  return answer;
}

console.log(solution("abcdeff", "f"));


//11-1
// function solution(my_string, letter) {
//   var answer = "";
//   const my_array = my_string.split("");
//   answer = my_array.map((string) => {
//     if (string !== letter) return string;
//   });
//   return answer.join("");
// }

// console.log(solution("abcdeff", "f"));

//11-2
// function solution(my_string, letter) {
//   var answer = my_string.split(letter).join("");
//   return answer;
// }


// 12번 문제 정답
function solution(strlist) {
  var answer = strlist.map((v) => {
    return v.length;
  });
  return answer;
}

function solution(strlist) {
  return strlist.map((v) => v.length);
}

console.log(solution(["We", "are", "the", "world!"]));

// function solution(strlist) {
//   var answer = [];
//   for (let i = 0; i < strlist; i++) {
//     answer.push(strlist[i].length);
//   }
//   return answer;
// }

// function solution(strlist) {
//   var answer = [];
//   strlist.forEach((v) => {
//     answer.push(v.length);
//   });
//   return answer;
// }




//////////////////////////////////////////12월 9일//////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

//1
const root = ReactDOM.createRoot(document.getElementById("root"));
const array = [1, 2, 3, 4, 5];
const array2 = array.map((value, index) => {
  return <li key={index}>{value}</li>
});
function ClientList(props) {
  return <ul>{props.clientList}</ul>;
}
root.render(<ClientList clientList={array2} />);





//2
const root = ReactDOM.createRoot(document.getElementById("root"));

    function ListItem(props) {
      console.log(props);
      return (
        <li
          // onClick={() => {
          // props.clickEvent(props.index);
          // }}
          onClick={props.clickEvent}
        >
          {props.value}
        </li>
      );
    }

    function TextLists(props) {
      props; // {items:{}, clickEvent: function handleClick}
      const items = props.items;
      return (
        <ul>
          {items.map((value, index) => {
            return (
              <ListItem
                key={index}
                value={value}
                // clickEvent={props.clickEvent}
                // index={index}
                clickEvent={() => {
                  props.clickEvent(index);
                }}
              />
            );
          })}
        </ul>
      );
    }

    class ListControl extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          list: [1, 2, 3],
          value: "",
        };
      }

      handleClick = (index) => {
        const lists = this.state.list;
        lists[index] = lists[index] * 2;
        this.setState({ list: lists });
      };

      render() {
        return (
          <React.Fragment>
            <TextLists items={this.state.list} clickEvent={this.handleClick} />
          </React.Fragment>
        );
      }
    }

    root.render(<ListControl />);



//3
function solution(n) {
  var answer = 0;
	answer = parseInt((n-1)/7)+1;
  return answer;
}
console.log(solution(n));


//4
function solution(slice, n) {
  var answer = 0;
  answer = parseInt((n-1)/slice)+1;
  return answer;
}
console.log(solution(4, 12));

// 3번 문제 정답
function solution(n) {
  // ceil  올림
  // round 반올림
  // floor 버림
  return Math.ceil(n / 7);
}

// 4번 문제 정답
function solution(slice, n) {
  return Math.ceil(n / slice);
}

//////////////////////////////////////////12월 13일//////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

//1
// for문
function solution(cipher, code) {
  var answer = "";
  for (let i = 0; i < cipher.length; i += 1) {
    if (i % code === code - 1) {
      answer = answer + cipher[i];
    }
  }
  return answer;
}
solution("dfjardstddetckdaccccdegk", 4);

// filter
function solution(cipher, code) {
  return cipher
    .split("")
    .filter((value, index) => index % code === code - 1)
    .join("");
}
console.log(solution("dfjardstddetckdaccccdegk", 4));

// 좋은 for문
function solution(cipher, code) {
  var answer = "";
  for (let i = 1; i < cipher.length; i = i + code) {
    answer = answer + cipher[i];
  }
  return answer;
}

//2
// for문
function solution(array) {
  var answer = [0, 0];
  for (let i = 0; i < array.length; i += 1) {
    if (answer[0] < array[i]) {
      answer = [array[i], i];
    }
  }
  return answer;
}

// map으로 푼다
function solution(array) {
  var answer = [0, 0];
  array.map((value, index) => {
    if (answer[0] < value) {
      answer = [value, index];
    }
  });
  return answer;
}

// forEach으로 푼다
function solution(array) {
  var answer = [0, 0];
  array.forEach((value, index) => {
    if (answer[0] < value) {
      answer = [value, index];
    }
  });
  return answer;
}

console.log(solution([1, 8, 3]));



//////////////////////////////////////////12월 14일//////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

//1
// 1번문제 for문
// right -> 배열의 끝에 있는 것이 배열의 첫번째로 간다.
//            pop -> unshift를 하면 된다.

// left -> 배열의 첫번째 있는 것이 배열의 마지막으로 간다
//           shift -> push
function solution(numbers, direction) {
  var answer = [];
  // numbers = [1,2,3]
  if (direction === "right") {
    let pop = numbers.pop(); // 3
    numbers.unshift(pop); // [3, 1, 2]
    answer = nunbers;
    // answer = numbers.unshift(numbers.pop())
  } else {
    let shift = numbers.shift(); // 1
    numbers.push(shift);
    answer = numbers;
  }
  return answer;
}
// 1번문제 구조분해 할당
function solution(numbers, direction) {
  var answer = [];
  if (direction === "right") {
    // answer = [numbers.pop(), ...numbers];
    answer = [
      numbers[numbers.length - 1],
      ...numbers.slice(0, numbers.length - 1),
    ];
  } else {
    slice ->
    answer = [...numbers.slice(1, numbers.length), numbers[0]];
  }
  return answer;
}

//2
function solution(num, k) {
  var answer = 0;
  // num은 정수 string이나 array로 변환이 필요하다.
  let a = num.toString(); // 정수 -> 문자열
  let b = a.indexOf(k); // k의 index를 찾음
  // 없으면 -1, 있으면 0부터 시작하는 index를 반환
  if (b !== -1) {
    answer = b + 1;
  } else {
    answer = -1;
  }
  return answer;
}

function solution(num, k) {
  return (" " + num).indexOf(k);
}

function solution(num, k) {
  let answer = 0;
  let arrayNum = num.toString().split("");
  let addArrayNum = [" ", ...arrayNum];
  answer = addArrayNum.indexOf(k);
  // index가 0부터 시작합니다.
  return answer;
}
//////////////////////////////////////////12월 15일//////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

//1-1
function solution(box, n) {
  return parseInt((box[0] / n)) * parseInt((box[1] / n)) * parseInt((box[2] / n));
}

console.log(solution([10, 8, 6], 3));

//1-2
function solution(box, n) {
  // box = [10, 8, 6]
  var answer = 0;
  var x = Math.floor(box[0] / n);
  var y = Math.floor(box[1] / n);
  var z = Math.floor(box[2] / n);
  answer = x * y * z;
  return answer;
}
//1-3
function solution(box, n) {
  // box = [10, 8, 6]
  var answer = 0;
  var x = Math.floor(box[0] / n);
  var y = Math.floor(box[1] / n);
  var z = Math.floor(box[2] / n);
  answer = x * y * z;

  var answer = 1;
  for (let i = 0; i < box.length; i++) {
    anwser *= Math.floor(box[i] / n);
  }
//////////////////////////////////////////12월 16일//////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//1
    function solution(sides) {
    sides.sort(function(a, b)  {
    return a - b;
    });
    if (sides[2] < sides[0] + sides[1]) {
      return 1;
    } else {
      return 2;
    }
}

  
//1-2
  function solution(sides) { 
    return sides.sort((a, b) => a - b) && sides[2] < sides[0] + sides[1] ? 1 : 2
}
  console.log(solution([3, 6, 2]));

  //answer
  function solution(sides) {
  sides.sort((a, b) => b - a);
  return sides[0] < sides[1] + sides[2] ? 1 : 2;
}

function solution(sides) {
  return sides.sort((a, b) => b - a) [] && sides[0] < sides[1] + sides[2] ? 1 : 2;
}

//////////////////////////////////////////12월 19일//////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
  
  function solution(age) {
    var answer = '';
    result = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    age=age.toString();
    for (i = 0; i < age.length; i++){
      answer += result[age[i]]; 
    }
    return answer;
  }
  
  console.log(solution(23));

  
//////////////////////////////////////////12월 21일//////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
  function solution(emergency) {
    var answer = [];
    sides.sort(function (a, b) {
      return a - b;
      
    return answer;
    }

      //////////////////////////////////////////12월 22일//////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
function solution(array) {
  const str = array.toString();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === '7') {
      count+=1;
    }
  }
  return count;
}
console.log(solution([7, 77, 17]));
    
//1-2
      function solution(array) {
        return array.join('').split('7').length - 1;
      }

    console.log(solution([7, 77, 17]));
      //////////////////////////////////////////12월 22일//////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
    function solution(my_str, n) {
      const str = my_str.split();
      return str;
    }
    console.log(solution("abc1Addfggg4556b", 6));

    //1-2
      function solution(my_str, n) {
        for (let i = 0; i < my_str.length; i + n){
          my_str += ",";
        }
        const str = my_str.split();
        return str;
    }
console.log(solution("abc1Addfggg4556b", 6));