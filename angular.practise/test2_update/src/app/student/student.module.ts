/** @format */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentListComponent } from "./student-main/student-list/student-list.component";
import { StudentDetailsComponent } from "./student-main/student-details/student-details.component";
import { StudentInfoComponent } from "./student-main/student-list/student-info/student-info.component";

import { FormsModule } from "@angular/forms";
import { StudentMainComponent } from "./student-main/student-main.component";

@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailsComponent,
    StudentInfoComponent,
    StudentMainComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [StudentMainComponent],
})
export class StudentModule {}
