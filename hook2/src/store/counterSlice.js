import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  count: 0 // 카운트의 초기값을 0으로 설정
}

const counterSlice = createSlice({
  name: 'counter', // slice의 이름을 지정
  initialState,
  reducers: {
    // 카운트 값을 1 증가시키는 reducer
    increment: (state) => {state.count = state.count + 1 },
    decrement: (state) => {state.count = state.count - 1 },
    incrementByAmount: (state, action) => {
      // state.count = state.count + action.payload
      state.count += action.payload
    }
  }
})

// 액션 생성자와 리듀서 내보내기
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;