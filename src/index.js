import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ThemeProvider } from "./contexts/Theme-context";
import { LoginProvider } from './contexts/login-context';
import { PostProvider } from "./contexts/post-context";
import { BookMarkProvider } from "./contexts/bookMark-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LoginProvider>
        <PostProvider>
          <BookMarkProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </BookMarkProvider>
        </PostProvider>
      </LoginProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
