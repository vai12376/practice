select title from (product inner join product_category on product.id=product_category.productId) where categoryId=101; 

select count(type) from (product p inner join product_category c on p.id=c.productId) where categoryId=102 and type=0;

select c.title from (category c inner join product_category p on c.id=p.categoryId) where productId=201;

select t.title from (tag t inner join product_tag p on t.id=p.tagId) where productId=201;

select r.title,p.title from (product_review r inner join product p on r.productId=p.id) where type=1;

select p.id,p.title from (product p inner join order_item o on p.id=o.productId);

select product.id,product.title,count(quantity) from order_item FULL join product on order_item.productId=product.id;

select sum(subTotal) from ordertable where userId=201;

select id,userId from ordertable order by userId;

select id from ordertable where createdAt="2011-01-19";

select p.title from (order_item o inner join product p on o.productId=p.id) where o.orderId=301;

select id from ordertable where userId=201 and discount>100;