export const Task = (props)=>{
    return(<div className="task"
            style={{ textDecoration: props.completed ? "line-through": "none",
             backgroundColor: props.important ? "green" : "white"}}>
        <input type="checkbox" onClick={() => props.completeTask(props.id)}/>
        <h1>{props.taskName}{props.id}</h1>
        <button onClick={()=>props.importantTask(props.id)}>important</button>
        <button onClick={()=>props.deleteTask(props.id)}>X</button>
        </div>);
};