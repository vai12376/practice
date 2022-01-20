create table department (id int primary key,dept_name varchar(32));
create table employee (id int primary key auto_increment,name varchar(32),salary int,departmentId int,foreign key(departmentId) references department(id));
insert into department values (1,"it"),(2,"sales");
insert into employee values (1,"joe","85000",1);
insert into employee (name,salary,departmentId) values ("henry","80000",2),("sam","60000",2),("max","90000",1),("janet","69000",1),("randy","85000",1),("will","70000",1);
use custmer;

select d.dept_name, e1.name, e1.Salary
from employee e1 
join Department d
on e1.DepartmentId = d.Id
where 3 > (select count(distinct(e2.Salary)) 
                  from Employee e2 
                  where e2.Salary > e1.Salary 
                  and e1.departmentId = e2.departmentId
                  );

