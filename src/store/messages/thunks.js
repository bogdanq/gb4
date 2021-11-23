import { handleChangeMessageValue } from "../conversations";
import { sendMessage } from "./actions";

export const sendMessageWithBot = (message, roomId) => (dispatch, getState) => {
  const cansel = dispatch(sendMessage(message, roomId));
  dispatch(handleChangeMessageValue("", roomId));

  // setTimeout(() => {
  //   cansel();
  // }, 500);

  if (message.author === "User") {
    setTimeout(() => {
      dispatch(
        sendMessage({ author: "Bot", message: "Hello bot from thunk" }, roomId)
      );
    }, 500);
  }
};
