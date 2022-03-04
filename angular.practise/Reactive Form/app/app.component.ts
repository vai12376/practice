import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from './model/fom.validators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fb:FormBuilder){

  }
  //using form builder
  profileForm =this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(5)]],
    lastName:[''],
    address:this.fb.group({
      city:[''],
      street:['']
    })
  })
  //using formgroup
 form = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(5),
      FormValidators.canNotContainSpace,
    ]),
    email:new FormControl('',[
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@gmail+.[a-z]{2,3}$')
    ]),
    password: new FormControl('',[ 
      Validators.required
    ])});
  get getUserName() {
    console.log(this.form)
    return this.form.get('userName');
    
  }
  
 


}
