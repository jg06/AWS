import { configureStore } from "@reduxjs/toolkit";
// export default로 counterSlice.reducer의 코드를 import 해 옵니다.
import counterReducer from "../feature/counterSlice";

export default configureStore({
  reducer: { counterReducer },
});
