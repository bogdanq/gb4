import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { sendMessage, messageSelector } from "../../store/messages";
import { Message } from "./message";
import { useStyles } from "./use-styles";
import { useBotAnswer } from "./hooks/use-bot-answer";

export const MessageList = () => {
  const s = useStyles();
  const dispatch = useDispatch();
  const { roomId } = useParams();
  const [value, setValue] = useState("");

  const messageSelectorByMemo = useMemo(
    () => messageSelector(roomId),
    [roomId]
  );

  const messages = useSelector(messageSelectorByMemo);

  const ref = useRef(null);

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(sendMessage({ author, message }, roomId));
        setValue("");
      }
    },
    [dispatch, roomId]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
    }
  };

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    handleScrollBottom();
  }, [handleScrollBottom, messages]);

  useBotAnswer(messages, send);

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
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
            {value && <Send onClick={() => send(value)} className={s.icon} />}
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
