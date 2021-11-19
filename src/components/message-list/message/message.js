import classNames from "classnames";
import { withCounter } from "../../../hocs/with-counter";
import styles from "./message.module.css";

/* @TODO удалить */
export const Message = withCounter(
  ({ message, count, decrement, increment }) => {
    return (
      <div
        className={classNames(styles.message, {
          [styles.currentMessage]: message.author === "User",
        })}
      >
        <h3>{message.message}</h3>
        <p>{message.author}</p>
        <p>12.03</p>
        <hr />
        {/* @TODO удалить
        <p>{count}</p>
        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button> */}
      </div>
    );
  }
);
