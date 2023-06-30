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
import { UserProvider } from "./contexts/user-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LoginProvider>
          <PostProvider>
            <UserProvider>
              <BookMarkProvider>
                <LikeProvider>
                  <App />
                </LikeProvider>
              </BookMarkProvider>
            </UserProvider>
          </PostProvider>
        </LoginProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
