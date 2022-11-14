import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import getUsersFromLocalStorage from './hooks/users';
import Card from '../../components/Card/Card'
import './Users.css'

const Users = () => {
  const users = getUsersFromLocalStorage();

  return (
    <>
      <Navbar/>
      <section className="cards-container">
        <h1>Participantes</h1>
        { 
          users.map((user) => {
            return <Card key={user.ID} user={user}/>
          })
        }
      </section>
    </>
  )
}

export default Users