// Teste JavaScript
window.prompt('Qual é o seu nome ?')





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
   let a;
   a = parseInt(document.getElementById("num11").value);
   for (let i = 0; i < 11; i++) {       
    document.write(a +" x "+i+" = " + (a*i) + "<br>");
   }
   })

   // Imprimindo um nome 200 Vezes
document.querySelector("#btnum4").addEventListener("click", () =>{
    let nome = document.getElementById("name").value;
    for (let i = 1; i <=200; i++) {       
        document.write(nome + "<br>");
       }
})

// Cadastro do Produto 


document.querySelector("#bt").addEventListener("click", () =>{
    let qtd = parseInt(document.getElementById("qtd").value);
    let preco = parseInt(document.getElementById("preco").value);
    let t2 = qtd*preco;
    let desc, tp;

    if (qtd <= 5) {
     desc= 2/100 * t2;
    }
    else if (qtd > 5 && qtd <=10) {
        desc= 3/100 *t2;
    }
    else {
        desc= 5/100*t2;
    }

    tp = t2-desc;

    // Formatar e exibe os cálculos //
    t2=t2.toLocaleString("pt-br"), {style :"currency", currency:"BRL"}
    desc=desc.toLocaleString('pt-br',{style:'currency', currency:'BRL'});
    tp=tp.toLocaleString('pt-br',{style:'currency', currency:'BRL'});

    document.getElementById("t2").value=t2;
    document.getElementById("desc").value=desc;
    document.getElementById("tp").value=tp;
});
// Senha
    document.querySelector('#btsenha').addEventListener('click',()=>{
        let senha = document.getElementById('senha');
        document.getElementById('btsenha').value='Esconder senha';

        if (senha.type=='password') {
            senha.type='text';
        } else{
            senha.type='password';
            document.getElementById('btsenha').value='Mostrar senha';
        }
    });



// Outra coisa //

document.querySelector("#dt").addEventListener("change",()=>{
    localStorage.setItem("data",document.querySelector("#dt").value)
});
document.querySelector("#dt").value = localStorage.getItem("data");

// Vetor
document.querySelector('#btvetor').addEventListener('click',()=>{

let vetor =['Pedro','Bia','Gaby','Pablo'];
document.write(vetor)
document.write('<br>','<br>')
// Listar ao contrário 
document.write(vetor.reverse())
document.write('<br>','<br>')
// Listar por ordem alfabetica
document.write(vetor.sort())
document.write('<br>','<br>')
// Mostra o número de elementos
document.write(vetor.length)    

})
// let listagem =' ';
// for(let posicao=0;posicao<vetor.length;posicao++)
// {
//     listagem=listagem+vetor[posicao]+'<br>';
// }
// document.write(listagem);
// })


// Execício dos números Vetor 
document.querySelector('#btnnuns').addEventListener('click', ()=>{
let numeros=document.getElementById('nuns').value;
let vetnum=[ ];
vetnum=numeros.split(' ');
document.write(vetnum);
})


document.querySelector("#bt1").addEventListener('click', ()=>{
let sexo = document.getElementsByClassName('genero').value;
let pessoa = [sexo];
pessoa=sexo;
// let altura = document.getElementById('altura').value;
// let pessoa2 = [altura];
// pessoa2=altura.split(' ');
document.write(pessoa);
// sexo == 'M' ?  'Masculino': 'Feminino' 


})

// for (let index = 0; index < matriz.length; index++) {
//     document.write(matriz[index]);
// }

// Atividade altura e sexo
// 4.	Crie um programa que entre com os 
// dados de altura e sexo de 5 pessoas. 
// Imprima na tela quantas pessoas são do
//  sexo masculino e quantas pessoas são do sexo 
//  feminino. Mostre também qual é a maior altura e se 
// essa altura é de um homem ou uma mulher

// let sexo1 = document.getElementById('g1').value
// let sexo2 = document.getElementById('g2').value
// let sexo3 = document.getElementById('g3').value
// let sexo4 = document.getElementById('g4').value
// let sexo5 = document.getElementById('g5').value
// document.write(sexo1 == 'M' ?  'Masculino': 'Feminino', 
// sexo2 == 'M' ?  'Masculino': 'Feminino' ,
// sexo3 == 'M' ?  'Masculino': 'Feminino',
// sexo4 == 'M' ?  'Masculino': 'Feminino',
// sexo5 == 'M' ?  'Masculino': 'Feminino')

