import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import CreateAccountForm from './pages/CreateAccountForm';
import LandingPage from './pages/LandingPage';
import LoginForm from './pages/LoginForm';
import SearchPage from './pages/SearchPage';
import Bookshelves from './pages/Bookshelves';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Moderation from './pages/Moderation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/LandingPage" element={<LandingPage/>} />
        <Route path="/LoginForm" element={<LoginForm/>} />
        <Route path="/CreateAccountForm" element={<CreateAccountForm/>} />
        <Route path="/Search" element={<SearchPage/>} />
        <Route path="/Bookshelves" element={<Bookshelves/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/EditProfile" element={<EditProfile/>} />
        <Route path="/Moderation" element={<Moderation/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
