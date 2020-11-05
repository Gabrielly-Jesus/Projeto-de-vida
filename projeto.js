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
    

    alert("O Resultado dos números escolhidos são, Soma = "+total+" , Subtração = "+ total2+" , Multiplicação = "+total3+", Divisão ="+total4);
})


