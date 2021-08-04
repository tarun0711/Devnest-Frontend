const counterReducer = (state=0, action) =>
{
    if(action.type === 'INCREASE')
    {
        state=state+1;
    }
    else if(action.type === 'DECREASE')
    {
        state=state-1;
    }
    else if(action.type === 'RESET')
    {
        state=0;
    }
    return state;
}

export default counterReducer; 