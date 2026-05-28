export default function StatsCards({
  tarefas
}) {

  const concluidas =
    tarefas.filter(t => t.concluida).length

  const pendentes =
    tarefas.filter(t => !t.concluida).length

  return (
    <div className="stats">

      <div className="stat-card">
        <h3>Total</h3>
        <p>{tarefas.length}</p>
      </div>

      <div className="stat-card">
        <h3>Pendentes</h3>
        <p>{pendentes}</p>
      </div>

      <div className="stat-card">
        <h3>Concluídas</h3>
        <p>{concluidas}</p>
      </div>

    </div>
  )
}