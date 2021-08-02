import React,{useContext} from 'react'
import appContext from '../context/app-context'
const HomePage = (props) => {
     const {message} = useContext(appContext)
    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{textAlign:"center", textDecoration:"none", color:"black"}}>Home</h1>
            <h2 style={{textAlign:"center"}}> Kindly Log in</h2>
            { props.isAuth ? <button onClick={() =>{props.setIsAuth(false)}}>Log Out</button>: 
                            <button onClick={() =>{props.setIsAuth(true)}}>Log In</button>}
            <p>{message}</p>
        </div>
    )
}

export default HomePage;