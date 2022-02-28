/** @format */

import {
  AfterViewInit,
  Component,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  ElementRef,
} from "@angular/core";

interface obj {
  firstName: string;
  lastName: string;
  gender: string;
  instName: string;
  city: string;
  description: string;
}
@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"],
})
export class StudentListComponent implements OnInit, AfterViewInit {
  @Output() sendDetails2 = new EventEmitter();
  studentData: any = [];
  @ViewChild("firstName") fname!: ElementRef;
  @ViewChild("lastName") lname!: ElementRef;
  @ViewChild("gender") gender!: ElementRef;
  @ViewChild("instName") instName!: ElementRef;
  @ViewChild("city") city!: ElementRef;
  @ViewChild("description") description!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {}
  ngOnInit(): void {}
  Gender = "";
  setGender(e: HTMLInputElement) {
    console.log(e.value);
    this.Gender = e.value;
  }
  collectData() {
    let fname = this.fname.nativeElement.value;
    let lname = this.lname.nativeElement.value;
    let gender = this.Gender;
    let instName = this.instName.nativeElement.value;
    let city = this.city.nativeElement.value;
    let description = this.description.nativeElement.value;
    if (
      fname == "" ||
      lname == "" ||
      gender == "" ||
      instName == "" ||
      city == "" ||
      description == ""
    ) {
      alert("enter valid data");
    } else {
      let curObj = {
        firstName: fname,
        lastName: lname,
        gender: gender,
        instName: description,
        city: instName,
        description: city,
      };
      this.studentData.push(curObj);
    }
  }

  InfoToList(data: object) {
    this.sendDetails2.emit(data);
  }
}
