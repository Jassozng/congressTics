import React from 'react'
import ticsLogo from '../../assets/image/tics_logo.png'
import utlLogo from '../../assets/image/utl_logo.png'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate();

  const handleAccess = () => {
      navigate("/users");
  };

  return (
    <section className="landing-page">
      <div className="main-centered">
        <div className="main-column">
          <img src={ utlLogo } alt="UTL Logo" className="logo-img" />
          <h1>Congreso de tecnologías de la información</h1>
          <input type="submit" className="access-button" value="Acceder" onClick={ () => { handleAccess(); } } />
        </div>
        <div>
          <img src={ ticsLogo } alt="TIC's Logo" className="logo-img" />
        </div>
      </div>
    </section>
  )
}

export default Home