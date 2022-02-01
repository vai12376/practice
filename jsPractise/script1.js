
        var res = JSON.parse(localStorage.getItem('1'));

        var count1=0;
        var count2=0;
        var count3=0;

        for(i in res){
            if(18>countAge(res[i].dateofbirth)){
                count1++;
            }
            else if(18<countAge(res[i].dateofbirth)<50){
                count2++;
            }
            else{
                count3++;
            }


            var dt=new Date(res[i].dateofbirth);
            var date_today = new Date();
            if(dt-date_today==0){
                console.log("here");
                document.getElementById('bday').innerHTML="to day is"+res[i].name+"birthday";
            }
        }
        
        document.getElementById('b1').innerHTML=count1;
        document.getElementById('b2').innerHTML=count2;
        document.getElementById('b3').innerHTML=count3;
        
        function countAge(dob){

            var dob = new Date(dob);  

            //calculate month difference from current date in time  
            var month_diff = Date.now() - dob.getTime();  
 
            //convert the calculated difference in date format  
            var age_dt = new Date(month_diff);   
 
            //extract year from date      
            var year = age_dt.getUTCFullYear();  
 
            //now calculate the age of the user  
            var age = Math.abs(year - 1970); 

            return age;

        };