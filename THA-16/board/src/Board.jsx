const box = () =>
{
    return(
        <div className="box">

        </div>
    )
}

const row = () =>
{
    return(
        <div className="row">
        <box/>
        <box/>
        <box/>
        <box/>
        <box/>
        <box/>
        <box/>
        <box/>
        </div>
    )
}

const grid = () => {
    return(
        <div className="grid">
            <row/>
            <row/>
            <row/>
            <row/>
            <row/>
            <row/>
            <row/>
            <row/>
        </div>
    )
}

export default grid;