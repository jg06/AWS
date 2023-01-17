/* eslint-disable no-param-reassign */
// toolkit에서 slice를 생성하는 함수인 createSlice를 import 합니다.
import { createSlice } from "@reduxjs/toolkit";

// 리듀서(함수), 액션을 같이 만들어 줍니다.
export const counterSlice = createSlice({
  name: "counter", // slice의 이름을 설정
  initialState: {
    // 초기 State를 설정 한다.
    value: 0,
  },
  reducers: {
    // 리듀서 기능에 대해서 정의를 합니다.
    // 원래 파라미터로 받은 값을 수정하는것이 옳지 않습니다.
    // 하지만 toolkit에서 파라미터로 받은 값을 변경해도 자동으로 처리를 해 줍니다.
    // 1씩 증가하는 리듀서 기능
    increment: (state) => {
      // state.value = state.value + 1;
      state.value += 1;
    },
    // 1씩 감소하고 리듀서 기능
    decrement: (state) => {
      // state.value = state.value - 1;
      state.value -= 1;
    },
  },
});

// createSlice에서 만든 action을 가지고 옵니다.
export const { increment, decrement } = counterSlice.actions;

// createSlice에서 만든 recuder도 export 합니다.
export default counterSlice.reducer;
