import React from 'react'
import user1 from '../../assets/svg/user-1.svg'
import user2 from '../../assets/svg/user-2.svg'
import user3 from '../../assets/svg/user-3.svg'
import Navbar from '../../components/Navbar/Navbar'
import handleUpdate from './hooks/eventsHandler.js'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import './Update.css'

const Update = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  if(state.auth == null || state.auth == false){
    navigate("/users")
  } 
  const { auth } = state;
  let { user } = useParams();
  const userObj = JSON.parse(user);
  if(auth == null || auth == false){
    navigate("/users")
  } 
  return (
    <>
      <Navbar/>
      <h1>Modificar</h1>
      <section className="main-centered">
        <form onSubmit={ (event) => { handleUpdate(event, userObj.ID); navigate("/users") } } className="updateForm" >
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" placeholder="Ingrese su nombre" defaultValue={ userObj.name } required />
          <label htmlFor="name">Apellidos</label>
          <input type="text" name="surname" id="surname" placeholder="Ingrese su(s) apellidos" defaultValue={ userObj.surname } required />
          <label htmlFor="name">Email</label>
          <input type="email" name="email" id="email" placeholder="Ingrese su email" defaultValue={ userObj.email } required />
          <label htmlFor="name">Twitter</label>
          <input type="text" name="twitter" id="twitter" placeholder="Ingrese su usuario de twitter" defaultValue={ userObj.twitter } required />
          <div>
            <label htmlFor="name">Avatar</label>
            <input type="radio" value="user-1" name="userAvatar" id="userAvatar" defaultChecked={ userObj.avatar == "user-1" } /><img className="user-icon" src={ user1 } alt="User 1 Image" />
            <input type="radio" value="user-2" name="userAvatar" id="userAvatar" defaultChecked={ userObj.avatar == "user-2" } /><img className="user-icon" src={ user2 } alt="User 2 Image" />
            <input type="radio" value="user-3" name="userAvatar" id="userAvatar" defaultChecked={ userObj.avatar == "user-3" } /><img className="user-icon" src={ user3 } alt="User 3 Image" />
          </div>
          <input type="submit" value="Modificar registro" className="modify" />
          <input type="submit" value="Cancelar" onClick={ () => navigate("/users") } />
        </form>
      </section>
    </>
  )
}

export default Update