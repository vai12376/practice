/** @format */

import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { UUID } from "angular2-uuid";
import { IProduct, ISProduct } from "src/app/core/model/interfaces";
import swal from "sweetalert2";
//import * as pkg from '../../package.json';
@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"],
})
export class ProductAddComponent implements OnInit {
  showErrorBox = false;
  errorMsg: string = "";
  productColor = "";
  rtnP: ISProduct = {
    id: "",
    name: "",
    rate: "",
    quantity: 0,
    color: "",
    lotsize: 0,
    description: "",
  };
  sendProductToSold: ISProduct = {
    id: "",
    name: "",
    rate: "",
    quantity: 0,
    color: "",
    lotsize: 0,
    description: "",
  };
  productData: IProduct = {
    id: "",
    name: "",
    rate: "",
    quantity: 0,
    color: "",
    lotsize: 0,
    description: "",
  };

  @ViewChild("productName") productName: ElementRef | undefined;
  @ViewChild("productRate") productRate: ElementRef | undefined;
  @ViewChild("productQuantity") productQuantity: ElementRef | undefined;
  @ViewChild("productLotSize") productLotSize: ElementRef | undefined;
  @ViewChild("productDescription") productDescription: ElementRef | undefined;
  @ViewChild("errorBox") errorBox: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  setColor(e: HTMLInputElement) {
    this.productColor = e.value;
  }

  validate(e: Event) {
    e.preventDefault();
    this.errorMsg = "";
    let name = this.productName?.nativeElement.value;
    let rate = this.productRate?.nativeElement.value;
    let quant = parseInt(this.productQuantity?.nativeElement.value);
    let color = this.productColor;
    let lotSize = parseInt(this.productLotSize?.nativeElement.value);
    let description = this.productDescription?.nativeElement.value;
    if (name == "" || name == null) {
      this.errorMsg += "name should not be empty<br>";
    }
    if (quant == null) {
      this.errorMsg += "quantity is required<br>";
    }
    if (quant < 1 || quant > 999) {
      this.errorMsg += "product quantity should be between 1 to 999<br>";
    }
    if (color == "" || color == null) {
      this.errorMsg += "choose a color<br>";
    }
    if (1 > lotSize || lotSize > quant) {
      this.errorMsg +=
        "product lot size should be between 1 to max quantity<br>";
    }
    if (lotSize == null || lotSize == undefined) {
      this.errorMsg += "lot size should not be empty<br>";
    }
    if (description == "" || description == null) {
      this.errorMsg += "description should not be empty<br>";
    }

    if (this.errorMsg == "") {
      this.showErrorBox = false;
      this.productData = {
        id: UUID.UUID(),
        name: name,
        rate: rate,
        quantity: quant,
        color: color,
        lotsize: lotSize,
        description: description,
      };
      swal.fire("data added successfully");
    } else {
      this.showErrorBox = true;
      if (this.errorBox) this.errorBox.nativeElement.innerHTML = this.errorMsg;
    }
  }
  purchase(data: IProduct) {
    console.log(data);
    this.sendProductToSold = data;
  }
}
