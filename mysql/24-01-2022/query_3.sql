/* 3.	Write an SQL query to swap all 'f' and 'm' values (i.e., change all 'f' values to 'm' and vice versa) with a single update statement and 
no intermediate temporary tables.
Note that you must write a single update statement, do not write any select statement for this problem.*/

UPDATE salary SET SEX = (CASE WHEN SEX ='m' THEN 'f'
WHEN SEX = 'f' THEN 'm'
END );