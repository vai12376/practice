/* 
2.	List out all the categories which is having multiple poll questions under it.*/

select categoryId,count(pollId) as count from  poll_category group by categoryId having count>1;
