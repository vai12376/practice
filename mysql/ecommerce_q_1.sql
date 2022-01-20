create database ecommerce;
use ecommerce;
create table product (
	id bigint(20) primary key,
    title varchar(75),
    metaTitle varchar(100),
    slug varchar(100),
    summary tinytext,
    type smallint,
    sku varchar(100),
    price float,
    discount float,
    quantity smallint,
    shop tinyint(1),
    createdAt datetime,
    updatedAt datetime,
    publishedAt datetime,
    startsAt datetime,
    endsAt datetime,
    content text
);
alter table product 
add unique key (sku);
create table product_review(
	id bigint(20) primary key,
    productId bigint(20),
    parentId bigint(20),
    title varchar(100),
    rating smallint(6),
    published tinyint(1),
    createdAt datetime,
    publishedAt datetime,
    content text,
    foreign key(productId) references product(id),
    foreign key(parentId) references product_review(id)
);
create table category(
	id bigint(20) primary key,
    parentId bigint(20),
    title varchar(75),
    metaTitle varchar(100),
    slug varchar(100),
    content text,
    foreign key(parentId) references category(id)
);
create table product_category(
productId bigint(20),
categoryId bigint(20),
foreign key(productId) references product(id),
foreign key(categoryId) references category(id)
);
create table product_meta(
	id bigint(20) primary key,
    productId bigint(20),
    pkey varchar(50),
    content text,
    foreign key(productId) references product(id)
);
create table tag (
	id bigint(20) primary key,
    title varchar(75),
    metaTitle varchar(100),
    slug varchar(100),
    content text
);
create table product_tag(
	productId bigint(20),
    tagId bigint(20),
    foreign key(productId) references product(id),
    foreign key(tagId) references tag(id)
);
create table user (
	id bigint(20) primary key,
    firstName varchar(50),
    middleName varchar(50),
    lastName varchar(50),
    mobile varchar(15),
    email varchar(50),
    passwordHash varchar(32),
    admin tinyint(1),
    vender tinyint(1),
    registeredAt datetime,
    lastLogin datetime,
    intro tinyint,
    profile text
);

create table cart (
	id bigint(20) primary key,
    userId bigint(20),
    sessionId varchar(100),
    token varchar(100),
    status smallint(6),
    firstName varchar(50),
    middleName varchar(50),
    lastName varchar(50),
    mobile varchar(15),
    email varchar(50),
    line1 varchar(50),
    line2 varchar(50),
    city varchar(50),
    province varchar(50),
    country varchar(50),
    createdAt datetime,
    updatedAt datetime,
    content text,
    foreign key(userId) references user(id)
);
create table cart_item(
	id bigint(20) primary key,
    productId bigint(20),
    cartId bigint(20),
    sku varchar(100),
    price float,
    dicount float,
    quantity smallint(6),
    active tinyint(1),
    createdAt datetime,
    updatedAt datetime,
    content text,
    foreign key(productId) references product(id),
    foreign key(cartId) references cart(id)
);

create table ordertable(
	id bigint primary key,
    userId bigint,
    sessioId varchar(128),
    token varchar(128),
    status smallint,
    subTotal float,
    itemDiscount float,
    tax float,
    shipping float,
    total float,
    promo varchar(64),
    discount float,
    grandToatl float,
    firstName varchar(64),
    middleName varchar(64),
    lastName varchar(64),
    mobile varchar(16),
    email varchar(64),
    line1 varchar(64),
    line2 varchar(64),
    city varchar(64),
    province varchar(64),
    country varchar(64),
    createdAt datetime,
    updatedAt datetime,
    content text,
    foreign key(userId) references user(id)
);

create table order_item (
	id bigint primary key,
    productId bigint,
    orderId bigint,
    sku varchar(128) unique key,
    price float,
    discount float,
    quantity smallint,
    createdAt datetime,
    updatedAt datetime,
    content text,
    foreign key(productId) references product(id),
    foreign key(orderId) references ordertable(id)
);
create table transaction_table (
	id bigint primary key,
    userId bigint,
    orderId bigint,
    code varchar(128),
    type smallint,
    mode smallint,
    status smallint,
    createdAt datetime,
    updatedAt datetime,
    content text,
    foreign key(userId) references user(id) on delete cascade,
    foreign key(orderId) references ordertable(id) on delete cascade
);
