use custmer;
create table find_dup(id tinyint primary key,email  varchar(32),content text);
insert into find_dup values (1,"abc@gmail.com","zeroth entry"),(2,"rbc@gmail.com","first entry"),(3,"abc@gmail.com","second entry");

select email,count(id) from find_dup group by email having count(id)>1;

