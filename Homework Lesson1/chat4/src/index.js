import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme} from "@mui/material";
import { MessageList } from "./components/";
import { BasicList } from './components'; 



ReactDOM.render(
<div>
  <BasicList />
  <MessageList />
</div>,
document.getElementById('root'));

