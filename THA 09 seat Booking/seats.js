var Hall = document.querySelector('.hall');
var Head = document.querySelector('.head');

window.onload = () =>{
    for(let i = 0 ; i < 5 ; i++)
    {
        var row = document.createElement('div');
        row.className='row';
        Hall.appendChild(row);

        for(let j = 0 ; j < 10 ; j++)
        {
            var cell = document.createElement('div');
            cell.className='cell';
            cell.innerHTML='<i class="far fa-user"></i>';
            row.appendChild(cell);
        }
    }
}
var booked=0;
var remains=50;

function checkBooking(val)
{
    if(val)
    {
        remains--;
        booked++;
    }
    else
    {
        remains++;
        booked--;
    }
}
function displayCinema()
{
    Head.innerHTML = `<div class= "values"> <h2>Booked : ${booked}</h2> <h2>Reamining: ${remains}</h2></div>`;
}

displayCinema()

setTimeout( () => {
    var cells = document.querySelectorAll('.cell');

    cells.forEach(cell=>{
        cell.addEventListener('click', () =>{ 
        if(cell.innerHTML==='<i class="fas fa-user"></i>')
        {
            cell.innerHTML= '<i class="far fa-user"></i>';
            checkBooking(false);
            displayCinema();
        }
        else
        {
            cell.innerHTML= '<i class="fas fa-user"></i>';
            checkBooking(true);
            displayCinema();
        }
    })
    })
},100)