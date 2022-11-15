import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Home from './Home';
import CreateAccountForm from './CreateAccountForm';
import LandingPage from './LandingPage';
import LoginForm from './LoginForm';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/LandingPage" element={<LandingPage/>} />
        <Route path="/LoginForm" element={<LoginForm/>} />
        <Route path="/CreateAccountForm" element={<CreateAccountForm/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
