
/* 
5.	List out total order placed by each User. */
select userId,count(id) from orders group by userId;