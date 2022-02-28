/** @format */

import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
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
  selector: "app-student-info",
  templateUrl: "./student-info.component.html",
  styleUrls: ["./student-info.component.css"],
})
export class StudentInfoComponent implements OnInit, OnChanges {
  @Input()
  studentData = {};
  tableData: any = [];
  @Output() sendDetails = new EventEmitter<object>();
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    this.addTableData();
  }
  addTableData() {
    console.log("else block");
    this.tableData.push(this.studentData);
    console.log(this.tableData);
  }

  deleteStudent(idx: number) {
    this.tableData.splice(idx);
    if (!this.tableData) {
    }
  }
}
