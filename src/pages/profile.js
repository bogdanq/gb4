import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/count";

export const ProfilePage = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Profile</h1>
      <h1>count: {count}</h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};
