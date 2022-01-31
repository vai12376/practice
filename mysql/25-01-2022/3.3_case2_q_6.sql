/* 6.	List out all the polls which are published in 2021.*/

select Id from poll where year(publishedAt)=2021;