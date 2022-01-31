/* 7.	List out all the users who did not answer any poll yet.*/

select u.userId from user u left join poll_vote v on u.userId = v.userId where u.userId!=v.userId;