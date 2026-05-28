import {
  FaClipboardList,
  FaBook,
  FaCalendar,
  FaChartBar,
  FaCog
} from 'react-icons/fa'

import logo from '../assets/logo.webp'

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo-area">
        <img src={logo} alt="UNIPAR" />
      </div>

      <ul>
        <li className="active">
          <FaClipboardList />
          Tarefas
        </li>

        <li>
          <FaBook />
          Matérias
        </li>

        <li>
          <FaCalendar />
          Calendário
        </li>

        <li>
          <FaChartBar />
          Resumo
        </li>

        <li>
          <FaCog />
          Configurações
        </li>
      </ul>

    </aside>
  )
}
