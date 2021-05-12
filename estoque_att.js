function converToCurrency(value){
    //Currency serve para
    //estrutura de função reaproveitavel
    //intl.NumberFormat é um construtor para objetos que habilita formatação de número sensível a linguagem
    //tranformar o valor em real informando o pt-BR
    // style vai ser passado como currency
    //e passar o currency para BRL 
    return Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL' }).format(value)

}
//objeto literal
const Produto =
    {
        idProduto : 1,

        name : "Computador Dell Inspiron XS 12000 8Gb RAM 1 TB HD Intel i5 4g NVidia 1080",
//preço do produto
        price: 3500,
//desconto
        discount: 5,

        qtdEstoque : 5,
        disponivel: "sim",
        emDestaque: "sim",
        departamento : {
            idDepart : 956,
            nomeDepart : "Tecnologia"
        },
//descrição do produto
        description : {
            //o que é uma features?
            features : "Computador com otimo custo beneficio"
        },


        //Função do tipo anonima
        //Calcular o desconto em relação ao preço
        getDiscount : function(){
            return (this.price * this.discount) / 100   //this é uma palavra reservada do js que referencia ele mesmo
        },
        //Preço final preço - desconto 
        getFinalPrice:function(){
            return converToCurrency(this.price - this.getDiscount())
        },
        //esta caralha percorre a lista
        //for(i =0; i < listaProdutos.length; i++){
            //let produto = listaProdutos[i];
            //console.log(produto.name)
        //}

        // esta poha 
         //let total = 0;
        //for(i =0; i < listaProdutos.length; i++){
            //let produto = listaProdutos[i];
            //console.log(produto.name)
        //}
        
    } 
    //Quantidade total de itens em estoque (somatória das quantidades de todos os produtos)
    const newProduto = Produto.map((qtdEstoque) => {
        Produto.qtdEstoque ++;
        return Produto;})

//Quantidade total de itens em destaque (somatória das quantidades dos itens marcados como "emDestaque : sim")
    function FeaturedProducts(Produto) {
        let quant = 0;
        for (Produto of Produto) {
            if (Produto.emDestaque == "sim") {
                quant++;
            }
        }
//Quantidade total de itens disponíveis (similar ao anterior)
        function FeaturedProducts(Produto) {
            let quant = 0;
            for (Produto of Produto) {
                if (Produto.disponivel == "sim") {
                    quant++;
                }
            }
//Valor total do inventário da empresa (somatória dos valores individuais multiplicado pela quantidade em estoque)
        valorDepart(departamento);{
            if (departamento === departamento){
                return `O valor por ${departamento} é de ${qtdEstoque}`;
            } 
        }

// Somatória de itens por departamento (você deverá retornar um objeto contendo o nome do departamento e o total de itens nele)
            console.log(qtdEstoque);
// Valor total do inventário por departamento (similar ao item anterior)
            console.log(qtdEstoque);
//Valor do ticket médio dos produtos da empresa (basicamente o valor total do inventário dividido pelo número de itens)   
            var total = ((qtdEstoque*price)/qtdEstoque)
            {
                return total;
            }
        
        }
            
//Ticket médio por departamento (similar ao item anterior, porém retornando uma lista de objetos que contenha o nome do departamento e o seu ticket médio)  
// Departamento mais valioso (qual o departamento que tem a maior somatória dos valores dos itens)

        var valioso = (price){
            if (price > price){
                return `O produto mais valioso é ${produto._name} `;
            } 

        }
//Produto mais caro da loja (bem como seu departamento)
        var caro = (price){
            if (price > price){
                return `O produto mais caro é ${produto._name} `;
            } 

        }
//Produto mais barato da loja (bem como seu departamento)
        var caro = (price){
            if (price < price){
                return `O produto mais barato é ${produto._name} `;
            } 

        }
    }


module.exports = Produto
