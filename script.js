
function login(){
    const user=document.getElementById("user").value;
    const pass=document.getElementById("pass").value;
    const msg=document.getElementById("login-msg");

    if(user==="diego" && pass==="1234"){
        document.getElementById("login-container").style.display="none";
    }else{
        msg.textContent="Usuario o contraseña incorrectos";
    }
}

/* RELOJ */
function actualizarReloj(){
    document.getElementById("reloj").textContent=
    new Date().toLocaleTimeString();
}
setInterval(actualizarReloj,1000);
actualizarReloj();


let palabra="DESARROLLAR";
let display=Array(palabra.length).fill("_");
let intentos=6;

document.getElementById("display").textContent=display.join(" ");
document.getElementById("intentos").textContent=intentos;

function adivinar(){
    let letra=document.getElementById("letra").value.toUpperCase();
    document.getElementById("letra").value="";
    if(!letra)return;

    if(palabra.includes(letra)){
        for(let i=0;i<palabra.length;i++)
            if(palabra[i]===letra)display[i]=letra;
    }else intentos--;

    document.getElementById("display").textContent=display.join(" ");
    document.getElementById("intentos").textContent=intentos;

    if(!display.includes("_"))alert("Ganaste");
    if(intentos===0)alert("Perdiste. La palabra era: "+palabra);
}
