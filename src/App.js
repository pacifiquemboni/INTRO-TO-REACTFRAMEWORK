
import './App.css';

function App() {
 
  return (
    <div className="App">
     <Job salary={90000} position= "Senior SDE" company="Amazon"/>
     <Job salary={12000} position= "Junior SDE" company="Googlr"/>
     <Job salary={10000} position= "Project Manager" company="Netflix"/>
    </div>
  );
}
const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
     
      <h1>{props.position}</h1>
     
      <h1>{props.company}</h1> <hr></hr>
    </div>
  );
};


export default App;
