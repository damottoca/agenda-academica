import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import TaskList from './components/TaskList'
import CalendarBox from './components/CalendarBox'
import StatsCards from './components/StatsCards'
import AddTask from './components/AddTask'

function App() {

  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      prioridade: 'Alta',
      concluida: false
    }
  ])

  function adicionarTarefa(titulo, prioridade) {

    const nova = {
      id: Date.now(),
      titulo,
      prioridade,
      concluida: false
    }

    setTarefas([...tarefas, nova])
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter(t => t.id !== id))
  }

  function concluirTarefa(id) {

    setTarefas(
      tarefas.map(t =>
        t.id === id
          ? { ...t, concluida: !t.concluida }
          : t
      )
    )
  }

  return (
    <div className="container">

      <Sidebar />

      <main className="content">

        <Header />

        <div className="dashboard">

          <div className="left">

            <TaskList
              tarefas={tarefas}
              removerTarefa={removerTarefa}
              concluirTarefa={concluirTarefa}
            />

            <AddTask adicionarTarefa={adicionarTarefa} />

            <StatsCards tarefas={tarefas} />

          </div>

          <div className="right">
            <CalendarBox />
          </div>

        </div>

      </main>

    </div>
  )
}

export default App