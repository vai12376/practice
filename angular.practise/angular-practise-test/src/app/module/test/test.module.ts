import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {SuccessComponent} from './success/success.component';
import {DangerComponent} from './danger/danger.component';
import {WarningComponent} from './warning/warning.component';


@NgModule({
  declarations: [SuccessComponent,DangerComponent,WarningComponent],
  imports: [
    CommonModule
  ],
  exports:[SuccessComponent,DangerComponent,WarningComponent]
})
export class TestModule { }
