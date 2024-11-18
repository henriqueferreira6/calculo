import { useState } from "react";
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcular = (operacao) => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    let resultado;

    switch (operacao) {
      case 'soma':
        resultado = n1 + n2;
        break;
      case 'subtracao':
        resultado = n1 - n2;
        break;
      case 'divisao':
        resultado = n2 !== 0 ? n1 / n2 : 'Erro: Divisão por zero';
        break;
      case 'multiplicacao':
        resultado = n1 * n2;
        break;
      default:
        resultado = 0;
    }

    setResultado(resultado);
  }

  return (
    <>
      <h1>Calculadora Rick</h1>
      <div className="card">
        <input 
          type="number" 
          name='num1' 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)} 
        /> <br /><br />
        <input 
          type="number" 
          name='num2' 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)} 
        /> <br /><br />
        <button onClick={() => calcular('soma')}>
          Soma
        </button> &nbsp;
        <button onClick={() => calcular('subtracao')}>
          Subtração
        </button> <br /> <br />
        <button onClick={() => calcular('divisao')}>
          Divisão  
        </button> &nbsp;
        <button onClick={() => calcular('multiplicacao')}>
          Multiplicação
        </button>
        <p>{resultado}</p>
        <p>Resultado</p>
      </div>
    </>
  );
}

export default App;