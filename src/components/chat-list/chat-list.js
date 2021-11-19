import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { List } from "@mui/material";
import { conversationsSelector } from "../../store/conversations";
import { Chat } from "./chat";

export const ChatList = () => {
  const params = useParams();
  const conversations = useSelector(conversationsSelector);

  return (
    <List component="nav">
      {conversations.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat title={chat} selected={params.roomId === chat} />
        </Link>
      ))}
    </List>
  );
};
