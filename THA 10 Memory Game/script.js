const cards = document.querySelectorAll('.card');
var scores = document.querySelector('.score board');
const dis = document.querySelector('.display');
const dis1 = document.querySelector('.display1');
var giphy = document.querySelector('.anime');
let hasFlippedCard = false;
let lock =false;
let firstCard,secondCard;
var streakcheck = 0;
var score = 0;
var streak =0;
var move =0;
function flipcard()
{
    if (lock) return;
    if(this=== firstCard) return;
    this.classList.add('flip');
    if(!hasFlippedCard)
    {
        hasFlippedCard=true;
        firstCard=this;
        return;
    }
        secondCard=this;
    check();
}

function check()
{
    gifcheck(streak);
    if(firstCard.dataset.framework === secondCard.dataset.framework)
        {
            streakcheck+=1;

            if(streakcheck >1)
            {
                score = score+11-move;
                streak+=1;
            }
            else
            {
                score += 3-move;
                streak=0;
            }
            disableCards();
        }
    else
        {
            streakcheck=0;
            unflip();
        }
    dis.innerText = score;
    dis1.innerText = streak;
    
}

function disableCards()
{
    firstCard.removeEventListener('click',flipcard);
    secondCard.removeEventListener('click', flipcard);
    reset();
}

function unflip()
{
    lock=true;
    setTimeout( () => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
         reset();
    }, 300);
        lock=false;
}

function reset()
{
    [hasFlippedCard, lock] = [false,false];
    [firstCard,secondCard] = [null,null];
}
    
(function shuffle()
{
    cards.forEach( card => {
        let randomPos = Math.floor(Math.random()*12);
        card.style.order = randomPos;
    })
})();

    function gifcheck(streak)
    {
        if(streak==0)
        {
            giphy.style.background="url(gifs/normal.gif)";
        }
        if(streak==1)
        {
            giphy.style.background="url(gifs/supersaiyyan.gif)";   
        }
        if(streak==2)
        {
            giphy.style.background="url(gifs/ss3.gif)";
        }
        if(streak==3)
        {
            giphy.style.background="url(gifs/ssggod.gif)";
        }
        if(streak==4)
        {
            giphy.style.background="url(gifs/blue.gif)";
        }
        if(streak==5)
        {
            giphy.style.background="url(gifs/ultrainstinct.gif)";
        }
    }
cards.forEach( card => card.addEventListener('click', flipcard)
                        ,move+=1);