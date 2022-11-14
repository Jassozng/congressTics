import { useNavigate } from 'react-router-dom'
import user1 from '../../assets/svg/user-1.svg'
import user2 from '../../assets/svg/user-2.svg'
import user3 from '../../assets/svg/user-3.svg'
import twitter from '../../assets/svg/twitter.svg'
import edit from '../../assets/svg/edit.svg'
import React from 'react'
import './Card.css'

const Card = ({user}) => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/update/${JSON.stringify(user)}`, { state: { auth: true } })
  }

  return (
    <div className="card">
      <img className="avatar" src={user.avatar == "user-1" ? user1 : user.avatar == "user-2" ? user2 : user3} alt="Avatar image" />
      <div className="info-container">
        <h1>{ user.name }</h1>
        <h2>{ user.surname }</h2>
        <p>{ user.email }</p>
        <p className="twitter"><img src={ twitter } alt="Twitter icon" className="image-button" />{ `@ ${ user.twitter }` }</p>
        <input type="image" src={edit} alt="Edit" className="image-button" onClick={ () => { handleRedirect(); } } />
      </div>
    </div>
  )
}

export default Card