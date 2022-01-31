 /*1.	List out all questions with it’s answer which is having maximum vote.*/
 select questionId, answerId from 
		poll_vote where questionId in (select questionId,s.max(count) from 
				(select questionId ,count(userId) as count from 
						poll_vote group by questionId) s);
