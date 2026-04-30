async function carregarMensagens() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dados = await resposta.json();

    const lista = document.getElementById("listaMensans");

    lista.innerHTML="";

    dados.slice(0,5).forEach(post=> {
        const item = document.createElement("li");
        item.textContent = post.title;

        lista.appendChild(item);
    });
}

carregarMensagens();
async function enviarMensagem(){
    const input = document.getElementById("mensagem");
    const texto = input.value;

    if (texto===""){
        alert("Digite uma mensagem!");
        return;
    }

    const resposta=await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
    boty:JSON.stringify({
        tittle: texto
    })

    });

    const dados = await resposta.json();

    alert("Sua Mensagem foi enviada com susseso!!! ID:"+dados.id);

    const lista = document.getElementById("listaMensagens");
    const item = document.createElement("li");
    item.textContent = texto;
    lista.appendChild(item);

    input.value="";
}