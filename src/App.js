import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './styles.css'



function App() {
  const [inputFrutas, setInputFrutas] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("");

  //Redux
  const frutas = useSelector((state)=> state.FrutasReducer.frutas)
  const dispatch = useDispatch();
  const stateTitulo = useSelector((state)=> state.tituloReducer.titulo)

  function AlterarTitulo(event) {
      setInputTitulo(event.target.value)
      dispatch({type: "ALTERAR", value: event.target.value})
  }

   function adicionarFrutas(event) {
    event.preventDefault();

    const objFrutas = {
      nome: inputFrutas
    }
    dispatch( {type: "ADICIONAR", value: objFrutas} )
  }

  return (
    <div className="App">
     
      <label>Titulo</label>
      <form>
        <input placeholder="Digite o titulo" value={inputTitulo} onChange={AlterarTitulo}/>
      </form>
       <h1>{stateTitulo}</h1>
      <form onSubmit={adicionarFrutas}>

      <input  
        placeholder="Digite uma fruta..." 
        value={inputFrutas} 
        onChange={(event) => setInputFrutas(event.target.value)}
      />
        <button>
          Enviar
        </button>
      </form>
      <div>{frutas.map((fruta, index)=>{
        return(
          <li key={index}>{fruta.nome}</li>
        )
      })}</div>
      
    </div>
  );
}

export default App;
