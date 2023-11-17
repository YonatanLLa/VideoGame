import React from 'react'
import { Link } from 'react-router-dom'
// import { SearchBar } from './SearchBar'

export const LeftNavBar = () => {
  return (
    <nav>
        <ul>
            {/* <SearchBar/> */}
            <li className='font-bold  font-kanit text-2xl leading-7 '><Link to="/">Inicio</Link></li>
            {/* <li><Link to="/form">Formulario</Link></li> */}
            {/* <li><Link to="/favorite">Favorito</Link></li> */}

        </ul>

    </nav>
  )
}
