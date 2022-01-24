/*1.Get all the users who created in the last 15 days.*/
select u1.id from user u1 where datediff(current_date(),u1.registeredAt)<15;
select *from user;
/*Get all the users with their addresses who are active subscribers.*/
select customerId from subscriber where active=1;
/*
Get all the users who subscribed in the last 30 days and are active currently.*/
select customerId from subscriber where datediff(current_date(),createdAt)<30 and active=1;
/*
Get all the users email who are currently in the active mailing list.*/
select s.email from subscriber s join mailing_list m on s.id=m.subscriberId where m.active=1;
/*Get all the users email and newsletter title for which newsletter triggered today.
 */
 select s.email,n.title from 
subscriber s join newsletter_trigger t on s.id = t.subscriberId
join newsletter n on n.id=t.newsletterId
where t.sentAt=current_date();
