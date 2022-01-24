/* 5.	Write an SQL query to report all customers who never order anything.Return the result table in any order.*/

create table customer (id int primary key,name varchar(32));
create table orders (id int primary key,
customerId int, 
foreign key(customerId) references customer(id));

select name from customer where id not in (select customerId from orders);