/* 9.	List out user along with the average amount spend at the restaurant*/
select avg(grandTotal) from orders group by userId;