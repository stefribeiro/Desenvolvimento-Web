function redimensionar()
{
    textoArea = document.getElementById('areaDeEntrada');
    while (textoArea.scrollHeight > textoArea.offsetHeight)
    {
        textoArea.rows += 1;
    }
}

function contar(){
    let texto = document.getElementById('areaDeEntrada').value;
    let divStatus = document.getElementById('statusEnvio'); 
    let botao = document.getElementById('envio');

    console.log(texto.length); 
    
    let h = document.createElement('h5');
    h.innerHTML = "";
    divStatus.innerHTML = "";
    botao.disabled = true;

    if(texto.length > 0)
    {   
        h.innerHTML = texto.length;
        divStatus.innerHTML = "";
        divStatus.appendChild(h);
        divStatus.style.display = "block";
        botao.disabled = false;

        if(texto.length > 100)
        {
            h.style.color = "rgb(255, 200, 0)";
            if(texto.length > 140) 
            {
                h.style.color = "rgb(255, 0, 0)";
                botao.disabled = true;
            }
        }
    }else{
        h.innerHTML = "";
        botao.disabled = true;
    }


}

function contar2(){
    let texto = document.getElementById('areaDeEntrada2').value;
    let divStatus = document.getElementById('statusEnvio2'); 
    let botao = document.getElementById('envio2');

    console.log(texto.length); 
    
    let h = document.createElement('h5');
    h.innerHTML = "";
    divStatus.innerHTML = "";
    botao.disabled = true;

    if(texto.length > 0)
    {   
        h.innerHTML = texto.length;
        divStatus.innerHTML = "";
        divStatus.appendChild(h);
        divStatus.style.display = "block";
        botao.disabled = false;

        if(texto.length > 100)
        {
            h.style.color = "rgb(255, 200, 0)";
            if(texto.length > 140) 
            {
                h.style.color = "rgb(255, 0, 0)";
                botao.disabled = true;
            }
        }
    }else{
        h.innerHTML = "";
        botao.disabled = true;
    }


}

