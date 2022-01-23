/* 
Write an SQL query to report the nth highest salary from the Employee 
table. If there is no nth highest salary, the query should report null. The 
query result format is in the following example.
SQL Schema
Table: Employee
+-------------+------+
| Column Name | Type |
+-------------+------+
| id | int |
| salary | int |
+-------------+------+
id is the primary key column for this table.
Each row of this table contains information about the salary of an 
employee.
*/

select s2.salary from (select s1.salary,dense_rank() over(order by s1.salary desc) as d from sal s1) s2 where d=2;