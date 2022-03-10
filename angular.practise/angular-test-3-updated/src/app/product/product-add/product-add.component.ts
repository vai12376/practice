/** @format */

import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
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
  formSubmited = false;
  showErrorBox = false;
  productForm: FormGroup;
  errorMsg: string = "";
  productColor = "";
  rtnProduct: ISProduct = {
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
  constructor(private fb: FormBuilder) {
    this.productForm = this.initializeForm();
  }
  ngOnInit(): void {}
  initializeForm() {
    let productForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(256)]],
      rate: ["", [Validators.required, Validators.min(1)]],
      quantity: [
        "",
        [Validators.required, Validators.min(1), Validators.max(999)],
      ],
      color: ["", Validators.required],
      lotsize: ["", [Validators.required, Validators.min(1)]],
      description: ["", [Validators.required, Validators.maxLength(512)]],
    });
    return productForm;
  }
  get _productForm() {
    console.log(this.productForm);
    return this.productForm.controls;
  }
  lotSizeValidator() {
    if (this.productForm.value.lotsize > this.productForm.value.quantity) {
      return true;
    } else {
      return false;
    }
  }

  setColor(e: HTMLInputElement) {
    this.productColor = e.value;
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.formSubmited = true;
      let name = this.productForm.value.name;
      let rate = this.productForm.value.rate;
      let quantity = this.productForm.value.quantity;
      let color = this.productForm.value.color;
      let lotsize = this.productForm.value.lotsize;
      let description = this.productForm.value.description;

      this.productData = {
        id: UUID.UUID(),
        name: name,
        rate: rate,
        quantity: quantity,
        color: color,
        lotsize: lotsize,
        description: description,
      };

      swal.fire("data added successfully");
      this.productForm.reset();
      this.formSubmited = false;
    } else {
      this.formSubmited = true;
    }
  }

  purchase(data: IProduct) {
    console.log(data);
    this.sendProductToSold = data;
  }
}
