import Sidebar from './components/Sidebar'
import Header from './components/Header'
import TaskList from './components/TaskList'
import CalendarBox from './components/CalendarBox'
import StatsCards from './components/StatsCards'
import AddTask from './components/AddTask'

function App() {
  return (
    <div className="container">

      <Sidebar />

      <main className="content">

        <Header />

        <div className="dashboard">

          <div className="left">
            <TaskList />
            <AddTask />
            <StatsCards />
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