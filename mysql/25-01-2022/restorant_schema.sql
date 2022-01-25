create database restorant;
use restorant;
use mydbms;
drop table user;
create table user (
id bigint,
firstName varchar(64),
middleName varchar(64),
lastName varchar(64),
mobile varchar(32),
email varchar(32),
passwordHash varchar(32),
admin tinyint,
vender tinyint,
chef tinyint,
agent tinyint,
registeredAt datetime,
lastLogin datetime,
intro tinytext,
profile text,
primary key (id)
);
create index idx on user(vender);
create index idx1 on user(chef);
create table item (
id bigint,
userId bigint,
venderId tinyint,
title varchar(32),
slug varchar(64),
summary tinytext,
type smallint,
cooking tinyint,
sku varchar(32),
price float,
quantity float,
unit smallint,
recipe text,
instruction text,
createdAt datetime,
updatedAt datetime,
content text,
primary key(id),
foreign key (userId) references user(id),
foreign key(venderId) references user(vender)
);
create table menu(
id bigint,
userId bigint,
title varchar(32),
slug varchar(32),
summary tinytext,
type smallint,
createdAt datetime,
updatedAt datetime,
content text,
primary key(id),
foreign key(userId) references user(id)
);

create table menu_item (
id bigint primary key,
menuId bigint,
itemId bigint,
active tinyint,
foreign key(menuId) references menu(id),
foreign key(itemId) references item(id)
);
create table item_chef(
id bigint,
itemId bigint,
chefId tinyint,
active tinyint,
primary key(id),
foreign key(itemId) references item(id),
foreign key(chefId) references user(chef)
);
CREATE TABLE ingredient (
  id INT NOT NULL,
  userId bigint NULL,
  venderId TINYINT NULL,
  title VARCHAR(45) NULL,
  slug VARCHAR(45) NULL,
  summary TINYTEXT NULL,
  type SMALLINT NULL,
  sku VARCHAR(45) NULL,
  quantity FLOAT NULL,
  unit SMALLINT NULL,
  createdAt DATETIME NULL,
  updatedAt DATETIME NULL,
  content TEXT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT fk1 FOREIGN KEY (userId) REFERENCES user(id),
  CONSTRAINT fk2 FOREIGN KEY (venderId) REFERENCES user(vender)
);

create table recipe(
id bigint primary key,
itemId bigint,
ingredientId int,
quantity float,
unit smallint,
instructions text,
foreign key(itemId) references item(id),
foreign key(ingredientId) references ingredient(id)
);
create table orders(
id bigint primary key,
userId bigint,
venderId tinyint,
token varchar(32),
statusw smallint,
subtotal float,
itemDiscount float,
tax float,
shipping float,
total float,
promo varchar(32),
discount float,
grandTotal float,
createdAt datetime,
updatedAt datetime,
content text,
foreign key(userId) references user(id),
foreign key(venderId) references user(vender)
);

create table order_item (
id bigint primary key,
orderId bigint,
itemId bigint,
price float,
quantity float,
createdAt datetime,
foreign key(orderId) references orders(id),
foreign key(itemId) references item(Id)
)