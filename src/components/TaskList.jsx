import { FaTrash } from 'react-icons/fa'

export default function TaskList({
  tarefas,
  removerTarefa,
  concluirTarefa
}) {

  return (
    <div className="card">

      <h2>Minhas Tarefas</h2>

      {tarefas.map(tarefa => (

        <div className="task" key={tarefa.id}>

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

            <p>{tarefa.prioridade}</p>

          </div>

          <div className="task-buttons">

            <button
              onClick={() => concluirTarefa(tarefa.id)}
            >
              ✓
            </button>

            <button
              onClick={() => removerTarefa(tarefa.id)}
            >
              <FaTrash />
            </button>

          </div>

        </div>

      ))}

    </div>
  )
}