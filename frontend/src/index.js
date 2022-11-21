import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './app';
import Home from './pages/Home';
import CreateAccountForm from './pages/CreateAccountForm';
import ForgotPasswordForm from './pages/ForgotPasswordForm';
import ResetPasswordForm from './pages/ResetPasswordForm';
import LandingPage from './pages/LandingPage';
import LoginForm from './pages/LoginForm';
import SearchPage from './pages/SearchPage';
import Bookshelves from './pages/Bookshelves.js';
import Profile from './pages/Profile';
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
        <Route path="/Search" element={<SearchPage/>} />
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
