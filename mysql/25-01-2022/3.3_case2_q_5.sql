/* 5.	List out all the users whose email provider is not google.*/


select userId from user where email not like '%gmail.com';