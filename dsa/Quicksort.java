import java.util.Scanner;

class Quicksort{
    public static void quicksort(int a[],int l,int r){
        if(l<r){
            int p = partition(a,l,r);
            quicksort(a, l, p-1);
            quicksort(a,p+1,r);
        }
       

    }
    public static int partition(int a[],int l,int r){
        int j=-1;
        int last=a[r];
        for(int i=0;i<a.length;i++){
            if(last>a[i]){
                j++;
                int temp=a[j];
                a[j]=a[i];
                a[i]=temp;
            }
        }
        int temp=a[j+1];
        a[j+1]=last;
        a[r]=temp;
        return j+1;
    }
        public static void main(String args[]){
        
        
        Scanner sc = new Scanner(System.in);
        System.out.println("enter size of array");
	int n = sc.nextInt();
        int a[] = new int[n];
        for(int i=0;i<n;i++){
            a[i]=sc.nextInt();
        }
        quicksort(a,0,n-1);
        for(int i=0;i<n;i++){
            System.out.print(a[i]+" ");
        }
}
}