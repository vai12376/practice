/* 4.	List out all the users who is not logged in since last week.*/

select userId from user where lastLogin not between date_sub(now(),interval 1 week) and now();
