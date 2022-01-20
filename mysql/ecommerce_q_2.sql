select * from category where Id in (select parentId from category);

select productId from product_review group by productId having count(*)>2; 

SELECT productId FROM product_category group by productId having count(categoryId) > 1;

select Id from product where quantity between 20 and 30;

select id from product where price between 50 and 100;

select id from product order by createdAt;

select sum(subTotal) from ordertable;

select sum(discount) from ordertable;

select count(userId) from ordertable where userId=201;






