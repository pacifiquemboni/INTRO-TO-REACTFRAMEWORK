import  Axios  from 'axios';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';



function App() {
  const [catfact,setCatFact] = useState("");
  const [name, setName] = useState("");
  const [predictAge, setPredictAge] = useState(null);

  const fetchCatFact = (()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact);
    }); 
  });
  const fetchData = (()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setPredictAge(res.data);
    });
  });
  useEffect(()=>{
      fetchCatFact();
  }, []);
 
  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catfact}</p>
      <input placeholder='Ex Paccy' onChange={(event)=>{
        setName(event.target.value);
      }}/>
      <button onClick={fetchData}>predict age: </button>
      <p>name:{predictAge?.name}</p>
      <p>Predicted age:{predictAge?.age}</p>
      <p>count:{predictAge?.count}</p>
      
    </div>
  );
    
}

export default App;
