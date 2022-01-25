
/* 7.	Retrieve the name of a chef who prepares more recipes than any other chef.*/
select u.firstName from user u join  (select s.chefId,max(s.i) from (select chefId,count(distinct itemId) i from item_chef group by chefId) s) c on u.userId=c.chefId;
/* 