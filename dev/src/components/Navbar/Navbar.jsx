import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <NavLink className="nav-link" to="/">Inicio</NavLink>
        <NavLink className="nav-link" to="/users">Participantes</NavLink>
        <NavLink className="nav-link" to="/register">Registro</NavLink>
    </nav>
  )
}

export default Navbar