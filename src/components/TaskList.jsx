import { useState } from 'react'

import { FaTrash } from 'react-icons/fa'

import { motion } from 'framer-motion'

export default function TaskList({
  tarefas,
  removerTarefa,
  concluirTarefa
}) {

  const [filtro, setFiltro] =
    useState('todas')

  const [busca, setBusca] =
    useState('')

  const tarefasFiltradas =
    tarefas.filter(t => {

      if (
        filtro === 'pendentes'
        && t.concluida
      ) return false

      if (
        filtro === 'concluidas'
        && !t.concluida
      ) return false

      return t.titulo
        .toLowerCase()
        .includes(
          busca.toLowerCase()
        )
    })

  return (

    <div className="card">

      <h2>Minhas Tarefas</h2>

      <input
        type="text"
        placeholder="Pesquisar tarefa..."
        value={busca}
        onChange={(e) =>
          setBusca(e.target.value)
        }
      />

      <div className="filters">

        <button
          onClick={() =>
            setFiltro('todas')
          }
        >
          Todas
        </button>

        <button
          onClick={() =>
            setFiltro('pendentes')
          }
        >
          Pendentes
        </button>

        <button
          onClick={() =>
            setFiltro('concluidas')
          }
        >
          Concluídas
        </button>

      </div>

      {tarefasFiltradas.map(tarefa => (

        <motion.div
          className="task"
          key={tarefa.id}

          initial={{
            opacity: 0,
            y: 20
          }}

          animate={{
            opacity: 1,
            y: 0
          }}
        >

          <div>

            <h3
              style={{
                textDecoration:
                  tarefa.concluida
                    ? 'line-through'
                    : 'none'
              }}
            >
              {tarefa.titulo}
            </h3>

            <p>
              {tarefa.prioridade}
            </p>

            <p>
              {tarefa.data}
            </p>

          </div>

          <div className="task-buttons">

            <button
              onClick={() =>
                concluirTarefa(tarefa.id)
              }
            >
              ✓
            </button>

            <button
              onClick={() =>
                removerTarefa(tarefa.id)
              }
            >
              <FaTrash />
            </button>

          </div>

        </motion.div>

      ))}

    </div>
  )
}
