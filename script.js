
//Recuperando o botão com o getElementById
const botao = document.getElementById("btn-1");

//Recuperar um item específico com a
//função querySelector(parâmetro)
// const seletor = document.querySelector("li")
// console.log(seletor.textContext)

//Recuperar uma lista de elementos com a função
//query SelectorAll
const seletores = document.querySelectorAll("li");

seletores.forEach((item)=>{
    console.log(`Items selecionados : ${item.textContext}`);
})