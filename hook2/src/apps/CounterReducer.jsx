import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/counterSlice";
import { useState } from "react";

const CounterReducer = () => {
  const count = useSelector((state) => state.counter.count);
  const [inputValue, setInputValue] = useState(0);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    // 숫자형으로 변환
    setInputValue(Number(e.target.value));
  }

  return (
    <div>
      <h2>Counter</h2>
      <h3>현재 숫자 : {count} </h3>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>

      <div>
        {/* 입력값 만큼 증가 */}
        <input 
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        />
        <button onClick={() =>{
            dispatch(incrementByAmount(inputValue))
        }}>입력값만큼 증가</button>
      </div>
    </div>
  );
};

export default CounterReducer;