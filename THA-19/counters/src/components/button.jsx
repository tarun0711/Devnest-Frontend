import { useState } from "react";

const Button = (props) => {
    const [val,setVal] = useState(0);
    return(
        <button className="btn" onClick={ () => {setVal(val+1)}}>{val}</button>
    )
};

export default Button;