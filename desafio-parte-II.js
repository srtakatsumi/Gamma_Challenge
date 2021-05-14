var listProducts = [
    {
    "idProduto": 471185,
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

//Quantidade total de itens em destaque (somatória das quantidades dos itens marcados como "emDestaque : sim")

function qtdItensDestaque() {
     // aqui vamos começar com uma variavel que vai colocar o total de destaque igual a zero
    // para depois atribuirmos um valor a ela
     let totalEmDestaque = 0;
     for (posicao = 0; posicao < listaProdutos.length; possica++) {
         let prod = listProducts[pos];
         if (prod.emDestaque == "sim"){
             totalEmDestaque = totalEmDestaque + prod.qtdEstoque;
         }
     }
     console.log("Total dos Destaques= " + totalEmDestaque);
}
//Quantidade total de itens disponíveis (similar ao anterior)
function exercicio3() {
    // aqui vai seu código
    // turn yourself around
}
//Valor total do inventário da empresa (somatória dos valores individuais multiplicado pela quantidade em estoque)

function exercicio4(){
    // aqui vai seu código
    let totalInventario = 0;
    for (pos = 0; pos < listProducts.length; pos++) {
        let prod = listProducts[pos];
        totalInventario = totalInventario + prod.qtdEstoque * prod.preco;
    }
    console.log("Total do Inventário R$ "+totalInventario);
}

// Somatória de itens por departamento (você deverá retornar um objeto contendo o nome do departamento e o total de itens nele)
function exercicio5(){
    let departamento = {
        id: 0,
        nomeDepto: "",
        qtdEstoque: 0
    }
    
    let idDepto = 0
    for(pos=0; pos<listProducts.length; pos++){
       if(idDepto != listProducts[pos].departamento.idDepto){   //mudou o departamento
            if (departamento.id != 0){
                console.log("Estoque do Departamento...");
                console.log(departamento);
            }
            idDepto = listProducts[pos].departamento.idDepto;
            departamento.id = idDepto;
            departamento.nomeDepto = listProducts[pos].departamento.nomeDepto;
            departamento.qtdEstoque = listProducts[pos].qtdEstoque;
       }
       else{  // manteve o departamento
            departamento.qtdEstoque = departamento.qtdEstoque + listProducts[pos].qtdEstoque;
       }
    }
    console.log(departamento);
}

// Valor total do inventário por departamento (similar ao item anterior)

function excercicio6(){
    
}
// Valor do ticket médio dos produtos da empresa (basicamente o valor total do inventário dividido pelo número de itens)
function excercicio7(){
    
}
//fita dada Ticket médio por departamento (similar ao item anterior, porém retornando uma lista de objetos que contenha o nome do departamento e o seu ticket médio)
function excercicio8(){
    
}
//Departamento mais valioso (qual o departamento que tem a maior somatória dos valores dos itens)
function exercicio9(){
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
    for(pos=0; pos<listProducts.length; pos++){
       if(idDepto != listProducts[pos].departamento.idDepto){   //mudou o departamento
            if (departamento.id != 0){
               // console.log("Inventario do Departamento...");
               // console.log(departamento);
                if (departamento.inventario > departamentoMaisValioso.inventario){
                   departamentoMaisValioso.id = departamento.id;
                   departamentoMaisValioso.nomeDepto = departamento.nomeDepto;
                   departamentoMaisValioso.inventario = departamento.inventario;
                   //departamentoMaisValioso = departamento;
                }
            }
            idDepto = listProducts[pos].departamento.idDepto;
            departamento.id = idDepto;
            departamento.nomeDepto = listProducts[pos].departamento.nomeDepto;
            departamento.inventario = listProductspos].qtdEstoque * listProducts[pos].preco;
       }
       else{  // manteve o departamento
            departamento.inventario = departamento.inventario + listProducts[pos].qtdEstoque * listProducts[pos].preco;
       }
    }
    //console.log(departamento);
    console.log("O departamento mais valioso é " + departamentoMaisValioso);
}



//fita dada Produto mais caro da loja (bem como seu departamento)
function excercicio10(){

}
// fita dada Produto mais barato da loja (bem como seu departamento)
function excercicio11(){
    
}
