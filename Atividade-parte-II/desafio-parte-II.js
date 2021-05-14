// criamos aqui uma variavel que vai guardar nossas lista de produtos
// Essa variavel é uma Array é uma estrutura de dados que armazena uma coleção de elementos de tal forma que cada um dos elementos possa ser identificado por, pelo menos, um índice ou uma chave
// utilizamos os colchetes para armazernar nossos dados

var listProducts = [
   
    //para separar cada produto vamos utilizar chaves, dentro das chaves vamos criar nossas variaveis que vão armazenar as informações
    {
     // idProduto é nossa variavel e vai armazenar um número nesse caso não precisamos utilizar aspas, pois se trata de um número int, float ou double
    "idProduto": 471185,
     // no caso da descricao utilizamos as aspas para armazenar nosso texto(string/str)
        //obs.: se um numero estivesse dentro de aspas, exemplo: "64" ele seria um tipo(type) string
    "descricao": "Suporte para monitor quadrado AC125 UN0001 Multilaser",
    "preco": 64.17,
    "qtdEstoque": 149,
    "disponivel": "sim",
    "emDestaque": "não",
    "departamento": 
        {
        "idDepto": 1,
        "nomeDepto": "Acessórios para computadores"
         }
   } , {
    "idProduto": 471184,
    "descricao": "Suporte para monitor triangular AC124 UN0001 Multilaser",
    "preco": 54.69,
    "qtdEstoque": 7,
    "disponivel": "sim",
    "emDestaque": "não",
    "departamento": 
        {
        "idDepto": 1,
        "nomeDepto": "Acessórios para computadores"
        }
    },{
    "idProduto": 435970,
    "descricao": "Apoio ergonômico para pés Waleu",
    "preco": 91.98,
    "qtdEstoque": 102 ,
    "disponivel": "sim",
    "emDestaque": "sim",
    "departamento": 
        {
        "idDepto": 1,
        "nomeDepto": "Acessórios para computadores"
        }
  } , {
    "idProduto": 380385,
    "descricao": "Suporte para cpu com roda",
    "preco": 62.48,
    "qtdEstoque": 33,
    "disponivel": "sim",
    "emDestaque": "sim",
    "departamento": 
        {
        "idDepto": 1,
        "nomeDepto": "Acessórios para computadores"
        } 
  } , {
    "idProduto":402265 ,
    "descricao": "Lápis preto com borracha redondo tabuada PO0072 Leo&Leo",
    "preco": 26.53,
    "qtdEstoque": 45,
    "disponivel": "sim",
    "emDestaque": "sim",
    "departamento": 
        {
        "idDepto": 2,
        "nomeDepto": "Lápis de escrever"
        }
  } , {
    "idProduto": 478585,
    "descricao": "Lápis preto c/borracha redondo pastel PO0072 Leo&Leo",
    "preco": 40.17,
    "qtdEstoque": 0,
    "disponivel": "não",
    "emDestaque": "não",
    "departamento": 
        {
        "idDepto": 2,
        "nomeDepto": "Lápis de escrever"
        }
  } , {
    "idProduto": 473747,
    "descricao": "Lápis Preto Grafite Nº 2 Faber-Castell - Cartela com 04 Lápis",
    "preco": 4.52,
    "qtdEstoque": 255,
    "disponivel": "sim",
    "emDestaque": "sim",
    "departamento": 
       {
        "idDepto": 2,
        "nomeDepto": "Lápis de escrever"
        }
  } , {
    "idProduto": 473141,
    "descricao": "Brocal Escolar 3G Sortido Lantecor - Pacote com 12 Unidades",
    "preco": 5.01,
    "qtdEstoque": 33,
    "disponivel": "sim",
    "emDestaque": "não",
    "departamento": 
        {
        "idDepto": 3,
        "nomeDepto": "Artesanato"
        }
  } , {
    "idProduto": 472627,
    "descricao": "Tesoura uso geral 21cm BL0001 Jocar",
    "preco": 6.66,
    "qtdEstoque": 66,
    "disponivel": "sim",
    "emDestaque": "sim",
    "departamento": 
        {
        "idDepto": 3,
        "nomeDepto": "Artesanato"
        }
  } , {
    "idProduto": 473129,
    "descricao": "Lantejoula 06MM 3G Sortido Lantecor - Pacote com 12 Unidades",
    "preco": 5.01,
    "qtdEstoque": 844,
    "disponivel": "sim",
    "emDestaque": "sim",
    "departamento": 
        {
        "idDepto": 3,
        "nomeDepto": "Artesanato"
        }
  } , {
  
    "idProduto": 481432,
    "descricao": "Agenda Diária Espiral O Pequeno Príncipe Azul Escuro 2021 Jandaia",
    "preco": 7.37,
    "qtdEstoque": 17 ,
    "disponivel": "sim",
    "emDestaque": "sim",
    "departamento": 
        {
        "idDepto": 4,
        "nomeDepto": "Agenda" 
        }
  } , {
  
    "idProduto": 481435,
    "descricao": "Agenda Diária Espiral Eco Línea Rosa 2021 Jandaia",
    "preco": 7.37,
    "qtdEstoque": 14,
    "disponivel": "sim",
    "emDestaque": "sim",
    "departamento": 
        {
        "idDepto": 4,
        "nomeDepto": "Agenda" 
        }
      }
    ]


//Quantidade total de itens em estoque (somatória das quantidades de todos os produtos)

function qtdTotalEstoque() {
    // aqui vamos começar com uma variavel que vai colocar o total de produtos igual a zero
    // para depois atribuirmos um valor a ela
    let totalProdutos = 0;
    //o laço de for foi criado para que possa percorrer o código 
    //inicio o for com uma variavel criada posicao, sem acento ou cedilha, pois o código não entende esses caracteres especiais (obs.: poderia ser qualquer nome, ex: i, j, produtoPosicao)
   // a posicao é zero, enquanto a posicao for menor(<) que a minha lista variavel listProducts, somamos a posicao mais posicao(assim fica posicao+posicao pode ser escrita posicao = posicao + 1 = posicao++)
    for (posicao = 0; posicao < listProducts.length; posicao++) {
        // variavel criada para informar que o produto é igual ao produto na posicao x
        let produdo = listProducts[posicao];
        
        //total de produto é igual a total de produtos mais o produto.qtdEstoque então aqui definimos qual a informação que desejamos obter
        totalProdutos = totalProdutos + produto.qtdEstoque;
    }
    
    //Vamos retornar a informação de totalProdutos concatenado com uma string entre parenteses
    console.log("O total de produto no estoque, de todas as categorias é " + totalProdutos);
}



//Quantidade total de itens em destaque 

function qtdItensDestaque() {
     // aqui vamos começar com uma variavel que vai colocar o total de destaque igual a zero
    // para depois atribuirmos um valor a ela
     let totalEmDestaque = 0;

     for (posicao = 0; posicao < listaProdutos.length; posicao++) {
         let produto = listProducts[posicao];
        // aqui começa a validar as informaçoes
         // se produto emDesque(variavel que criamos para armazenar as informações se o produto terá destaque ou não)
         if (produto.emDestaque == "sim"){
            //se a informação que armazenamos na variavel emDestaque for igual a "sim"(string)
             //então vamos criar uma variavel para armazenar essa informação 
             // adicionamos a somatoria de +1 que seria a mesma coisa de totalEmDestaque++
             totalEmDestaque++;
         }
     }
     console.log("O total de itens em destaque é " + totalEmDestaque);
}



//Quantidade total de itens disponíveis
function qtdTotaldeItensDisponiveis() {
     let totalEmDestaque = 0;
     for (posicao = 0; posicao < listaProdutos.length; posicao++) {
         let produto = listProducts[posicao];
        // aqui começa a validar as informaçoes
         // se produto emDesque(variavel que criamos para armazenar as informações se o produto terá destaque ou não)
         if (produto.emDestaque == "sim"){
            //se a informação que armazenamos na variavel emDestaque for igual a "sim"(string)
             //então vamos criar uma variavel para armazenar essa informação 
             // adicionamos a somatoria de +1 que seria a mesma coisa de totalEmDestaque++
             totalEmDestaque= totalEmDestaque + produto.qtdEstoque;
         }
     }
     console.log("O total de itens em destaque é " + totalEmDestaque);
}



//Valor total do inventário da empresa

function inventario(){
    
    let totalInventario = 0;
    for (posicao = 0; posicao < listProducts.length; posicao++) {
        let produto = listProducts[posicao];
        // para fazer o valor do inventario, somamos o valor do invetario mais o total de itens que tem no estoque vezes o preço dos produtos
        // lembrando que nosso for já percorre nossa lista e só precisamos informar qual variavel ele deve retornar para retornar esse calculo
        totalInventario = totalInventario + produto.qtdEstoque * produto.preco;
    }
    console.log("O total do Inventário R$ " + totalInventario);
}




// Somatória de itens por departamento 
function somatoriaItensDepto(){
    let departamento = {
        id: 0,
        nomeDepto: "",
        qtdEstoque: 0
    }
    
    let idDepto = 0
    for(posicao=0; posicao<listProducts.length; posicao++){
        // se idDepto for diferente (!=) da lista de produtos
        //ai vamos chamar nossa variavel acima 
        //listProducts(nossa variavel que usamos no começo do código para armazenar nossa lista)[posicao].departamento(let departamento, estamos chamando ela para comparar).idDepto então se for diferente 
       if(idDepto != listProducts[posicao].departamento.idDepto){   
           // vamos mostrar o nome de outro departamento
           
           //se departamento.id for diferente de zero vamos continuar 
            if (departamento.id != 0){
                // e exibir a mensagem abaixo concatenando a nossa variável que antees estava vazia e agora "substituimos as informações que estavam zeradas
                // a cada departamento exibido essa variavel vai /variando/ a informação
                console.log("O estoque do Departamento é " + departamento);
            }
            idDepto = listProducts[posicao].departamento.idDepto;
            departamento.id = idDepto;
            departamento.nomeDepto = listProducts[posicao].departamento.nomeDepto;
            departamento.qtdEstoque = listProducts[posicao].qtdEstoque;
       }
       else{  //senão o departamento.qtdEstoque é igual a departamento.qtdEstoque  = quantidade de estoque que
            departamento.qtdEstoque = departamento.qtdEstoque + listProducts[pososicao].qtdEstoque;
       }
    }
    console.log(departamento);
}



// Valor total do inventário por departamento

function totalInventario(){
      let departamento = {
        id: 0,
        nomeDepto: "",
        qtdEstoque: 0
    }
    
    let idDepto = 0
    
    for(posicao=0; posicao<listProducts.length; posicao++){
         
       if(idDepto != listProducts[posicao].departamento.qtdEstoque){   
           // vamos mostrar o nome de outro departamento
           
           //se departamento.id for diferente de zero vamos continuar 
            if (departamento.qtdEstoque != 0){
                // e exibir a mensagem abaixo concatenando a nossa variável que antees estava vazia e agora "substituimos as informações que estavam zeradas
                // a cada departamento exibido essa variavel vai /variando/ a informação
                console.log("O estoque do invetario do departamento é " + departamento);
            }
            qtdEstoque = listProducts[posicao].departamento.qtdEstoque;
            departamento.id = idDepto;
            departamento.nomeDepto = listProducts[posicao].departamento.nomeDepto;
            departamento.qtdEstoque = listProducts[posicao].qtdEstoque;                
       }
       else{  // manteve o departamento
            departamento.qtdEstoque = departamento.qtdEstoque + listProducts[posicao].qtdEstoque;
       }
    }
    console.log(departamento);
}




// Valor do ticket médio dos produtos da empresa 
function ticketMedio()
   let departamento = {
           id: 0,
           nomeDepto: "",
           qtdEstoque: 0
       }
    
    let idDepto = 0
    let soma= 0
    let quant = 0
    
    for (posicao=0; posicao<listProducts.length; posicao++) {
         if(idDepto != listProducts[posicao].departamento.qtdEstoque){ 
            quant++
            soma += listProducts[posicao].departamento.preco;
        }
    }
    console.log("Ticket médio dos produtos da empresa é R$" +(soma / quant));    
   


//fita dada Ticket médio por departamento 
function ticketMedioDepto(){
    
    let soma= 0
    let quant = 0
    
    for (posicao=0; posicao<listProducts.length; posicao++) {
         if(idDepto != listProducts[posicao].departamento.qtdEstoque){ 
            quant++
            soma += listProducts[posicao].departamento.preco;
        }
       qtdEstoque = listProducts[posicao].departamento.qtdEstoque;
            departamento.id = idDepto;
            departamento.nomeDepto = listProducts[posicao].departamento.nomeDepto;
            departamento.qtdEstoque = listProducts[posicao].qtdEstoque; 
    }
    console.log("Ticket médio dos produtos da empresa é R$" +(soma / quant)); 
   
    console.log(departamento);
}



//Departamento mais valioso 
function departamentoValioso(){
    let departamento = {
        id: 0,
        nomeDepto: "",
        inventario: 0
    }
    
    let departamentoMaisValioso = {
        id: 0,
        nomeDepto: "",
        inventario: 0
    }
    
    let idDepto = 0
    for(posicao=0; posicao<listProducts.length; posicao++){
       if(idDepto != listProducts[posicao].departamento.idDepto){   //mudou o departamento
            if (departamento.id != 0){
               // console.log("Inventario do Departamento...");
               // console.log(departamento);
                if (departamento.inventario > departamentoMaisValioso.inventario){
                   departamentoMaisValioso.id = departamento.id;
                   departamentoMaisValioso.nomeDepto = departamento.nomeDepto;
                   departamentoMaisValioso.inventario = departamento.inventario;
                   
                }
            }
            idDepto = listProducts[posicao].departamento.idDepto;
            departamento.id = idDepto;
            departamento.nomeDepto = listProducts[posicao].departamento.nomeDepto;
            departamento.inventario = listProducts[posicao].qtdEstoque * listProducts[posicao].preco;
       }
       else{  // manteve o departamento
            departamento.inventario = departamento.inventario + listProducts[posicao].qtdEstoque * listProducts[posicao].preco;
       }
    }
    //console.log(departamento);
    console.log("O departamento mais valioso é " + departamentoMaisValioso);
}



//Produto mais caro da loja 
function produtoCaro(){

    let departamento = {
        id: 0,
        nomeDepto: "",
        preco: 0
    }
    
    let precoCaro = {
        id: 0,
        nomeDepto: "",
        preco: 0
    }
    
    let precoX = 0
    for(posicao=0; posicao<listProducts.length; posicao++){
       
       if(idDepto != listProducts[posicao].departamento.precoX){   //mudou o departamento
            if (departamento.preco > listProducts[posicao].departamento.preco){
               // console.log("Inventario do Departamento...");
               // console.log(departamento);
                if (departamento.preco > precoCaro.preco){
                   precoCaro.id = departamento.id;
                   precoCaro.nomeDepto = departamento.nomeDepto;
                   precoCaro.preco = departamento.preco;
                   
                }
            }
            precoX = listProducts[posicao].departamento.precoX;
            departamento.id = idDepto;
            departamento.nomeDepto = listProducts[posicao].departamento.nomeDepto;
            departamento.inventario = listProducts[posicao].qtdEstoque * listProducts[posicao].preco;
       }
       else{  // manteve o departamento
            departamento.preco = departamento.preco + listProducts[posicao].preco ;
       }
    }
    //console.log(departamento);
    console.log("O produto mais caro é " + precoCaro);
}




//Produto mais barato da loja
function produtoBarato(){
   
   let departamento = {
        id: 0,
        nomeDepto: "",
        preco: 0
    }
    
    let precoCaro = {
        id: 0,
        nomeDepto: "",
        preco: 0
    }
    
    let precoY = 0
    for(posicao=0; posicao<listProducts.length; posicao++){
       
       if(idDepto != listProducts[posicao].departamento.precoY){   //mudou o departamento
            if (departamento.preco > listProducts[posicao].departamento.preco){
               // console.log("Inventario do Departamento...");
               // console.log(departamento);
                if (departamento.preco < precoCaro.preco){
                   precoCaro.id = departamento.id;
                   precoCaro.nomeDepto = departamento.nomeDepto;
                   precoCaro.preco = departamento.preco;
                   
                }
            }
            precoY = listProducts[posicao].departamento.precoY;
            departamento.id = idDepto;
            departamento.nomeDepto = listProducts[posicao].departamento.nomeDepto;
            departamento.inventario = listProducts[posicao].qtdEstoque * listProducts[posicao].preco;
       }
       else{  // manteve o departamento
            departamento.preco = departamento.preco + listProducts[posicao].preco ;
       }
    }
    //console.log(departamento);
    console.log("O produto mais barato é " + produtoBarato);
}
