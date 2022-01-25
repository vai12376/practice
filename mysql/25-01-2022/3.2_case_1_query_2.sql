/* Question 2: Write an SQL query to report the device that is first logged in for each player.Return the result table in any order.

The query result format is in the following example.

Output: 
+-----------+-----------+
| player_id | device_id |
+-----------+-----------+
| 1         | 2         |
| 2         | 3         |
| 3         | 1         |
+-----------+-----------+
*/

select a.playerId,a.deviceId from (select *  from activity order by eventDate) a group by a.playerId;