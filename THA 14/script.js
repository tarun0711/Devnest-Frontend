let clicky = document.querySelectorAll('.click');
let hvry = document.querySelectorAll('.hvr');

clicky.forEach(  (clk) => clk.addEventListener('click',() => {
    if(clk.innerHTML=="Clicked")
    {
        clk.innerHTML="Click";
    }
    else
    {
        clk.innerHTML="Clicked";
    }
    
}))

hvry.forEach( (hv) => hv.addEventListener('mouseover',()=>{
    hv.innerHTML= "Hey you are on hover section.";
}))

hvry.forEach( (hv) => hv.addEventListener('mouseout',()=>{
    hv.innerHTML= "You left the hover section.";
}))
