let pista = 100;
let cadeiraSuperior = 200;
let cadeiraInferior = 400;

function comprar()
{
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

        if (tipoDeIngresso === 'pista') {

                if (pista < quantidade) {
                    alert('Quantidade insuficiente de ingressos');
                    return;
                }else
                   { pista -= quantidade;
                    alert('Compra realizada com sucesso');}

        } else if (tipoDeIngresso === 'superior') {

            if  (cadeiraSuperior < quantidade) {
                alert('Quantidade insuficiente de ingressos');
                return;
            }else

            {cadeiraSuperior -= quantidade;
            alert('Compra realizada com sucesso');}

        } else {
            if (cadeiraInferior < quantidade) {
                alert('Quantidade insuficiente de ingressos');
                return;
            }else

            {cadeiraInferior -= quantidade;
            alert('Compra realizada com sucesso');}
        }
        document.getElementById('qtd').value = '';
        mudarTexto();
        
}

function mudarTexto()
{
    let textoPista = document.getElementById('qtd-pista');
    let textoCadeiraSuperior = document.getElementById('qtd-superior');
    let textoCadeiraInferior = document.getElementById('qtd-inferior');
   
    //Adicionando valor aos campos
    textoPista.textContent = `${pista}`;

    textoCadeiraSuperior.textContent = `${cadeiraSuperior}`;
    
    textoCadeiraInferior.textContent = `${cadeiraInferior}`;
    
}