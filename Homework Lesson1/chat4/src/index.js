import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
const [messageList, setMessageList] = useState([]);

  return (
    <div>
      <Messages messageList/>
      <SendMessageForm />
    </div>
  );
};

const Messages = () => {
  return (
    <ul className="message-list">
        {messageList.map((message, index) => {
            return (
              <li className="message">
                <div>{message.text}</div>
                <div>{message.author}</div>
              </li>
            )
        })}
    </ul>
)
};

const SendMessageForm = () => {
  return (
    <form>
      <input value="{message}" type="text" placeholder="Введите сообщение и нажмите Enter" />
      <button onClick={handleClick}>Отправить</button>
    </form>
  )
};
const handleClick = (e) => {
  setMessageList(MessageList.push(e.target.value))
};

ReactDOM.render(<App />,document.getElementById('root'));

