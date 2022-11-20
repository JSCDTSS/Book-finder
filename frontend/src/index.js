import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './app';
import Home from './components/Home';
import CreateAccountForm from './components/CreateAccountForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import ResetPasswordForm from './components/ResetPasswordForm';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import Search from './components/Search';
import Bookshelves from './components/Bookshelves.js';
import Profile from './components/Profile';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* temporarily pointing '/' to landing page */}
        {/* <Route path="/" element={<App/>} /> */}
        <Route path="/" element={<LandingPage/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/LandingPage" element={<LandingPage/>} />
        <Route path="/LoginForm" element={<LoginForm/>} />
        <Route path="/CreateAccountForm" element={<CreateAccountForm/>} />
        <Route path="/ForgotPasswordForm" element={<ForgotPasswordForm/>} />
        <Route path="/ResetPasswordForm" element={<ResetPasswordForm/>} />
        <Route path="/Search" element={<Search/>} />
        <Route path="/Bookshelves" element={<Bookshelves/>} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
