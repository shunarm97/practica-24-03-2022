import logo from './logo.svg';
import './App.css';
import Card from "./Componentes/Card";
function App() {

  let n = 8 
  let re = n*2
  return (
    <div className='App'>
      <header className='App-header'>
      {re}
      <Card prot='como anda mi genteeeee en azul' col='green'/>
      <Card prot='como anda mi genteeeee pero en verde' col='blue'/>

      </header>
    </div>
  );
}

export default App;
