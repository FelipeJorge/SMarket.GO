import './App.css';
import {useState, useEffect} from 'react'
import {Bstrash, BsbookmarkCheck, BsbookmarkCheckFill} from 'react-icons/bs'


const API = "http://localhost:5000"


function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [tobuy, setTobuy] = useState([]);
  const [loading, setLoading] = useState (false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    console.log("enviou");
    console.log(title)
  }

  return (
    <div className="App">
      <div className='tobuy-header'>
        <h1>List to buy</h1>
      </div>
      <div className='form-tobuy'>
        <h2>Adicione um item a Lista</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='title'>Produto</label>
            <input 
            type="text" 
            name='title'
            placeholder='Ex:Arroz' 
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
            required
            />
             
          </div>
          <input type="submit" value="adicionar"/>
        </form>
      </div>
      <div className='list-tobuy'>
        <h2>Lista de Compras:</h2>
        {tobuy.length === 0 && <p>Lista vazia</p>}
      </div>
      
    </div>
    
  );
}

export default App;
