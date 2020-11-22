document.getElementById('player').addEventListener("click",sumarPuntos);

puntos = 0;
tiempo = 30;
necesarios = 30;

alert("Prueba tu destreza y presición en la práctica de tiro \n Instrucciones: \n 1.- Reune los puntos necesarios antes de que se termine el tiempo \n 2.- Haz clic sobre tu objetivo \n Para iniciar la práctica de tiro, presiona 'Aceptar'");

function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*500);
   randNum2 =  Math.round(Math.random()*500);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 30) {
   	alert("Ganaste \n Si quieres iniciar de nuevo, Presiona Aceptar");
        puntos = 0;
        tiempo = 30;
   }

   
}

function restarTiempo() {    
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		alert("Perdiste \n Presiona aceptar para iniciar de nuevo");
                tiempo = 30;
                puntos = 0;
	}
}

setInterval(restarTiempo,1000); 
