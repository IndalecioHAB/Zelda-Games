'use strict'

function agregarArrayLiteral() {


    fetch("https://gist.githubusercontent.com/bertez/8e62741154903c35edb3bfb825a7f052/raw/b5cd5137fd168116cc71740f1fbb75819d0fa82e/zelda-timeline.json")

       .then((response) => { 
            return response.json(); 
        })   

        .then((data) => {
            
            // Hacemos un array vacio para en un futuro hacer push de la api y de los nuevos juegos que se introducen
            let arrayFinal = [];
            // Esta variable es para que los nuevos juegos se iteren en el localStorage a partir del ultimo juego que nos da la API
            let numero = localStorage.length;
            
            //COMIENZA EL EVENTO ONCLICK

            // Obtenemos el acceso al boton del formulario
            const boton = document.getElementById("enviar");

            // Creamos el evento OnClick
            boton.addEventListener('click',(event) => {                

                // Captura todos los datos del formulario
                const title = document.getElementById("titulo").value;            
                const number = parseInt(document.getElementById("numero").value);
                const image = document.getElementById("enlace").value;
                const gif = document.getElementById("gif").value;
                const text = document.getElementById("descripcion").value;
                
                // Esta funcion almacena los nuevos juegos introducidos en el localStorage, a partir del ultimo juego de la api (usando la variable numero [el 10 en este caso]) y va incrementando numero para que el siguiente juego introducido sea almacenado en el 11, el siguiente en el 12, etc
                function sumarNumero() {       
                const clave = `zeldaTimeline_${numero}`;
                localStorage.setItem(clave, JSON.stringify({ 
                    date: number, 
                    image: image, 
                    text: text, 
                    title: title,
                    gif: gif
                    }));

                } // Aqui cierra la funcion sumarNumero

                sumarNumero(); // Llamamos a la funcion

                // Limpia el formulario cada vez que metemos 1 juego nuevo
                document.getElementById('reiniciar').reset();                


            }); // Aqui cierra el evento onClick


            //COMIENZA LA FUNCION QUE RECORRE LA API Y ALMACENA SUS DATOS EN EL LOCALSTORAGE
            

            const almacenInicial = () => {

                // Hacemos un bucle for que recorre la api y almacena sus datos en el local storage
                for (let i=0; i < data.length; i++) {
                    const clave = `zeldaTimeline_${i}`;
                    localStorage.setItem(clave, JSON.stringify(data[i]));
                } // Aqui cierra el bucle for                


            } // Aqui cierra la funcion almacenInicial

            almacenInicial(); // Llamamos a la funcion


            const añadirGif = () => {

                // Inlcluimos un GIF para cada juego para mostrarlo más adelante en CSS


                const theLegendOfZelda = JSON.parse(localStorage.getItem('zeldaTimeline_9'));

                theLegendOfZelda.gif = "./img/zelda9.gif";

                localStorage.setItem('zeldaTimeline_9', JSON.stringify(theLegendOfZelda));


                const aLinkToThePast = JSON.parse(localStorage.getItem('zeldaTimeline_3'));

                aLinkToThePast.gif = "./img/zelda3.gif";

                localStorage.setItem('zeldaTimeline_3', JSON.stringify(aLinkToThePast));


                const theAdventureOfLink = JSON.parse(localStorage.getItem('zeldaTimeline_5'));

                theAdventureOfLink.gif = "./img/zelda5.gif";

                localStorage.setItem('zeldaTimeline_5', JSON.stringify(theAdventureOfLink));


                const linkAwakening = JSON.parse(localStorage.getItem('zeldaTimeline_7'));

                linkAwakening.gif = "./img/zelda7.gif";

                localStorage.setItem('zeldaTimeline_7', JSON.stringify(linkAwakening));


                const ocarinaOfTime = JSON.parse(localStorage.getItem('zeldaTimeline_4'));

                ocarinaOfTime.gif = "./img/zelda4.gif";

                localStorage.setItem('zeldaTimeline_4', JSON.stringify(ocarinaOfTime));


                const theWindWaker = JSON.parse(localStorage.getItem('zeldaTimeline_0'));

                theWindWaker.gif = "./img/zelda0.gif";

                localStorage.setItem('zeldaTimeline_0', JSON.stringify(theWindWaker));


                const majoraMask = JSON.parse(localStorage.getItem('zeldaTimeline_1'));

                majoraMask.gif = "./img/zelda1.gif";

                localStorage.setItem('zeldaTimeline_1', JSON.stringify(majoraMask));


                const twilightPrincess = JSON.parse(localStorage.getItem('zeldaTimeline_6'));

                twilightPrincess.gif = "./img/zelda6.gif";

                localStorage.setItem('zeldaTimeline_6', JSON.stringify(twilightPrincess));


                const skywardSword = JSON.parse(localStorage.getItem('zeldaTimeline_2'));

                skywardSword.gif = "./img/zelda2.gif";

                localStorage.setItem('zeldaTimeline_2', JSON.stringify(skywardSword));
                

                const breathOfTheWild = JSON.parse(localStorage.getItem('zeldaTimeline_8'));

                breathOfTheWild.gif = "./img/zelda8.gif";

                localStorage.setItem('zeldaTimeline_8', JSON.stringify(breathOfTheWild));

            }

            añadirGif(); // Llamamos a la función

            // AHORA VAMOS A MODIFICAR LAS FOTOS HACIENDO TRAMPA

            const modificarFotos = () => {                

                // Obtenemos lo que localStore tiene del primer juego ya que sabemos su posicion ('zeldaTimeline_1')
                const zeldaMajorasMask = JSON.parse(localStorage.getItem('zeldaTimeline_1'));
                // Modificamos el key image para poner la nuestra propia
                zeldaMajorasMask.image = "./img/majorasMask.png";
                // Actualizamos el localStorage con la nueva informacion
                localStorage.setItem('zeldaTimeline_1', JSON.stringify(zeldaMajorasMask));

                // Obtenemos lo que localStore tiene del segundo juego ya que sabemos su posicion ('zeldaTimeline_6')
                const zeldaTwilightPrincess = JSON.parse(localStorage.getItem('zeldaTimeline_6'));
                // Modificamos el key image para poner la nuestra propia
                zeldaTwilightPrincess.image = "./img/2.webp";
                // Actualizamos el localStorage con la nueva informacion
                localStorage.setItem('zeldaTimeline_6', JSON.stringify(zeldaTwilightPrincess));

                // Obtenemos lo que localStore tiene del tercer juego ya que sabemos su posicion ('zeldaTimeline_2')
                const zeldaSkywardSword = JSON.parse(localStorage.getItem('zeldaTimeline_2'));
                // Modificamos el key image para poner la nuestra propia
                zeldaSkywardSword.image = "./img/3.jpg";
                // Actualizamos el localStorage con la nueva informacion
                localStorage.setItem('zeldaTimeline_2', JSON.stringify(zeldaSkywardSword));
            
            }
            
            modificarFotos(); // Llamamos a la funcion

            //COMIENZA LA FUNCION QUE ITERA EL LOCALSTORAGE (CON LAS FOTOS YA MODIFICADAS)

            const iterarAlmacen = () => {               


                // El bucle recupera la informacion del localStorage usando la variable arrayRecuperado y la mete toda en el array vacio que creamos inicialmente llamado arrayFinal
                for (let i=0; i< localStorage.length; i++) {
                const arrayRecuperado = JSON.parse(localStorage.getItem(`zeldaTimeline_${i}`));
                arrayFinal.push(arrayRecuperado);
                }               
                

            } // Aqui cierra la funcion iterarAlmacen

            iterarAlmacen(); // Llamamos a la funcion            

            // COMIENZA LA FUNCION QUE MUESTRA LOS DATOS DEL ARRAY (arrayFinal) EN EL HTML A TRAVES DEL DOM

            const mostrarArray = () => {

                arrayFinal.sort( (a, b) => a.date-b.date ); // Ordenamos el arrayFinal 

                // Aqui mostramos la informacion del array llamado arrayFinal que contiene los datos de la api y los juegos que vamos introduciendo, lo iteramos con un forEach para crear las "tarjetas" en el HTML
                arrayFinal.forEach((data) => {

                // Esta variable posiciona al dom en el div con id = "contenedor" de nuestro html
                const contenedor = document.getElementById("contenedor");
                // Esta variable crea un div nuevo para cada juego que vamos a mostrar usando el dom
                const contenedor2 = document.createElement("div");
                // Hacemos que todos los div (que seran las tarjetas de los juegos) tengan la misma clase: "juego"
                contenedor2.className = "juego";
                // Ahora la variable que ya tiene el nuevo div la llenamos con el contenido deseado
                contenedor2.innerHTML =
                `   
                    <div class="imagenes">
                    <h3>${data.date}</h3>
                    <img class="imagen" alt="${data.title}" src="${data.image}">
                    <img class="gif" alt="${data.title}" src="${data.gif}">
                    </div>                   
                    <div class="texto">
                    <h2>${data.title}</h2>                    
                    <p>${data.text}</p>
                    </div>
                `
                // Finalmente metemos el contenido deseado dentro del div con id="contenedor" que ya obtuvimos usando la variable contenedor
                contenedor.appendChild(contenedor2);

                }) // Aqui cierra el bucle forEach

                

            } // Aqui cierra la funcion mostrarArray

            mostrarArray(); // Llamamos a la funcion


                
        }); // aqui cierra el .then         


} // Aqui cierra la funcion principal

agregarArrayLiteral(); // Llamamos a la funcion principal