public class binarysearch {
    public static int  Binarysearch(int a[],int low,int high,int e,int res[]){
        
        int mid = (low+high)/2;
        while(low<high){
        if(a[mid]==e){
           int i=mid-1; 
           while(a[i]==e){
                i--;
           }
           int start=i+1;
           int j=mid+1;
           while(a[j]==e){
               j++;
           }
           int last=j-1;
           res[0]=start;
           res[1]=last;
           return 0; 
        }
        else if(a[mid]<e){
            return Binarysearch(a,mid+1,high,e,res);
        }
        else{
            return Binarysearch(a,low,mid-1,e,res);
        }}
        res[0]=-1;
        res[1]=-1;
        return 0;
    }
    public static void main(String args[]){
        int res[] = new int[2];
        int a[]={2,3,3,5,6};
        Binarysearch(a,0,4,1,res);
        System.out.println(res[0]+" "+res[1]);

    }
}
