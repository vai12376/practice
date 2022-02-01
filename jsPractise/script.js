
const a=new Array();
var form = document.getElementById('form1');  
form.addEventListener("submit",function (event){

    event.preventDefault();

    var nm= document.getElementById('name').value;
    var em=document.getElementById('email').value;
    var ps= document.getElementById('psw').value;
    var dt= document.getElementById('dob').value;

    let obj = {name:nm,email:em,password:ps,dateofbirth:dt};

    var res=JSON.parse(localStorage.getItem('users'));

    if(res){
    res.push(obj);
    localStorage.setItem('users',JSON.stringify(res));
    }
    else{
        a.push(obj);
        localStorage.setItem('users',JSON.stringify(a));
    }

 
for (i in res){
    
    document.getElementById('data').innerHTML+=res[i].name+"&nbsp&nbsp";
    document.getElementById('data').innerHTML+=res[i].email+"&nbsp&nbsp";
    document.getElementById('data').innerHTML+=res[i].password+"&nbsp&nbsp";
    document.getElementById('data').innerHTML+=res[i].dateofbirth+"&nbsp&nbsp";
    document.getElementById('data').innerHTML+=countAge(res[i].dateofbirth);
    document.getElementById('data').innerHTML+="<input type='button' id='edit' value='edit' onclick='update(i)'></input>&nbsp&nbsp"; 
    document.getElementById('data').innerHTML+="<input type='button' id='delete' value='delete' onclick='delete()'></input><br>";

}
});



function update(i){
    
    var res=JSON.parse(localStorage.getItem('users'));
    var edit=document.getElementById("edit");
    console.log(i);

    var nm= document.getElementById('name');
    var em=document.getElementById('email');
    var ps= document.getElementById('psw');
    var dt= document.getElementById('dob');
    var submit_button = document.getElementById('submit_button');
    
    nm.value=res[i].name;
    em.value=res[i].email;
    ps.value=res[i].password;
    dt.value=res[i].dateofbirth;
    submit_button.value="update user";

    submit_button.addEventListener(onclick,function(){
        var nm= document.getElementById('name');
        var em=document.getElementById('email');
        var ps= document.getElementById('psw');
        var dt= document.getElementById('dob');

        var new_obj= {name:nm,email:em,password:ps,dateofbirth:dt};
        res[i]=new_obj;

        localStorage.setItem('users',JSON.stringify(res));
    });



}

function Delete(i){
    var res=JSON.parse(localStorage.getItem('users'));

    res.remove(res[i]);

    localStorage.setItem('users',JSON.stringify(res));

}

    


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
