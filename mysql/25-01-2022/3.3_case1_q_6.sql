
/* 6.	Make a list of each user and the highest-priced menu item he or she ordered. */
select o.userId,max(i.price) from orders o join order_item ot on o.id=ot.orderId join item i on ot.itemId=i.id group by o.userId;