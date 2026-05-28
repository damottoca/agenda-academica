export default function Summary({
  tarefas
}) {

  const concluidas =
    tarefas.filter(
      t => t.concluida
    ).length

  const pendentes =
    tarefas.filter(
      t => !t.concluida
    ).length

  return (

    <div className="summary-grid">

      <div className="stat-card">
        <h2>Total</h2>
        <p>{tarefas.length}</p>
      </div>

      <div className="stat-card">
        <h2>Pendentes</h2>
        <p>{pendentes}</p>
      </div>

      <div className="stat-card">
        <h2>Concluídas</h2>
        <p>{concluidas}</p>
      </div>

    </div>
  )
}