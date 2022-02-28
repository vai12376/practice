/** @format */

import {
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { StudentInfoComponent } from "../student-list/student-info/student-info.component";

@Component({
  selector: "app-student-details",
  templateUrl: "./student-details.component.html",
  styleUrls: ["./student-details.component.css"],
})
export class StudentDetailsComponent implements OnInit, OnChanges {
  @Output() studentDetails = {};
  @Input() commingData = {
    firstName: "",
    lastName: "",
    gender: "",
    instName: "",
    city: "",
    description: "",
  };
  tableData: any = [];
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.commingData);
    this.tableData.push(this.commingData);
  }
  showTableData2(data: object) {}
}
