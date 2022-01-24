/*1.	Create a database structure for employee leave application.
 It should include all the employee's information as well as their leave information. */


create database emp;
use emp;
create table employee(
id bigint,
firstName varchar(64),
lastname varchar(64),
email varchar(64),
mobile varchar(64),
primary key(id));
create table emp_leave(
leaveId bigint,
employeeId bigint,
reason text,
startsAt datetime,
endsAt datetime,
primary key(leaveId),
foreign key(employeeId) references employee(id)
);