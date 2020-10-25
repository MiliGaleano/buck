    let puntaje1 = 0;
	let puntaje2 = 0;
	let turno = 1;
	let objetivo1 = 0;
    let objetivo2 = 0;
    let playername = "";

	function iniciar() {
        if (document.getElementById('nameplayer').value == "") {
            alert('Ingresa un nombre para comenzar el juego');
        }
        else {
            playername = document.getElementById('nameplayer').value;
            document.getElementById('obtenerObj').style.display= "block";
            document.getElementById('nombreJug').style.display= "none";
            document.getElementById('p1').style.backgroundColor = "grey";
            document.getElementById('p2').style.backgroundColor = "grey";
        }
    }

    function verObjetivo() {
        document.getElementById('d1').src = 'img/gif.gif';
        dado1= Math.floor(Math.random()*3+4);
        setTimeout(function(){
            document.getElementById('d1').src ='img/' +dado1+ '.png';
            objetivo1= dado1;
            document.getElementById('d3').src = 'img/gif.gif';
            dado3= Math.floor(Math.random()*3+4);
            setTimeout(function(){
                document.getElementById('d3').src ='img/' +dado3+ '.png';
                objetivo2= dado3;
                document.getElementById('obtenerObj').style.display= "none";
                document.getElementById('puntajes').style.display= "block";
                document.getElementById('avisarObj').innerHTML = "Tu número objetivo es "+objetivo1+" y el de Gale es "+objetivo2;
                document.getElementById('p1').value = puntaje1;
                document.getElementById('p2').value = puntaje2;
                document.getElementById('p1').style.backgroundColor = "darksalmon";
                document.getElementById('playerpoints').innerHTML = "Puntaje de " + playername;
            },1500);
        },1500); 
    }

	function tirardados() {
        document.getElementById('d1').src = 'img/gif.gif';
	    document.getElementById('d2').src = 'img/gif.gif';
	    document.getElementById('d3').src = 'img/gif.gif';
		dado1= Math.floor(Math.random()*6+1);
		dado2= Math.floor(Math.random()*6+1);
        dado3= Math.floor(Math.random()*6+1);
		document.getElementById('p2').value = puntaje2;
        document.getElementById('p1').value = puntaje1;
        setTimeout(function(){
            if (turno == 1) {
                document.getElementById('d1').src ='img/' +dado1+ '.png';
                document.getElementById('d2').src ='img/' +dado2+ '.png';
                document.getElementById('d3').src ='img/' +dado3+ '.png';
                if (dado1 == objetivo1 && dado2 == objetivo1 && dado3 == objetivo1) {
                    puntaje1+=15;
                    document.getElementById('p1').value = "Buck Mayor! Ganaste!";
                    }
                else if (dado1 == dado2 && dado1 == dado3) {
                puntaje1+=5;
                document.getElementById('p1').value = "Buck Menor! +5 = " + puntaje1;
                }
                else if ((dado1+dado2 == objetivo1 || dado1+dado3 == objetivo1 || dado2+dado3 == objetivo1) && (dado1 == objetivo1 || dado2 == objetivo1 || dado3 == objetivo1)) {
                puntaje1+=2;
                document.getElementById('p1').value = "+2 = " + puntaje1;
                }
                else if(dado1+dado2 == objetivo1 || dado1+dado3 == objetivo1 || dado2+dado3 == objetivo1) {
                puntaje1++;
                document.getElementById('p1').value = "+1 = " + puntaje1;
                }
                else if (dado1 == objetivo1 || dado2 == objetivo1 || dado3 == objetivo1) {
                puntaje1++;
                document.getElementById('p1').value = "+1 = " + puntaje1;
                }
                else {
                turno = 2;
                document.getElementById('p1').value = puntaje1;
                document.getElementById('p1').style.backgroundColor = "grey";
                document.getElementById('p2').style.backgroundColor = "darksalmon";
                }
            }

            else { 
                document.getElementById('d1').src ='img/' +dado1+ '.png';
                document.getElementById('d2').src ='img/' +dado2+ '.png';
                document.getElementById('d3').src ='img/' +dado3+ '.png';
                if (dado1 == objetivo2 && dado2 == objetivo2 && dado3 == objetivo2) {
                    puntaje2+=15;
                    document.getElementById('p2').value = "Buck Mayor! Ganaste!";
                    }
                else if (dado1 == dado2 &&  dado1 == dado3) {
                puntaje2+=5;
                document.getElementById('p2').value = "Buck Menor! +5 = " + puntaje2;
                }
                else if ((dado1+dado2 == objetivo2 || dado1+dado3 == objetivo2 || dado2+dado3 == objetivo2) && (dado1 == objetivo2 || dado2 == objetivo2 || dado3 == objetivo2)) {
                puntaje2+=2;
                document.getElementById('p2').value = "+2 = " + puntaje2;
                }
                else if (dado1+dado2 == objetivo2 || dado1+dado3 == objetivo2 || dado2+dado3 == objetivo2) {
                puntaje2++;
                document.getElementById('p2').value = "+1 = " + puntaje2;
                }
                else if (dado1 == objetivo2 || dado2 == objetivo2 || dado3 == objetivo2) {
                puntaje2++;
                document.getElementById('p2').value = "+1 = " + puntaje2;
                }
                else {
                document.getElementById('p2').value = puntaje2;
                document.getElementById('p2').style.backgroundColor = "grey";
                document.getElementById('p1').style.backgroundColor = "darksalmon";
                turno = 1;
                }
            }

           
        }, 1500);
        setTimeout(function(){controlarGanador();},2000); 
    }  

    function controlarGanador() {
        if (puntaje1>=15) {
            ganador(); 
        }
        if (puntaje2>=15) {
            ganador();
        }
    }

    function ganador() {
        if (turno == 1) {
            alert('Felicidades ' +playername+ ', ganaste el juego!');
        }
        else {
            alert('Lo siento ' +playername+ ', Gale ganó el juego');
        }
        setTimeout(function(){
            puntaje1 = 0;
            puntaje2 = 0;
            turno = 1;
            document.getElementById('p1').style.backgroundColor = "lightblue";
            document.getElementById('p2').style.backgroundColor = "grey";
            document.getElementById('puntajes').style.display= "none";
            document.getElementById('obtenerObj').style.display= "block";
        },1000);
    }