function empezarJuego() {

     function cantidadDeJugadas() {

          // Ingreso de cantidad de juagadas
          const cantidadJugadas = +prompt('¿Ingrese cuántas veces quiere jugar?');
          return cantidadJugadas;
     }

     function jugarCachipun(cachipunUsuario, cachipunMaquina) {

          /* Reglas del Juego:
                     ● Tijera le gana a papel
                     ● Papel le gana a piedra
                     ● Piedra le gana a tijera
                     ● Si ambos jugadores eligen la misma opción es un empate  */
          let ganadorUsuario = false;
          let ganadorMaquina = false;

          if (cachipunUsuario == 'piedra' && cachipunMaquina == 'papel') {
               ganadorMaquina = true;
          }

          if (cachipunUsuario == 'papel' && cachipunMaquina == 'tijeras') {
               ganadorMaquina = true;
          }

          if (cachipunUsuario == 'tijeras' && cachipunMaquina == 'piedra') {
               ganadorMaquina = true;
          }

          if (cachipunUsuario == 'piedra' && cachipunMaquina == 'tijeras') {
               ganadorUsuario = true;
          }

          if (cachipunUsuario == 'papel' && cachipunMaquina == 'piedra') {
               ganadorUsuario = true;
          }

          if (cachipunUsuario == 'tijeras' && cachipunMaquina == 'papel') {
               ganadorUsuario = true;
          }

          // Se determina si es empate, ganoMaquina o ganoUsuario

          if (ganadorMaquina == true) {
               return 'maquina';
          } else if (ganadorUsuario == true) {
               return 'humano';
          } else {
               return 'empate';
          }
          /* 
                    if (ganadorUsuario == true) {
                         return 'humano';
                    }
                    if (empate == true) {
                         return 'empate';
                    } */

     }

     function jugadaDeLaMaquina() {

          const jugadaMaquina = Math.floor(Math.random()) * 3;

          let opcionJugadaMaquina = '';

          switch (jugadaMaquina) {
               case 0:
                    opcionJugadaMaquina = 'piedra';
                    break
               case 1:
                    opcionJugadaMaquina = 'papel';;
                    break
               case 2:
                    opcionJugadaMaquina = 'tijeras';;
                    break
          }
          return opcionJugadaMaquina;
     }

     function jugadaDelUsuario() {

          const jugadaUsuario = +prompt('¿Ingrese su Jugada?\n\n0->Piedra\n\n1->Papel\n\n2->Tijeras');

          let opcionJugadaUsuario = '';

          switch (jugadaUsuario) {
               case 0:
                    opcionJugadaUsuario = 'piedra';
                    break
               case 1:
                    opcionJugadaUsuario = 'papel';
                    break
               case 2:
                    opcionJugadaUsuario = 'tijeras';
                    break
               default:
                    console.log('No es un número correcto de eleccion')
                    break;
          }
          return opcionJugadaUsuario;
     }

     /* Principal */

     let numeroJugadas = cantidadDeJugadas();

     document.getElementById("parrafo").innerHTML += `Numero de Jugadas : ${numeroJugadas} </br></br>`;

     let seguirJugando = true;
     while ((numeroJugadas > 0) && (seguirJugando)) {

          let cachipunUsuario = jugadaDelUsuario();

          console.log('Cachipun Usuario : ', cachipunUsuario);
          document.getElementById("parrafo").innerHTML += `Cachipun Usuario : ${cachipunUsuario} </br>`;

          let cachipunMaquina = jugadaDeLaMaquina();
          console.log('Cachipun Maquina: ', cachipunMaquina);
          document.getElementById("parrafo").innerHTML += `Cachipun Máquina : ${cachipunMaquina} </br></br>`;

          let resultadoJugar = jugarCachipun(cachipunUsuario, cachipunMaquina);

          if (resultadoJugar == 'empate') {
               console.log('Se ha producido un empate entre Humano y Máquina');
               document.getElementById("parrafo").innerHTML += `Se ha producido un empate entre Humano y Máquina </br></br>`;
               numeroJugadas--;
          }

          if (resultadoJugar == 'maquina') {
               console.log('Humano, haz perdido contra la Máquina');
               document.getElementById("parrafo").innerHTML += `Humano, haz perdido contra la Máquina </br></br`;
               numeroJugadas--;
          }

          if (resultadoJugar == 'humano') {
               console.log('Feliciades Humano.. haz Ganado');
               document.getElementById("parrafo").innerHTML += `Feliciades Humano.. haz Ganado </br></br>`;
               numeroJugadas--;
          }

          let respuesta = prompt('¿Deseas seguir Jugando Cachipún: ? (Si o No)');
          if (respuesta == 'Si' || respuesta == 'si' || respuesta == 'SI') {
               seguirJugando = true;
          } else {
               seguirJugando = false;
          }
     }
}