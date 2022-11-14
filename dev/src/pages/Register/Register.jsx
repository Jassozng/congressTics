import user1 from '../../assets/svg/user-1.svg'
import user2 from '../../assets/svg/user-2.svg'
import user3 from '../../assets/svg/user-3.svg'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import handleSubmit from './hooks/eventHandlers'
import { useNavigate } from 'react-router-dom'
import './Register.css'

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar/>
      <h1>Registro</h1>
      <section className="main-centered">
        <form onSubmit={ (event) => { handleSubmit(event); navigate("/users") } } >
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" placeholder="Ingrese su nombre" required />
          <label htmlFor="name">Apellidos</label>
          <input type="text" name="surname" id="surname" placeholder="Ingrese su(s) apellidos" required />
          <label htmlFor="name">Email</label>
          <input type="email" name="email" id="email" placeholder="Ingrese su email" required />
          <label htmlFor="name">Twitter</label>
          <input type="text" name="twitter" id="twitter" placeholder="Ingrese su usuario de twitter" required />
          <div>
            <label htmlFor="name">Avatar</label>
            <input type="radio" value="user-1" name="userAvatar" id="userAvatar" /><img className="user-icon" src={ user1 } alt="User 1 Image" />
            <input type="radio" value="user-2" name="userAvatar" id="userAvatar" /><img className="user-icon" src={ user2 } alt="User 2 Image" />
            <input type="radio" value="user-3" name="userAvatar" id="userAvatar" /><img className="user-icon" src={ user3 } alt="User 3 Image" />
          </div>
          <label htmlFor="name">Leí todos los términos y condiciones</label>
          <input type="checkbox" name="termsConditions" id="termsConditions" required />

          <input type="submit" value="Registar" />
          <input type="submit" value="Cancelar" onClick={ () => navigate("/users") } />
        </form>
      </section>
    </>
  )
}

export default Register