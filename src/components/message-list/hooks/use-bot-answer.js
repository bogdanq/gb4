import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const useBotAnswer = (messageList, sendMessage) => {
  const { roomId } = useParams();

  useEffect(() => {
    const messages = messageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];

    if (messages.length && lastMessage.author === "User") {
      setTimeout(() => {
        sendMessage("Bot", "Hello from bot");
      }, 500);
    }
  }, [messageList, sendMessage, roomId]);
};
