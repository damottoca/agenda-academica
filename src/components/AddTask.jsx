export default function AddTask() {
  return (
    <div className="card">

      <h2>Adicionar Nova Tarefa</h2>

      <div className="form">

        <input
          type="text"
          placeholder="Digite a atividade..."
        />

        <select>
          <option>Prioridade</option>
          <option>Alta</option>
          <option>Média</option>
          <option>Baixa</option>
        </select>

        <button>Adicionar</button>

      </div>

    </div>
  )
}