import './App.css';
import logo from './images/Logo_planifica_u.png'
import logosa from './images/logo-ucr-sede-atlantico.png'

function App() {
  return (
    <div className='body'>
      <header className='App-header'>
        <img className="logop" src={logo} alt="Logo Planifica U" />
      </header>

      <div className='main-container'>
        <div class="div-izquierdo">
          <h1>PLANIFICA U</h1>
          <h2>Sistemas de Planificación de Horarios para la Sede del Atlántico</h2>
        </div>
        <div class="div-derecho">
          <h1>INICIAR SESIÓN</h1>
          <div className='cuadro-usuario'>
            <label>Usuario Institucional</label>
            <input type='text'></input>
          </div>
          <div className='cuadro-contraseña'>
            <label>Contraseña</label>
            <input type='password'></input>
          </div>
          <div className='check'>
            <input type='checkbox'></input>
            <label>Recordar Usuario</label>
          </div>
          <div>
            <button className='button'>Ingresar</button>
          </div>
        </div>
      </div>

      <footer className='App-footer'>
        <img className='logosa' src={logosa} alt='Logo Sede Atlántico'/>
      </footer>
    </div>
    
  );
}

export default App;
