import React, { useState, useEffect } from "react";
import { Input, Button, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
// import PropTypes from "prop-types";
import { Message } from "./message";
import styles from "./message-list.module.css";

// jss
export const useStyles = makeStyles((ctx) => {
  return {
    input: {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: "15px",
    },
    icon: {
      color: "#2b5278",
    },
  };
});

export const MessageList = () => {
  const s = useStyles();

  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");

  const sendMessage = () => {
    if (value) {
      setMessageList([...messageList, { author: "User", message: value }]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];

    if (messageList.length && lastMessage.author === "User") {
      setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "Bot", message: "Hello from Bot" },
        ]);
      }, 500);
    }
  }, [messageList]);

  return (
    <div className={styles.wrapper}>
      {messageList.map((message, index) => (
        <Message key={index} message={message} />
      ))}

      <Input
        className={s.input}
        fullWidth
        placeholder="Введите сообщение..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <Send onClick={sendMessage} className={s.icon} />}
          </InputAdornment>
        }
      />
    </div>
  );
};

// MessageList.propTypes = {
//   test1: PropTypes.number.isRequired,
//   test2: PropTypes.array.isRequired,
//   test3: PropTypes.bool.isRequired,
//   test4: PropTypes.shape({
//     id: PropTypes.bool.isRequired,
//   }).isRequired,
//   test5: PropTypes.func.isRequired,
// };
