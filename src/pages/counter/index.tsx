"use no memo";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import { increment, decrement } from "../../lib/store/counter/counterSlice";
import type { RootState } from "../../lib/store/store";
import "./couter.css";
import CurrentTime from "./time";
export default function Counter() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const [obj, setObj] = useState<{ name: string; age: number }>({ name: "John", age: 30 });
  const dispatch = useAppDispatch();
  const currentTime = Date.now();
  return (
    <div className="container">
      <div>{count}</div>
      <div className="btn-container">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment +
        </button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
      </div>
      <div>Time UTC : {new Date(currentTime).toJSON()}</div> 
      <div>
      {  obj &&
        <CurrentTime/>
       } </div>
    </div>
  );
}
