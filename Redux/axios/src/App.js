import React from "react";
import { useSelector, useDispatch } from "react-redux";
// export한 action을 import 해 옴
import { increment, decrement } from "./feature/counterSlice";
import "./App.css";

// 본격적으로 컴포넌트 코딩 시작.
// 값 가지고 오는 방법
// dispatch(변경 요청)
function App() {
  // const [counter, chagenCounter] = useState(0)
  // 가지고 오겠다 = select를 하겠다
  const counter = useSelector((state) => {
    // state -> 스토어에 있는 reducer를 가지고 옵니다.
    // counterReducer는 스토에 등록된 state
    // counterReducer의 정보는 /src/featrue/counterSlice를 가지고 옵니다. 그래서 안에 initialState를 가지고 와 집니다.
    // initialState안에 value를 가지고 왔습니다.
    return state.counterReducer.value;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <span>{counter}</span>
      <button
        type="button"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
