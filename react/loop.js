// for문 vs forEach문 vs map

const array = [1, 2, 3, 4, 5];

// for문은 순차적으로 실행할 때 주로 사용이 됩니다.
// break; 를 사용 할 수 있습니다.
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// forEach문은 배열안에 요소를 하나씩 꺼내와서 사용할 때 사용이 됩니다.
// break; 를 사용 할 수 없습니다.
// array.forEach((value, index, array) => {
//   console.log(value, index, array);
// });

let answer = 0;
array.forEach((value, index) => {
  value = value * 2;
  // console.log(`${index}번째에 있는 값은 ${value}입니다.`);
});
// console.log(array);

// map은 return을 해 줍니다.
// 기존 배열과 다른 새로운 배열을 return
// 기존 배열에서 값을 추가하거나 아니면 변형 할 때 사용이 됩니다.
// map은 기존 배열을 복사해서 사용하기 때문에 기존 배열에 뭔가 변경점이 생기지 않아요.
let array2 = array.map((value) => {
  console.log(value);
  return value + 1;
});
console.log(array2);

const number = [1, 2, 3, 4, 5];
const listItem = number.map((number) => {
  return <li>{number}</li>;
});
<ul>listItem</ul>;

const todo = ["점심먹기", "저녁먹기", "간식먹기", "야식먹기"];
const todoItem = todo.map((element) => {
  return <li>{element}</li>;
});
// let todoItem = []
// todo.forEach((element) => {
//   todoItem.push(<li>{element}</li>)
// })
<ul>listItem</ul>;
