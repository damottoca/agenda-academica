import { useState, useEffect } from 'react'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import TaskList from './components/TaskList'
import CalendarBox from './components/CalendarBox'
import StatsCards from './components/StatsCards'
import AddTask from './components/AddTask'

function App() {

  const [tarefas, setTarefas] = useState(() => {

    const salvas = localStorage.getItem('tarefas')

    return salvas
      ? JSON.parse(salvas)
      : [
          {
            id: 1,
            titulo: 'Estudar JavaScript',
            prioridade: 'Alta',
            concluida: false
          },

          {
            id: 2,
            titulo: 'Trabalho de DevOps',
            prioridade: 'Média',
            concluida: false
          },

          {
            id: 3,
            titulo: 'Prova de Banco de Dados',
            prioridade: 'Alta',
            concluida: true
          }
        ]
  })

  useEffect(() => {

    localStorage.setItem(
      'tarefas',
      JSON.stringify(tarefas)
    )

  }, [tarefas])

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

    setTarefas(
      tarefas.filter(t => t.id !== id)
    )
  }

  function concluirTarefa(id) {

    setTarefas(
      tarefas.map(t =>
        t.id === id
          ? {
              ...t,
              concluida: !t.concluida
            }
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

            <AddTask
              adicionarTarefa={adicionarTarefa}
            />

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