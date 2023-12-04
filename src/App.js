import {Users} from './user';
import { Planets } from './planets';
import './App.css';

function App() {

const users =[
  {name:"pedro", age:23},
  {name:"pazzo", age:23},
  {name:"pacci", age:23}, 
  {name:"papa", age:23}
  
];
const planets = [
  {name:"mars", isGasPlanet: false},
  {name:"Earth", isGasPlanet: false},
  {name: "Jupiter", isGasPlanet:true},
  {name:"Venust", isGasPlanet:false},
  {name:"Neptune", isGasPlanet:true},
  {name:"Urnas", isGasPlanet:true}
];
  return (
    <div className="App">
     {users.map( (user, key) =>{
          return <Users name={user.name} age={user.age}/>
     })}
     {planets.map((planet,key) => 
      planet.isGasPlanet &&
      <h1><Planets name={planet.name}/></h1>
     )}
      </div>
      );
    }




export default App;
