import TaskList from '../components/TaskList'
import AddTask from '../components/AddTask'
import StatsCards from '../components/StatsCards'
import CalendarBox from '../components/CalendarBox'

export default function Tasks({
  tarefas,
  adicionarTarefa,
  removerTarefa,
  concluirTarefa
}) {

  return (

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
  )
}