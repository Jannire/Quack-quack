/*Actual Memoria*/

console.log("Inicio!");

alert("Game on!");

let myAudio = document.querySelector('#audio')
myAudio.volume = 0.01;
document.querySelector("#dot").style.fontSize = "40px";
function duck()
{
    console.log("Quack!");
}

let res = document.querySelector("#reset");
let a = document.querySelectorAll(".casilla");
const status = [];
let cont = 0;
let par = [];
/*for (let i = 0; i < Object.values(a).length-1; i++) {
    status.push(0)
}*/
a.forEach((b, i)=>{
    status.push(0);
    //console.log(b);
    //console.log(i);
})

const emojus = ["🥟","👨","👩‍💻","👺","👻","👾","🐢","🐍","🐇","🦔","🦢","🥟","👨","👩‍💻","👺","👻","👾","🐢","🐍","🐇","🦔","🦢", "🤠", "🤠"];

//orden
const orden = [];
let p = 0;
for (let i = 24; i>0; i--) {
    p = Math.floor(Math.random() * 24);
    while(orden.includes(p))
    {
        p = Math.floor(Math.random() * 24);
    }
    orden.push(p)
}



/*
a.forEach((b, i)=>{
    console.log(emojus[orden]);
    console.log(b);
    b.innerHTML = emojus[orden];
})*/


for(let i=0;i<Object.values(a).length;i++)
{
    Object.values(a)[i].addEventListener("click", function (e)
    {
        document.querySelector("#dot").style.fontSize = "40px";
        document.querySelector("#dot").innerHTML = "... ";
        if (cont == 2) 
        {
            if(a[par[0]].innerHTML == a[par[1]].innerHTML)
            {
                console.log("Pair!");
                par = [];
                cont = 0;
            }
            else
            {
                console.log(par);
                status[par[0]] = 0;
                status[par[1]] = 0;
                a[par[0]].style.backgroundColor = "#28d2ec";
                a[par[1]].style.backgroundColor = "#28d2ec";
                a[par[0]].innerHTML = "🦆";
                a[par[1]].innerHTML = "🦆";
                cont = 0;
                par = [];
                console.log("Reset!");
            }
        }
        if(status[i] == 1 )
        {
            console.log("Choose another card!")
            document.querySelector("#dot").style.fontSize = "20px";
            document.querySelector("#dot").innerHTML = "Choose another card!";

        }
        else if(status[i] == 0)
        {
            console.log("White!");
            a[i].style.backgroundColor = "white";
            Object.values(a)[i].innerHTML = emojus[orden[i]];
            status[i] = 1;
            cont++;
            par.push(i)
            if(cont == 2)
            {
                if(a[par[0]].innerHTML == a[par[1]].innerHTML)
                {
                    myAudio.play();
                    console.log("Cuac cuac!");
                    document.querySelector("#dot").style.fontSize = "20px";
                    document.querySelector("#dot").innerHTML = "Cuac cuac!"
                    //cuac cuac
                }
                else
                {
                    document.querySelector("#dot").style.fontSize = "20px";
                    document.querySelector("#dot").innerHTML = "Try again!     ";
                    setTimeout(() => {
                        console.log("pausa.");                

                        console.log(par);
                        status[par[0]] = 0;
                        status[par[1]] = 0;
                        a[par[0]].style.backgroundColor = "#28d2ec";
                        a[par[1]].style.backgroundColor = "#28d2ec";
                        a[par[0]].innerHTML = "🦆";
                        a[par[1]].innerHTML = "🦆";
                        cont = 0;
                        par = [];
                        console.log("Reset!");
                        document.querySelector("#dot").style.fontSize = "40px";
                        document.querySelector("#dot").innerHTML = "... ";
                        }, "1000")
                }
                
            }
        }
        //console.log(status)z
        if(!status.includes(0))
        {
            console.log("Winner!");
            alert("You win");
            document.querySelector("#dot").style.fontSize = "20px";
            document.querySelector("#dot").innerHTML = "You win! Press Reset to play again";
        }
    }
    )
}

res.addEventListener("click", function reset(e)
    {
        for (let i = 0; i < status.length; i++) 
        {
            status[i] = 0;
            a[i].style.backgroundColor = "#28d2ec";
            a[i].innerHTML = "🦆";
            par = [];
            cont = 0;
        };
        document.querySelector("#dot").style.fontSize = "40px";
        document.querySelector("#dot").innerHTML = "... ";
        console.log(par);
        alert("Reset!");
    }
)
//como hacer que el usuario no haga click dps de fallar??
