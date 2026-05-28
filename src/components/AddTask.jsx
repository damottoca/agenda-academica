import { useState } from 'react'

export default function AddTask({
  adicionarTarefa
}) {

  const [titulo, setTitulo] = useState('')
  const [prioridade, setPrioridade] = useState('Alta')

  function enviar() {

    if (!titulo) return

    adicionarTarefa(titulo, prioridade)

    setTitulo('')
  }

  return (
    <div className="card">

      <h2>Adicionar Nova Tarefa</h2>

      <div className="form">

        <input
          type="text"
          placeholder="Digite a atividade..."
          value={titulo}
          onChange={(e) =>
            setTitulo(e.target.value)
          }
        />

        <select
          value={prioridade}
          onChange={(e) =>
            setPrioridade(e.target.value)
          }
        >
          <option>Alta</option>
          <option>Média</option>
          <option>Baixa</option>
        </select>

        <button onClick={enviar}>
          Adicionar
        </button>

      </div>

    </div>
  )
}