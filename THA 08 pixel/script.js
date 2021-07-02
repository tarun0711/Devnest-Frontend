const divs = document.querySelectorAll(".pixel");
console.log(divs);

const shaped =[ 69,72,90,91,108,109,110,111,112,113,127,
                129,132,134,149,150,151,152,170,171,189,188,
                190,191,192,193,
                207,209,210,211,212,214,
                227,247,267,234,254,274,229,
                230,231,232,249,250,251,252,269,270,271,272,
                289,290,291,292,309,312,329,332,349,352,369,
                368,372,373,49,52];

Array.from(divs).forEach((div,i) =>{
    if(shaped.includes(i+1)) div.style.background ="white"
    })

Array.from(divs).forEach((div,i) =>{
    div.addEventListener('click',() =>{ 
        div.style.background=(div.style.background == "white"?"aqua":"white")
    }
    )
})