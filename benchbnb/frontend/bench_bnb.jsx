import React from "react";
import ReactDOM from "react-dom";
import { Signup, Login, Logout } from './util/session_api_util'; 
import Root from "./components/root"
import configureStore from "./store/store"


document.addEventListener("DOMContentLoaded", () => {
  window.Signup = Signup
  window.Login = Login 
  window.Logout = Logout 
  const root = document.getElementById("root"); 

  // window.getState = store.getState;
  // window.dispatch = store.dispatch; // just for testing!
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store}/>, root); 
});