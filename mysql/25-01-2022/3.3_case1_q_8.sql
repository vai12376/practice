
/* 8.	Retrieve the amount of subtotal for all day on 9th November 2021. (It does not include the total, formula: item price * ordered qty).*/
select sum(s.pq) as subtotal_fortheday from (select itemId,(price * quantity) as pq from order_item where createdAt="2021-11-09") s;