/*Get all the categories which are having at least one sub category
Get all the products which are having price between 50 to 100
Get all the products sorted based on created date
Get total sub total of all the orders
Get total discount applied in all the orders
Get data of particular user that how many orders they are having 
get the list of product ids which are having multiple categories.
Get all the product ids which is having more than 2 reviews
Get all the products which are updated in last 2 hours
Get products which is having qty between 20 to 30 */

select * from category where Id in (select parentId from category);

select productId from product_review group by productId having count(*)>2; 

SELECT productId FROM product_category group by productId having count(categoryId) > 1;

select Id from product where quantity between 20 and 30;

select id from product where price between 50 and 100;

select id from product order by createdAt;

select sum(subTotal) from ordertable;

select sum(discount) from ordertable;

select count(userId) from ordertable where userId=201;






