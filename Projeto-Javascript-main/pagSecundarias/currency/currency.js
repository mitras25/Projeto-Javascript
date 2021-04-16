/*
cotacao[br] = 5.619
cotacao[dl] = 1
cotacao[eu] = 0.840
cotacao[lb] = 0.720
cotacao[pa] = 91.071
cotacao[dc] = 1.244
*/

var simbolo
function recebendoMoeda(tipo) { // selecionando cotação e simbolo da moeda
    switch (tipo) {
        case 'br':
            moedaCot = 5.619
            simbolo = 'R$'
            break
        case 'dl':
            moedaCot = 1
            simbolo = '$'
            break
        case 'eu':
            moedaCot = 0.840
            simbolo =  '€'
            break
        case 'lb':
            moedaCot = 0.720
            simbolo =  '£'
            break
        case 'pa':
            moedaCot = 91.071
            simbolo = '$'
            break
        case 'dc':
            moedaCot = 1.244
            simbolo = 'C$'
            break
    }
}


//iniciando entrada 
function conveteMoeda() { 
    if(document.getElementById('resultado')){
        document.getElementById('resultado').remove()
    }
    
    do { //validando entrada 
        var valor = document.getElementById('entrada').value
        valor = valor.replace(',', '.')
        valor = parseFloat(valor)
        if (isNaN(valor) || valor < 0) {
            alert('Digite um valor válido')
            document.getElementById('entrada').value = ''
            break
        } else { //recebendo valor da cotação e simbolo da moeda escolhida
            var moeda1 = document.getElementById('de').value
            recebendoMoeda(moeda1)
            moedaDe = moedaCot
            var moeda2 = document.getElementById('para').value
            recebendoMoeda(moeda2)
            moedaPara = moedaCot
           

            if (moedaDe === moedaPara) { // não deixa escolher a mesma moeda
                alert('Escolha uma moeda diferente')
            } else { // convertendo
                var valorUnitario = (moedaPara / moedaDe)
                var valorFinal = (valorUnitario * valor).toFixed(2)
                valorFinal = valorFinal.replace('.', ',')
                //criando e incluindo um elemnto html
                var item = document.createElement('h3')
                var textoItem = document.createTextNode('O valor convertido é '+ simbolo+' ' +valorFinal )
                item.appendChild(textoItem)
                item.id = 'resultado'
                document.getElementById('caixa').appendChild(item)
            }
        }
    
    } while (isNaN(valor) || valor < 0)
    return
//fim
}