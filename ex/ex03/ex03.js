let valores = [12, 8, 27, 3, 19];
let maiorValor = valores[0];
for (let i = 0; i < valores.length; i++) {
    if(maiorValor < valores[i]) {
        maiorValor = valores[i];
    }
}

console.log(maiorValor);