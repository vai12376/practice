import java.io.*;
import java.util.*;

public class linkedlist{
node head;

static class node{
	int data;
	node next;
	
	node(int d){
		data=d;
		next=null;
	}
	
}
 
public static linkedlist insert(linkedlist list,int element){
	node new_node = new node(element);
	if(list.head==null){
		list.head=new_node;
	}
	else{
		node last=list.head;

		while(last.next!=null){
			last=last.next;
		}

		last.next=new_node;
	}

return list;
}
public static void printlist(linkedlist list){
	node cur_node=list.head;

	while(cur_node!=null){
		System.out.println(cur_node.data);
		cur_node=cur_node.next;
	}

}
public static void main(String args[]){
	linkedlist list = new linkedlist();
	int e=1;

	while(e!=0){
	Scanner sc = new Scanner(System.in);
	e = sc.nextInt();
	list.insert(list,e);
	}

	list.printlist(list);
}

}
