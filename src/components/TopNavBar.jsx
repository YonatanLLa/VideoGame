import React from 'react'
import { Link } from 'react-router-dom'
import { SearchBar } from './SearchBar'

export const TopNavBar = () => {
  return (
    <nav>
        <ul>
            <SearchBar/>
            {/* <li><Link to="/">Inicio</Link></li> */}
            <li><Link to="/form">Formulario</Link></li>
            {/* <li><Link to="/favorite">Favorito</Link></li> */}

        </ul>

    </nav>
  )
}
