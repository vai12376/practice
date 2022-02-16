import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './component/all-books/all-books.component';



@NgModule({
  declarations: [
    AllBooksComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap:[AllBooksComponent]
})
export class PublicModule { }
