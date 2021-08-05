const todoReducer = (state = [], action)=>{
    if(action.type==='Add')
    {
        return[ ...state, action.payload];
    }
    else if(action.type === 'Remove')
    {
        return state.filter((item,index) => index!==action.payload) ;
    }
    return state;
}

export default todoReducer;