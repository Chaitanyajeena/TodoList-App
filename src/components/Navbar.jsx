import React from 'react'
import { HashLink } from 'react-router-hash-link'

function Navbar(props) {
  return (
    <>
      <nav>
        <h1>--TodoList--</h1>
        <main>
          <HashLink to={'/#home'}>Home</HashLink>
          <HashLink to={'/#about'}>About</HashLink>
          <HashLink to={'/#contact'}>Contact</HashLink>
        </main>
        <div className="homebut">
          <button type="submit" onClick={props.toggle}>Start for free</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
