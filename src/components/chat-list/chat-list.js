import { Link, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { useState } from "react";
import { Chat } from "./chat";

export const ChatList = () => {
  const [chats] = useState(["room1", "room2", "room3"]);
  const params = useParams();

  return (
    <List component="nav">
      {chats.map((chat, index) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat title={chat} selected={params.roomId === chat} />
        </Link>
      ))}
    </List>
  );
};
