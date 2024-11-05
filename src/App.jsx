import './App.css'
import Card from './Component/Card'
import Form from './Component/Form';

function App() {
  const card ="tarjeta3";
  return (
    <>
    <h1>Carga de Estudiantes</h1>
      <Form/>
      <Card card={card}/>
    </>
  )
}

export default App
