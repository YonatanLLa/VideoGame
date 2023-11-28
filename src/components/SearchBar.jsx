import React from 'react'

export const SearchBar = () => {
  return (
    <div>
        <form>
            <input type="text" className='w-full h-11 rounded-3xl bg-800 hover:bg-white text-950 outline-none' placeholder="Busca tu personaje"/>
        </form>
    </div>
  )
}
