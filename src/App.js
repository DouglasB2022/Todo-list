
import { useState } from 'react';
import './App.css';

function App() {
let [lista, setLista] = useState([]);
let [novoItem, setNovoItem] = useState("")

// useEffect(() =>{
//   setLista([""])
// },[])

  return (
    <div className="container">
          <input placeholder="Insira uma Tarefa" value={novoItem} onChange={e => setNovoItem(e.target.value)} type="text" />
          <button onClick={() => adicionarNovoItem()}>Adicionar</button>
      <ul className="todo-list">
            {lista.map((item, index) =>(
            <li className="todo-item" key={index}>
              {item}
          <button onClick={() => deletarItem(index)}>
            Deletar
            </button>  
              </li>))}
      </ul>
    </div>

);
      function adicionarNovoItem(){
        if(novoItem.length <= 0 ){
          alert("Por favor, digite algo no campo tarefa.")
          return;
        }

        let itemIndex = lista.indexOf(novoItem);
        if(itemIndex >= 0){
          alert("Você já adicionou esta tarefa.")
          return;
        }


        setLista([...lista, novoItem]) 
        setNovoItem("");
      }
      function deletarItem(index){
        let tempArray = [...lista];
        tempArray.splice(index,1);
        setLista(tempArray);
      }
}


export default App;
