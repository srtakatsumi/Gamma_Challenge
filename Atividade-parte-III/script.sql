use bancodedados;

-- Informa o total de clientes
select count(id) AS TOTALCLIENTE from bancodedados.pessoas;

-- Valor total por departamento
select sum(products.price), departament.nameDept
from products
inner join departament
on products.idDepartment = departament.idDept
group by departament.id;

-- Valor total de estoque por departamento
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

--  Exibe lista de cliente com o endereço e cidade
SELECT * from pessoas
inner join address
on pessoas.id = address.idcliente
inner join city
on address.city = city.idcity;



