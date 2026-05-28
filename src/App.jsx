import { useState, useEffect } from 'react'

import {
  Routes,
  Route
} from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Header from './components/Header'

import Tasks from './pages/Tasks'
import Subjects from './pages/Subjects'
import CalendarPage from './pages/CalendarPage'
import Summary from './pages/Summary'
import Settings from './pages/Settings'

function App() {

  const [tarefas, setTarefas] = useState(() => {

    const salvas =
      localStorage.getItem('tarefas')

    return salvas
      ? JSON.parse(salvas)
      : []
  })

  useEffect(() => {

    localStorage.setItem(
      'tarefas',
      JSON.stringify(tarefas)
    )

  }, [tarefas])

  function adicionarTarefa(
    titulo,
    prioridade
  ) {

    const nova = {
      id: Date.now(),
      titulo,
      prioridade,
      concluida: false
    }

    setTarefas([
      ...tarefas,
      nova
    ])
  }

  function removerTarefa(id) {

    setTarefas(
      tarefas.filter(
        t => t.id !== id
      )
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

        <Routes>

          <Route
            path="/"
            element={
              <Tasks
                tarefas={tarefas}
                adicionarTarefa={adicionarTarefa}
                removerTarefa={removerTarefa}
                concluirTarefa={concluirTarefa}
              />
            }
          />

          <Route
            path="/materias"
            element={<Subjects />}
          />

          <Route
            path="/calendario"
            element={<CalendarPage />}
          />

          <Route
            path="/resumo"
            element={
              <Summary tarefas={tarefas} />
            }
          />

          <Route
            path="/configuracoes"
            element={<Settings />}
          />

        </Routes>

      </main>

    </div>
  )
}

export default App