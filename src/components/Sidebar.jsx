import {
  FaClipboardList,
  FaBook,
  FaCalendar,
  FaChartBar,
  FaCog
} from 'react-icons/fa'

import {
  Link
} from 'react-router-dom'

import logo from '../assets/logo.webp'

export default function Sidebar() {

  return (

    <aside className="sidebar">

      <div className="logo-area">
        <img
          src={logo}
          alt="UNIPAR"
        />
      </div>

      <ul>

        <li>
          <Link to="/">
            <FaClipboardList />
            Tarefas
          </Link>
        </li>

        <li>
          <Link to="/materias">
            <FaBook />
            Matérias
          </Link>
        </li>

        <li>
          <Link to="/calendario">
            <FaCalendar />
            Calendário
          </Link>
        </li>

        <li>
          <Link to="/resumo">
            <FaChartBar />
            Resumo
          </Link>
        </li>

        <li>
          <Link to="/configuracoes">
            <FaCog />
            Configurações
          </Link>
        </li>

      </ul>

    </aside>
  )
}