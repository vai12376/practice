/* 8.	Write an SQL query to report the first name, last name, city, and state of each person in the Person table. 
If the address of a personId is not present in the Address table, report null instead. Return the result table in any order.*/

create table person (id int primary key, firstName varchar(32),lastName varchar(32));
create table address (id int primary key,personId int,city varchar(32),state varchar(32),foreign key(personId) references person(id));

select p.firstName,p.lastname,a.city,a.state from person p left join address a on p.id=a.personId;