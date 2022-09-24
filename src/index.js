import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXzvtenVGUTqi53PQlkllGtqFnw-9viHQ",
  authDomain: "coderhouse-ecommerce-9c3f1.firebaseapp.com",
  projectId: "coderhouse-ecommerce-9c3f1",
  storageBucket: "coderhouse-ecommerce-9c3f1.appspot.com",
  messagingSenderId: "604151841496",
  appId: "1:604151841496:web:02af10481100516f870dad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
