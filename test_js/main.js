const form = document.getElementById('form-deposito');
let valorB = document.getElementById('numeroB');
let valorA = document.getElementById('numeroA');

function verificarNumeros(valorA, valorB) {
    return valorB >= valorA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    
    const menssagemSucesso = `Parabens o numero: ${valorB.value} é maior que o numero: ${valorA.value}`;
    
    
    
    
    if (!verificarNumeros(valorB.value, valorA.value)) {
        alert(menssagemSucesso);
    } else {
        alert("erro");
    }

})
console.log([valorB]);