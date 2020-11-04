document.querySelector("#botao").addEventListener("dblclick", () => {
  let nome;
  nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  document.write("O nome digitado é " + nome +" "+sobrenome);
})

document.querySelector("#botao").addEventListener("click", () =>{
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").valeu;

    alert("O nome digitado é "+nome +" "+sobrenome);
})