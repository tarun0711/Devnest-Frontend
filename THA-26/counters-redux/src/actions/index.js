const IncNumber = () => {
    return{
        type:'INCREASE',
    }
}

const DecNumber = () => {
    return{
        type:'DECREASE',
    }
}
const ResetNum = () => {
    return{
        type:'RESET',
    }
}

export { IncNumber, DecNumber, ResetNum};