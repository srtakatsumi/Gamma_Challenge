use bancodedados;

-- Informa o total de clientes
select count(id) AS TOTALCLIENTE from bancodedados.pessoas;

-- Valor total por departamento
select sum(products.price), departament.nameDept
from products
inner join departament
on products.idDepartment = departament.idDept
group by departament.idDept;

-- Valor total de itens por departamento
select count(products.codProduct), departament.nameDept
from products
inner join departament
on products.idDepartment = departament.idDept
group by departament.idDept;

-- Calcula o valor total do estoque
select SUM(price*stockQuantity) AS PRECOTOTAL from bancodedados.products;

-- Quantidade de produtos em destaque
SELECT * FROM products
where products.highlighted = 0;

--  Soma de preços de produtos em destaque por departamento
SELECT SUM(products.price) , departament.nameDept
from products 
inner join departament
on products.idDepartment = departament.idDept
where products.highlighted = 1
group by departament.nameDept;

-- Exibe clientes, endereço e total da compra
SELECT pessoas.nome, address.typePublicPlace,address.publicPlace, sum(totalorders.price) from pessoas
inner join requests
on pessoas.id = requests.idClient
inner join totalorders
on totalorders.idClient = requests.idClient
inner join address
on address.idCliente = pessoas.endereco
group by pessoas.id;

-- Mostra o nome, cpf, e-mail e senha
select pessoas.nome,pessoas.CPF,pessoas.email,pessoas.senha from bancodedados.pessoas ;

-- Exibe produtos vendidos
SELECT totalorders.date,totalorders.idProductOrder, sum(totalorders.price) from products
inner join products
on products.codProduto = totalorders.idProductOrder
group by products.codProduto;
