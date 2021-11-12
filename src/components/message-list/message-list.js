import React, { useState, useEffect, useRef, useCallback } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
// import PropTypes from "prop-types";
import { Message } from "./message";

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

  const ref = useRef(null);

  const sendMessage = () => {
    if (value) {
      setMessageList([
        ...messageList,
        { author: "User", message: value, date: new Date() },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    handleScrollBottom();
  }, [messageList, handleScrollBottom]);

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];

    if (messageList.length && lastMessage.author === "User") {
      setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "Bot", message: "Hello from Bot", date: new Date() },
        ]);
      }, 500);
    }
  }, [messageList]);

  return (
    <>
      <div ref={ref}>
        {messageList.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>

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
    </>
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
