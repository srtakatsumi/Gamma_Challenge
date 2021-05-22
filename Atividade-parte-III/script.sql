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

-- Exibe clientes, endereço e cidade
SELECT * from pessoas
inner join address
on pessoas.id = address.idcliente
inner join city
on address.city = city.idcity;

--  errada MUDAR lista de cliente com o endereço e cidade
SELECT sum(requests.statusPedido) 
from pessoas
inner join requests
on pessoas.id = requests.idClient
inner join status
on status.statusPedido = requests.statusPedido
group by requests.statusPedido;

-- errado
select pessoas.id, pessoas.nome from pessoas
inner join requests
on pessoas.id = requests.idClient
inner join status
on status.statusPedido = requests.statusPedido
group by requests.statusPedido;

-- errada
select pessoas.nome,pessoas.CPF,pessoas.phone, sum(totalorders.price) as valortotal,
address.typePublicPlace, address.publicPlace, address.zipCode, address.city,city.state, city.district from pessoas
inner join pessoas
on pessoas.id = address.idcliente
group by pessoas.id;

-- Mostra o nome, cpf, e-mail e senha
select pessoas.nome,pessoas.CPF,pessoas.email,pessoas.senha from bancodedados.pessoas ;
