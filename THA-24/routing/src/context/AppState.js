import React from 'react'
import AppContext from './app-context';

const AppState = (props) => {
    
    return (
       
        <AppContext.Provider value={{
           
            message:"This work is done by Tarun Kumar"
        }}>
        {props.children}
        </AppContext.Provider>
    )
}

export default AppState;
