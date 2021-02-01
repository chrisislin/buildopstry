import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({ 
  cache: new InMemoryCache(),
  uri: "https://rxw3dcfwnzfhbbbnt4pxuux26e.appsync-api.us-west-2.amazonaws.com/graphql",
  headers: {
    "x-api-key": "da2-gd43ylencbbfhniqrzpped6hge"
  } 
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
