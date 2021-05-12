# Planejamento de Sprint

Desafio hacker 


Contexto:
  Somos parte de uma equipe de desenvolvimento de software que está criando uma série de ferramentas para gestão de eCommerces. Neste sentido, precisamos atender algumas necessidades de gestores destas plataformas. Precisamos criar soluções para ajudar nossos gestores a extrair dados de inventários de seus respectivos estoques.


Sprints:
    Recursos:
    - Humanos:  Victoria e Professores da Gama
    - Ferramentas: Noteebok
    - Softwares: IDE (Visual Code Studio), NodeJS, MySQL

# Sprint 01 - Produto

  Desenvolver códigos em JavaScript para que os gestores possam ter acesso a dados básicos do estoque de produtos, quais são os produtos cadastrados, quais estão disponiveis e indisponiveis. 

  Estimativa: 2 dias
  Status da Sprint: Pendente


|                        Tarefa                           | Estimativa |  Início  |  Término  |    Status     |
|---------------------------------------------------------|------------|----------|-----------|---------------|
|Configuração do ambiente de desenvolvimento              |    3 hrs   | 10/05/21 | 10/05/21  |      DONE     |
|Planejar a Sprint das tarefas                            |    1 hrs   | 10/05/21 | 10/05/21  |      DONE     |
|Quantidade total de produtos                             |    2 hrs   | 10/05/21 | 10/05/21  |      DONE     |
|Listar todos os produtos                                 |    2 hrs   | 10/05/21 | 10/05/21  |      DONE     |
|Quantidade total de produtos disponíveis                 |    2 hrs   | 10/05/21 | 11/05/21  |      DONE     |
|Listar produtos disponíveis                              |    4 hrs   | 10/05/21 | 11/05/21  |      DONE     |
|Quantidade total produtos indisponíveis                  |    3 hrs   | 10/05/21 | 11/05/21  |      DONE     |
|Listar produtos indisponíveis                            |    4 hrs   | 10/05/21 | 11/05/21  |      DONE     |





# Sprint 02 - Produto, novos requisitos

  Novos requisitos surgiram, deverá ser desenvolvido novos códigos em JavaScript onde os gestores agora possam filtrar os produtos listando o mais caro e o mais barato junto de seu departamento, listar produtos em destaque e seu respectivo ticket médio (soma do valor dos produtos em destaque dividido pela quantidade de produtos em destaque).

  Estimativa: 2 dias
  Status da Sprint: Pendente

|                         Tarefa                          | Estimativa |  Início  |  Término  |    Status     |
|---------------------------------------------------------|------------|----------|-----------|---------------|
|Listar produto mais caro do estoque e seu departamento   |    3 hrs   | 11/05/21 | 12/05/21  |      DONE     |
|Listar produto mais barato do estoque e seu departamento |    3 hrs   | 11/05/21 | 12/05/21  |      DONE     |
|Quantidade de produtos em destaque                       |    2 hrs   | 12/05/21 | 13/05/21  |      DONE     |
|Listar produtos em destaque                              |    2 hrs   | 11/05/21 | 12/05/21  |      DONE     |
|Listar produtos disponíveis                              |    2 hrs   | 11/05/21 | 12/05/21  |      DONE     |
|Ticket médio dos produtos em destaque                    |    4 hrs   | 12/05/21 | 13/05/21  |      DONE     |
|Listar produtos indisponíveis                            |    3 hrs   | 12/05/21 | 13/05/21  |      DONE     |
|Realizar os primeiros testes                             |    4 hrs   | 12/05/21 | 13/05/21  |      DONE     |



# Sprint 03 - Empresa e valor.

  Validar os códigos em JavaScript para que os gestores possam interagir e verificar o valor do patrimônio de produtos contido no estoque podendo usar essa informação como forma de inventário, também será incluido o ticket médio dos produtos em estoque (soma do valor dos produtos em estoque dividido pela quantidade de produtos).
 
  Estimativa: 1 dia
  Status da Sprint: Pendente


|                         Tarefa                          | Estimativa |  Início  |  Término  |    Status     |
|---------------------------------------------------------|------------|----------|-----------|---------------|
|Valor do patrimônio em produtos no estoque (inventário)  |    3 hrs   | 15/05/21 | 15/05/21  |    PENDENTE   |
|Ticket médio do total de produtos em estoque             |    2 hrs   | 15/05/21 | 15/05/21  |    PENDENTE   |
|Realizar os testes                                       |    4 hrs   | 15/05/21 | 15/05/21  |    PENDENTE   |


# Sprint 04 - Departamentos

  Objetivo da Sprint: Os gestores agora querem poder ter um controle maior do estoque de acordo com os departamentos da empresa, deve ser desenvolvido novos códigos em Javascript para levantar dados referente aos produtos de determinado departamentos, como total de produtos de um departamento, poder mensurar o ticket médio do departamento e saber o departamento de maior valor agregado (somando o valor de todos os produtos de um departamento X a quantidade dos respectivos em estoque).

  Estimativa: 2 dias
  Status da Sprint: Pendente

|                         Tarefa                          | Estimativa |  Início  |  Término  |    Status     |
|---------------------------------------------------------|------------|----------|-----------|---------------|
|Quantidade total de produtos de um departamento          |    3 hrs   | 10/05/21 | 10/05/21  |    PENDENTE   |
|Listar quantidade total de produtos de um departamento   |    2 hrs   | 10/05/21 | 10/05/21  |    PENDENTE   |
|Levantar inventário de um departamento.	                |    2 hrs   | 10/05/21 | 10/05/21  |    PENDENTE   |
|Ticket médio do total de produtos de um departamento.   	|    2 hrs   | 10/05/21 | 10/05/21  |    PENDENTE   |
|Descobrir departamento mais valioso.	                    |    2 hrs   | 10/05/21 | 10/05/21  |    PENDENTE   |
|Listar produto mais caro de um departamento	            |    2 hrs   | 10/05/21 | 10/05/21  |    PENDENTE   |
|Listar produto mais barato de um departamento            |    2 hrs   | 10/05/21 | 10/05/21  |    PENDENTE   |



# Sprint 05 - Banco de dados

  Todos os demais cuidados foram realizados agora nessa ultima sprint vamos nos ater aos detalhes para o projeto ficar completo e podermos realizar a entrega ao cliente.
  
   - Será desenvolvido um banco de dados para armazenar a estrutura do estoque(produto / departamentos)
    
   - Deve-se também fazer a modelagem de dados dos clientes da empresa (com os seguintes dados obrigatórios: nome, email, whatsapp e senha. E seus endereços que podem ser 1 ou mais com os seguintes dados obrigatórios: Tipo do logradouro, logradouro, número, complemento, cep, bairro, cidade e estado)
    
   - A modelagem dos dados de pedidos onde deve-se conter dados mínimos como: número pedido, valor total do pedido, data compra, produtos comprados, quantidade, valor unitátio, valor total do produto X quantidade e status dos pedidos (novo pedido, cancelado, aguardando pagamento, pagamento autorizado, pagamento negado, em separação, em transporte, entregue.
    
   - Fazer a relação entre clientes e pedidos
   
   - Realizar dumps específicos do banco de dados.

  Estimativa: 4 dias
  Status da Sprint: Pendente

|                         Tarefa                          | Estimativa |  Início  |  Término  |    Status     |
|---------------------------------------------------------|------------|----------|-----------|---------------|
|Modelar dados de produtos e departamentos	              |    2 hrs   | 17/05/21 | 18/05/21  |    PENDENTE   |
|Criar relações entre produtos e departamentos	          |    2 hrs   | 17/05/21 | 18/05/21  |    PENDENTE   |
|Modelar dados de clientes                              	|    2 hrs   | 17/05/21 | 18/05/21  |    PENDENTE   |
|Modelar dados de pedidos                                 |    2 hrs   | 17/05/21 | 18/05/21  |    PENDENTE   |
|Criar relações entre clientes e pedidos	                |    2 hrs   | 19/05/21 | 19/05/21  |    PENDENTE   |
|Popular banco	                                          |    5 hrs   | 19/05/21 | 19/05/21  |    PENDENTE   |
|Realizar dumps do banco de dados                         |    4 hrs   | 19/05/21 | 19/05/21  |    PENDENTE   |
|Realizar os testes                                       |    4 hrs   | 20/05/21 | 20/05/21  |    PENDENTE   |
|Entregar do projeto                                      |    15 min  | 20/05/21 | 20/05/21  |    PENDENTE   |
