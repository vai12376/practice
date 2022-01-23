use custmer;
create table weather (id int primary key,recordDate date,temprature int); 
insert into weather values (1,"2015-01-01",10),(2,"2015-01-02",25),(3,"2015-01-03",20),(4,"2015-01-04",30);
select w1.id from weather w1 where w1.temprature> (select w2.temprature from weather w2 where datediff(w2.recordDate,w1.recordDate)=-1);

select t1.id from weather t1 where 1 = (select count(t2.temprature) from weather t2 where (datediff(t2.recordDate,t1.recordDate)=-1) and t1.temprature>t2.temprature);