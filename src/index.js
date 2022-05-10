import React from "react";
import ReactDOM from "react-dom";
// import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PostsContextProvider } from "./context/PostsContext";
import reportWebVitals from "./reportWebVitals";

// const container = document.getElementById("root");
// const root = ReactDOMClient.createRoot(container);
ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <PostsContextProvider>
        <App />
      </PostsContextProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
