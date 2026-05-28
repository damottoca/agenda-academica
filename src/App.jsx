import Sidebar from './components/Sidebar'
import Header from './components/Header'
import TaskList from './components/TaskList'
import CalendarBox from './components/CalendarBox'
import StatsCards from './components/StatsCards'
import AddTask from './components/AddTask'

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <TaskList />
      <CalendarBox />
      <AddTask />
      <StatsCards />
    </div>
  )
}

export default App