var tela = document.getElementById("i_tela");

function adicionar_numero(numero){
    tela.value += numero;
}

function adicionar_operador(operador){
    tela.value += '' + operador + '';
}

function adicionar_ponto(){
    if(!tela.value.includes('.')){
        tela.value += '.';  
    }
}

function limpar_tela(){
    tela.value = '';
}

function apagar(){
    tela.value = tela.value.slice(0, -1);
}

function calcular(){
    try{
        let enpressao = tela.value.replace(/ /g, '');
        let resultado = eval(enpressao);
        tela.value = resultado;
    }catch(e){
        tela.value = 'Erro';
    }
}