
/* ==========================
   ROLAGEM SUAVE DO MENU
========================== */


const links = document.querySelectorAll("nav a");


links.forEach(link => {


    link.addEventListener("click", (evento) => {


        evento.preventDefault();


        const secao = document.querySelector(
            link.getAttribute("href")
        );


        if(secao){

            secao.scrollIntoView({

                behavior: "smooth"

            });

        }


    });


});






/* ==========================
   ANIMAÇÃO AO ROLAR A PÁGINA
========================== */


const elementos = document.querySelectorAll(

    "section, .card, .tags span"

);



const observador = new IntersectionObserver((entradas)=>{


    entradas.forEach((entrada)=>{


        if(entrada.isIntersecting){


            entrada.target.classList.add("animar");


        }


    });



},{

    threshold:0.15

});




elementos.forEach(elemento=>{


    observador.observe(elemento);


});







/* ==========================
   EFEITO DE DIGITAÇÃO
========================== */


const cargo = document.querySelector(".inicio h3");


const texto = "Desenvolvedora Full Stack em formação";


let contador = 0;



function digitar(){


    if(cargo && contador < texto.length){


        cargo.textContent += texto.charAt(contador);


        contador++;


        setTimeout(digitar,80);


    }


}



if(cargo){


    cargo.textContent = "";

    digitar();


}








/* ==========================
   ANO AUTOMÁTICO
========================== */


const rodape = document.querySelector("footer p");



if(rodape){


    rodape.innerHTML = 
    `© ${new Date().getFullYear()} Andressa Sales | Desenvolvedora em formação`;


}








/* ==========================
   BOTÃO VOLTAR AO TOPO
========================== */


const botaoTopo = document.createElement("button");


botaoTopo.className = "topo";


botaoTopo.innerHTML = "↑";


document.body.appendChild(botaoTopo);




window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        botaoTopo.classList.add("mostrarTopo");


    }else{


        botaoTopo.classList.remove("mostrarTopo");


    }


});





botaoTopo.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});








/* ==========================
   MENSAGEM NO CONSOLE
========================== */


console.log(

"%c💻 Portfólio Andressa Sales carregado!",

"color:#7A1F3D;font-size:16px;font-weight:bold;"

);