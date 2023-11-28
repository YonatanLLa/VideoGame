import React from 'react';

export const Profile = () => {
  // Datos del perfil
  const abj = {
    name: "yonatan",
    // lastname: "llanto",
    image: "https://i.ibb.co/z6z6z6z/logo.png"
  }

  return (
    <div className="w-24 flex items-center rounded-md shadow-md">
      <img src={abj.image} alt="Profile" className="w-9 h-9 rounded-full mx-auto " />
      <div className="">
        <h2 className="text-md">{abj.name} {abj.lastname}</h2>
        {/* Puedes agregar más detalles del perfil aquí */}
      </div>
    </div>
  );
};