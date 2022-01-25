
/*2.customer who visited the restaurant more than twice.*/

select distinct s.userId from (select userId, count(userId) as c from orders group by userId) s where s.c>2;