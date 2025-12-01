const form = document.getElementById('form-soma');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const v1 = Number(document.getElementById('valor1').value);
    const v2 = Number(document.getElementById('valor2').value);

    const soma = v1 + v2;

    resultado.textContent = soma;
})