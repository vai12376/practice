/* 2.	Write an SQL query to report the movies with an odd-numbered ID and a description that is not "boring". 
Return the result table ordered by rating in descending order.*/

create table cinema (
	id int,
    moive varchar(64),
    description varchar(128),
    rating float(2,1),
    primary key(id)
);

select * from cinema where mod(id,2)!=0 and description!="boring" order by rating desc;
