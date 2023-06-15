import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ThemeProvider } from "./contexts/Theme-context";
import { LoginProvider } from "./contexts/login-context";
import { PostProvider } from "./contexts/post-context";
import { BookMarkProvider } from "./contexts/bookMark-context";
import { LikeProvider } from "./contexts/liked-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LoginProvider>
          <PostProvider>
            <BookMarkProvider>
              <LikeProvider>
                <App />
              </LikeProvider>
            </BookMarkProvider>
          </PostProvider>
        </LoginProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
