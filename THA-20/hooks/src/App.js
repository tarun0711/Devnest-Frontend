import { useState } from "react";

const Todo = ({todo,todos,index,setTodos}) =>
{
    return(

        <div className="AddingTodo">
            <h2 className="todo">{todo}</h2>
            <button className="del" onClick={ () => {
                const newTodos =  todos.filter((el,i) => i!==index);
                setTodos(newTodos);
            }}
            >Delete</button>
        </div>
        
    );
};

function App (props)
{
    const [value,setValue] = useState("");
    const [todos, setTodos] = useState([
        "Complete THA-19",
        "Complete THA-20",
    ]);


    return(
        <div className = "card">
            <div className="inputText">
                <input type="text"
                        onChange={(e) => {
                            setValue(e.target.value);}
                        }
                        value={value}
                        />
            </div>
            
            <button className="AddBtn" onClick={ () => {
                setTodos([...todos, value]);
                setValue("");
            }}>
            Add</button>
            {  todos.map((todo,index) =>( 
                <Todo key = {index} todo={todo} todos={todos} index={index} setTodos={setTodos}/>
            ))}
        </div>
    );

}

export default App;