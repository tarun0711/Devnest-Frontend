const Card = (props) =>
{
    const {title,cal} = props;
    return(
        <div className="card">
                <h1 className="title"> {title  || "Fooditem"} </h1>
                <h2 className="cal"> You have consumed {cal || "Calories"} calories today.</h2>
        </div>
    )
};

export default Card;