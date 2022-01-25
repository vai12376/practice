
/* 3.	List of all menus with its menu items.*/
select m.title,i.title from menu m join menu_item mt on m.id=mt.menuId join item i on mt.itemId=i.id;