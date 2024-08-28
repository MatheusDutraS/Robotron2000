const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatisticas]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca);
        // atualizaEstatisticas(evento.target.dataset.peca)
    })
})

// function atualizaEstatisticas(peca) {
//     estatisticas.forEach( (elemento) => {
//         elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas]
//     })
// }

function manipulaDados(operacao, controle, valoresPeca) {
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-" && peca.value != 0) {
        peca.value = parseInt(peca.value) - 1
            atualizaEstatisticas(operacao)

    } else if (operacao === "+"){
        peca.value = parseInt(peca.value) + 1
            atualizaEstatisticas(operacao)

    } else {
        console.log("o número de peças não pode ser negativo!")
    }

    function atualizaEstatisticas() {
        if (operacao === "-") {
            estatisticas.forEach( (elemento) => {
                elemento.textContent = parseInt(elemento.textContent) - pecas[valoresPeca][elemento.dataset.estatisticas]
            })
        } else {
            estatisticas.forEach( (elemento) => {
                elemento.textContent = parseInt(elemento.textContent) + pecas[valoresPeca][elemento.dataset.estatisticas]
            })
        }
    
    }
}