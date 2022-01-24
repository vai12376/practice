/* 4.	Write an SQL query to delete all the duplicate emails, keeping only one unique email with the smallest id.
 Return the result table in any order.*/

create table person (id int primary key, email varchar(32));

delete p1 from person p1 join person p2 on p1.email=p2.email where p1.id!=p2.id and p1.id>p2.id;
