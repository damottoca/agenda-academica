export default function Subjects() {

  const materias = [
    'Banco de Dados',
    'DevOps',
    'JavaScript',
    'Engenharia de Software'
  ]

  return (

    <div className="card">

      <h2>Matérias</h2>

      <ul className="subjects-list">

        {materias.map((m, index) => (

          <li key={index}>
            {m}
          </li>

        ))}

      </ul>

    </div>
  )
}