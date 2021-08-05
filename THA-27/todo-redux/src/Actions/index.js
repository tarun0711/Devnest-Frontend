const addItem = (item) => {
    return{
        type:"Add",
        payload: item,
    };
};

const removeItem = (id) => {
    return{
        type:"Remove",
        payload: id,
    };
};

export { addItem, removeItem };