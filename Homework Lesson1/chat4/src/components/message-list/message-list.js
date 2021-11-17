import React, { useState, useEffect, useLayoutEffect, useCallback, useMemo } from 'react';
import styles from './message-list.module.css';
import { Message } from './message';
import { Input, Button } from '@mui/material';
//import {ThemeProvider, createTheme } from '@mui/material';

export const MessageList = () => {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");
  
    const sendMessage = () => {
      setMessageList([...messageList, {author: "User", message: value}]);
      setValue("");
    }
  
    useEffect(() => {
      const lastMessage = messageList[messageList.length-1];
  
      if(messageList.length && lastMessage.author === "User") {
        setTimeout(() => {
          setMessageList([...messageList, {author: "Bot", message: "Hello from Bot!"}]);
        }, 1500);
      }
    }, [messageList]);
  
  
    return (
      <div className="wrapper">
        {messageList.map((message, index) => (
          <Message key={index} message={message}/>
        ))}
        <Input 
          placeholder="message" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          autoFocus={true}
        />  
        <Button variant="contained" onClick={sendMessage}>send message</Button>
      </div>
    );
  };