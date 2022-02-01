
let form = document.getElementById('login_form');
let login_button= document.getElementById('login_button');
login_button.addEventListener("click",function(){
    var email= document.getElementById('email').value;
    var password=document.getElementById('psw').value;

    if(email=="v@gmail.com" && password=="tre"){
            
        console.log(email);
        window.location.href='sub_user.html';
    }

})
      /*  function check(){
           var email= document.getElementById('email').value;
           var password=document.getElementById('psw').value;

            var em = localStorage['email'];
            var ps = localStorage['password'];

           if(email==em){
               if(password==ps){
                   location.href="/dashboard.html";
               }
           }

           var res= JSON.parse(localStorage.getItem('1'));
           if(email=="v@gmail.com" || password=="tre"){
            
                console.log('here');
                window.location.href='/sub_user.html';
            }
        

           
        } */
