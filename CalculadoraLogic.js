
function calculadoraInteresSimple(ci,ti,pi){
   let interest = (ci / 100) * ti * pi

   let capitalFinalSimple = ci + interest;
   console.log(capitalFinalSimple)
}

function calculadoraInteresCompuesto(){

const ci = document.getElementById("CI").value
const ti = document.getElementById("TI").value
const pi = document.getElementById("PI").value
const c  = document.getElementById("C").value


    let i = (ti /100);
    let p = Math.pow(1 + i/c, c*pi );
    let capitalfinalCompuesto = (ci * p);

    document.getElementById("resultado").innerHTML = "Al terminar tu periodo de inversión tendras $"+capitalfinalCompuesto.toFixed(1);
    console.log(capitalfinalCompuesto)
}
