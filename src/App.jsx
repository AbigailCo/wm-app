
import './App.css'
import * as C from './componentes'


function App() {
  return (
    <div>


      <main className="pt-20">
        <C.Navbar />
        <C.Inicio />
        <C.Tratamientos />
        <C.PreFrecuentes/>
        <C.Nosotros />
        <C.Contacto />
      </main>
    </div>
  )
}


export default App
