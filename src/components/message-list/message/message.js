import classNames from "classnames";
import styles from "./message.module.css";

export const Message = ({ message }) => {
  const isBotMessage = message.author === "Bot";

  return (
    <div
      className={classNames(styles.message, {
        [styles.userMessage]: !isBotMessage,
        [styles.botMessage]: isBotMessage,
      })}
    >
      <h3>{message.author}</h3>
      <p>{message.message}</p>
      <p>12:03</p>
    </div>
  );
};
