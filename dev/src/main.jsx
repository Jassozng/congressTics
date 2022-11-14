import React from 'react'
import ReactDOM from 'react-dom/client'
import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'
import Users from './pages/Users/Users'
import Register from './pages/Register/Register'
import Update from './pages/Update/Update'
import ReloadPrompt from './components/ReloadPrompt/ReloadPrompt'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReloadPrompt />
    <BrowserRouter>
      <Routes>
      <Route path="*" element={ <NotFound /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="/users" element={ <Users /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/update/:user" element={ <Update /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
