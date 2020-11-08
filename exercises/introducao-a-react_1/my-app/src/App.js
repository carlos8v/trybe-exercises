import './App.css'

const tasks = [
  'Estudar react',
  'Trocar classes por funções',
  'Checar o tamanho do node_modules/',
  'Nunca commitar na main'
]

const task = (value) => {
  return(
  <li>{value}</li>
  )
};

function App() {
  return (
    <div className="App">
      {tasks.map(taskItem => task(taskItem))}
    </div>
  );
}

export default App;
