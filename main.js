// '.' é pra acessar propriedades & funcionalidades do tipo de media resgatado do css;

function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio); 

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
   } else {
    alert("Elemento não encontrado ou seletor inválido.");
   }

}    

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter'){ //buscando o código da tecla e aplicando.
            tecla.classList.add('ativa'); 
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}



/*
let contador = 0;

// while obrigatóriamente depende de um fator booleano e externo.

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; 
    //deu pra fazer pq os ID e Class tem quase a mesma semantica.
    //class: tecla_pom;
    //id: som_tecla_pom;

    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    contador++;
}*/
