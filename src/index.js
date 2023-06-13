import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ThemeProvider } from "./contexts/Theme-context";
import { LoginProvider } from './contexts/login-context';
import { PostProvider } from "./contexts/post-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LoginProvider>
        <PostProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PostProvider>
      </LoginProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
