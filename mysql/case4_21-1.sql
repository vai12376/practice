/*Write an SQL query to find all numbers that appear at least three times 
consecutively. Return the result table in any order. The query result 
format is in the following example.
SQL Schema
Table: Logs
+-------------+---------+
| Column Name | Type |
+-------------+---------+
| id | int |
| num | varchar |
+-------------+---------+ 
id is the primary key for this table.*/

select l1.num as consecutivenum from logs l1 ,logs l2, logs l3 where l1.id=l2.id-1 and l2.id=l3.id-1 and l1.num=l2.num and l2.num=l3.num;