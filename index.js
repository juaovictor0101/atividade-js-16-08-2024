function maiorMenor() {
    let a = parseInt(document.getElementById('a1').value);
    let b = parseInt(document.getElementById('b1').value);
    let c = parseInt(document.getElementById('c1').value);
    let d = parseInt(document.getElementById('d1').value);
    let e = parseInt(document.getElementById('e1').value);
    
    let valores = [a, b, c, d, e];
    let maior = Math.max(...valores);
    let menor = Math.min(...valores);
    
    document.getElementById('resultadoMaiorMenor').textContent = Maior: ${maior}, Menor: ${menor};
}

function verificarVogal() {
    let c = document.getElementById('vogalInput').value.toLowerCase();
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let resultado = vogais.includes(c) ? 1 : 0;
    
    document.getElementById('resultadoVogal').textContent = Resultado: ${resultado};
}

function limites() {
    let li = parseInt(document.getElementById('li').value);
    let ls = parseInt(document.getElementById('ls').value);
    let pares = [];
    let soma = 0;

    for (let i = li + 1; i < ls; i++) {
        if (i % 2 === 0) {
            pares.push(i);
            soma += i;
        }
    }

    document.getElementById('resultadoLimites').textContent = Pares: ${pares.join(', ')}, Somatório: ${soma};
}

function ordenar() {
    let a = parseInt(document.getElementById('a2').value);
    let b = parseInt(document.getElementById('b2').value);
    let c = parseInt(document.getElementById('c2').value);

    let ordenados = [a, b, c].sort((x, y) => x - y);

    document.getElementById('resultadoOrdem').textContent = Ordenado: ${ordenados.join(', ')};
}

function positivoNegativo() {
    let x = parseInt(document.getElementById('x1').value);
    let resultado = x >= 0;

    document.getElementById('resultadoPositivoNegativo').textContent = Positivo ou Zero: ${resultado};
}

function parImpar() {
    let x = parseInt(document.getElementById('x2').value);
    let resultado = x % 2 === 0;

    document.getElementById('resultadoParImpar').textContent = Par: ${resultado};
}