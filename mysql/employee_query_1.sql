/*Get the users which are having permission id assigned as 2.*/
select id from user where roleid in (select id from role_permission where permissionId=2);

/*Get a list of users who are working in organization id 1 along with organization title..*/
select o.title,e.userId from employee e join organization o on e.organizationId=o.id where e.organizationId=1;

/*Get all the employee emails who are created in the last two dates and have permission id 1.*/
select userId from employee where datediff(current_date()-createdAt<=2) and roleId in (select id from role_permission where permissionId=1);
select e.userId from employee e join role_permission r on e.roleId = r.id where r.permissionId=1 and datediff(current_date()-createdAt<=2);

/*Get the active count of employees working in organization id 1.*/
select id from employee where status = 1 and organizationId=1;

/*Get all the employee emails who were working last year. */
select u.email from user u join employee e on u.id = e.userId where year(endsAt)=year(current_date())-1;

