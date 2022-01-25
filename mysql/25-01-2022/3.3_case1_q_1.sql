/* 1.	Total income of Restaurant till now.*/

select sum(total)-sum(tax)-sum(shipping)-sum(itemDiscount) as income from orders;