import { useState } from 'react'

export default function Settings() {

  const [dark, setDark] =
    useState(false)

  function alternarTema() {

    setDark(!dark)

    document.body.classList.toggle(
      'dark-mode'
    )
  }

  return (

    <div className="card">

      <h2>Configurações</h2>

      <button onClick={alternarTema}>

        {dark
          ? 'Modo Claro'
          : 'Modo Escuro'}

      </button>

    </div>
  )
}