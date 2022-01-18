create database amazon;
use amazon;
create table customer 
(
	customer_id int not null primary key ,
    customer_name varchar(10) not null,
    customer_email varchar(20)
    
);
create table customerAddress (
	customer_id int not null,
    address_1 varchar(30),
    address_2 varchar(30),
	foreign key(customer_id) references customer(customer_id)
);

create table category(
category_id int not null primary key,
category_name varchar(10) unique
);
create table product (
product_id int not null primary key,
product_name varchar(10),
product_price float,
product_rating char(1)
);
create table product_category(
	product_id int,
    category_id int,
    foreign key(product_id) references product(product_id),
    foreign key(category_id) references category(category_id)
);


