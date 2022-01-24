/* 
6.	Write an SQL query to create index on the email column.
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
*/
create table email (id int,email varchar(32));
create index index_email on email(email);
