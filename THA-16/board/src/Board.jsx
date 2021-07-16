const Box = () =>
{
    return(
        <div className ="box">
        </div>
    )
};

const Row = () =>
{
    return(
        <div className ="row">
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        </div>
    )
};

const Grid = () => {
    return(
        <div className ="grid">
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
        </div>
    )
};

export default Grid;