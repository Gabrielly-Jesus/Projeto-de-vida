// Mostrando o nome
document.querySelector("#botao").addEventListener("dblclick", () => {
  let nome;
  nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  document.write("O nome digitado é " + nome +" "+sobrenome);
})

document.querySelector("#botao").addEventListener("click", () =>{
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;

    alert("O nome digitado é "+nome +" "+sobrenome);
})
// Calcular escolha 2 Números e te mostraremos o resultado da conta = soma, subtração, multiplicação e divisão
document.querySelector("#btn").addEventListener("click",() => {
    let n1,n2,total;
    n1= parseInt(document.getElementById("n1").value);
    n2= parseInt(document.getElementById("n2").value);
    
    total = n1+n2;

    total2 = n1-n2;

    total3 = n1*n2;

if (n1>0 && n2>0) {
    total4 = n1/n2;
}
else { (total4 = "Não foi possível calcular") }
    

    alert("O Resultado dos números escolhidos são, Soma = " +total +" , Subtração = "+ total2+" , Multiplicação = "+total3+", Divisão ="+total4);
})

// Descubra se seu número é Par ou Ímpar
document.querySelector("#btnpar").addEventListener("click",()=>{
let num= parseInt(document.getElementById("num").value);
let resto;
resto = num%2;
if(resto==0){
alert("O número é par");
}else{
alert("O número é ímpar")
}
})

// Esse Ano é bissexto ou não ?
document.querySelector("#btnano").addEventListener("click",()=>{
let ano= parseInt(document.getElementById("ano").value);
let resto;
resto= ano%4;

if(resto==0){
    alert("É bissexto");
} else{
    alert("Não é bissexto")
}
})

// Vamos contar ! Estrutura FOR
document.querySelector("#btnum").addEventListener("click",()=>{
    let num=parseInt(document.getElementById("num4").value);
    let resultado=" ";
    for (let i = 1; i <= num; i++) {
        resultado=resultado+" - "+i;
        
    }
    document.write(resultado);
})

// Recebendo 4 valores e somando os lados do quadrado
document.querySelector("#btnum2").addEventListener("click",() => {
    let n1,n2,n3,n4,total;
    n1= parseInt(document.getElementById("nu1").value);
    n2= parseInt(document.getElementById("nu2").value);
    n3= parseInt(document.getElementById("nu3").value);
    n4= parseInt(document.getElementById("nu4").value);
    t1 = n1*4;
    t2 = n2*4;
    t3 = n3*4;
    t4 = n4*4;

if (t3 >= 1000) {
    alert("t3");
} else {
    alert("O valor do primeiro quadrado ="+ t1 +"\n"+ "O valor do segundo quadrado ="+t2 +"\n"+
     "O valor do terceiro quadrado ="+ t3 +"\n "+ "O valor do quarto quadrado ="+ t4);
}
})

// Fazendo a Tabuada 
document.querySelector("#btnum3").addEventListener("click",() => {
   let n1,t;
   n1 = parseInt(document.getElementById("num1").value);
    t = " ";
   function t(){
   for (let count = 0; count <= 10; count++) {       
   }
   document.write(n1 +" x "+count+" = " + (3*count) + "\n");
})

// Imprimindo um nome 200 Vezes
document.querySelector("#botao").addEventListener("click", () =>{
    let nome = document.getElementById("nome").value;
    alert("O nome digitado é "+nome);
})