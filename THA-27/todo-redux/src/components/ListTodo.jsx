import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../Actions";
const ListTodo = () =>
{
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo);
    return(
        <div>
            {todos.map((todo,index)=> (
                <div className="List" key={index}>
                    <h3 style={{display:"inline-block"}}>{todo.title}</h3>
                    <button onClick={() => {
                        dispatch(removeItem(index))
                    } }>Delete</button>
                </div>
            ))}
        </div>
    );
};
export default ListTodo;