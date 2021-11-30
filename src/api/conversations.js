import { db } from "./firebase";

export const getConversationsApi = () => db.ref("conversations").get();

export const updateConversationsApi = (value, roomId) =>
  db.ref("conversations").child(roomId).update({ value, title: roomId });
