const butao = document.querySelector('input#botao-resultado');
const p = document.querySelector('p#contador-resultado');

butao.addEventListener('click', function(e){
    e.preventDefault();

    let inicio = Number(document.querySelector('input#inicio').value);
    let fim = Number(document.querySelector('input#fim').value);
    let passo = Number(document.querySelector('input#passo').value);
    
    if (passo <= 0){
        alert("Passo inválido! Considerando passo = 1.");
        passo = 1;
    }

    p.innerText = "";

    for (let i = inicio; i <= fim; i += passo){
        p.innerText += i + " 👉 ";
    }

    p.innerText += "🏁";
});