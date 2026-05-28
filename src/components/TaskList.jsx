export default function TaskList() {

  const tarefas = [
    {
      titulo: 'Estudar JavaScript',
      descricao: 'Manipulação do DOM',
      prioridade: 'Alta',
      data: '20/05/2026'
    },

    {
      titulo: 'Trabalho DevOps',
      descricao: 'Apresentação do projeto',
      prioridade: 'Média',
      data: '28/05/2026'
    }
  ]

  return (
    <div className="card">

      <h2>Minhas Tarefas</h2>

      {tarefas.map((tarefa, index) => (

        <div className="task" key={index}>

          <div>
            <h3>{tarefa.titulo}</h3>
            <p>{tarefa.descricao}</p>
          </div>

          <div>
            <span>{tarefa.prioridade}</span>
            <p>{tarefa.data}</p>
          </div>

        </div>

      ))}

    </div>
  )
}