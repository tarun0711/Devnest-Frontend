import { useState } from "react";
import {useDispatch} from "react-redux"
import { addItem } from "../Actions"
const AddTodo =()=>
{
    const dispatch = useDispatch();
    const [item, setItem] = useState("");
    return(
        <div className="AddTodo">
            <input type="text" placeholder="Add Something" value={item} onChange={ (e) => {setItem(e.target.value)}}/>
            <button onClick={ () => {
                dispatch(addItem({
                    title:item,
                    done:false,
                }));
                setItem("");
            }}> Add</button>
        </div>
    )
}
export default AddTodo;