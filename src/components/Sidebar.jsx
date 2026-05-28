import {
  FaClipboardList,
  FaBook,
  FaCalendar,
  FaChartBar,
  FaCog
} from 'react-icons/fa'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>UNIPAR</h2>

      <ul>
        <li><FaClipboardList /> Tarefas</li>
        <li><FaBook /> Matérias</li>
        <li><FaCalendar /> Calendário</li>
        <li><FaChartBar /> Resumo</li>
        <li><FaCog /> Configurações</li>
      </ul>
    </aside>
  )
}