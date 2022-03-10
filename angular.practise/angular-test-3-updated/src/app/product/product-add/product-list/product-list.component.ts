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
import swal from "sweetalert2";
import { IProduct, ISProduct } from "src/app/core/model/interfaces";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() productData: IProduct = {
    id: "",
    name: "",
    rate: "",
    quantity: 0,
    color: "",
    lotsize: 0,
    description: "",
  };
  soldData: ISProduct = {
    id: "",
    name: "",
    rate: "",
    quantity: 0,
    color: "",
    lotsize: 0,
    description: "",
  };
  @Input()
  rtnP: ISProduct = {
    id: "",
    name: "",
    rate: "",
    quantity: 0,
    color: "",
    lotsize: 0,
    description: "",
  };
  productList: IProduct[] = [];
  //@Output() purchaseEvent = new EventEmitter<IProduct>();
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.productData?.id !== "") {
      this.productList.push(this.productData as IProduct);
    }
  }

  // filterData(data: IProduct) {
  //   return data.id == this.rtnP.id;
  // }
  purchaseAll(idx: number) {
    if (this.productList) {
      let q = this.productList[idx].quantity;

      if (q > 0) {
        let answer = confirm("are you sure you want to purchase this product");
        if (answer) {
          let s = {
            id: this.productList[idx].id,
            name: this.productList[idx].name,
            rate: this.productList[idx].rate,
            quantity: q,
            color: this.productList[idx].color,
            lotsize: this.productList[idx].lotsize,
            description: this.productList[idx].description,
            datetime: new Date(),
            ordertotal: this.productList[idx].rate,
          };
          this.soldData = s;
          //this.purchaseEvent.emit(this.soldData);
          this.productList[idx].quantity = 0;
        }
      } else {
        swal.fire("product is not available");
      }
    }
  }

  singlePurchase(idx: number) {
    if (this.productList) {
      let q = this.productList[idx].quantity;

      if (q > 0) {
        let answer = confirm("are you sure you want to purchase this product");
        if (answer) {
          q = q - 1;
          let s = {
            id: this.productList[idx].id,
            name: this.productList[idx].name,
            rate: this.productList[idx].rate,
            quantity: 1,
            color: this.productList[idx].color,
            lotsize: this.productList[idx].lotsize,
            description: this.productList[idx].description,
            datetime: new Date(),
            ordertotal: this.productList[idx].rate,
          };
          this.soldData = s;
          this.productList[idx].quantity = q;
          // this.purchaseEvent.emit(this.soldData);
        }
      } else {
        swal.fire("no more products available");
      }
    }
  }
  purchaseLot(idx: number) {
    if (this.productList) {
      let q = this.productList[idx].quantity;
      if (q > 0) {
        let answer = confirm("are you sure you want to purchase this product");
        if (answer) {
          let l = this.productList[idx].lotsize;
          let a = q - l;
          if (a >= 0) {
            let s = {
              id: this.productList[idx].id,
              name: this.productList[idx].name,
              rate: this.productList[idx].rate,
              quantity: l,
              color: this.productList[idx].color,
              lotsize: this.productList[idx].lotsize,
              description: this.productList[idx].description,
              datetime: new Date(),
              ordertotal: this.productList[idx].rate,
            };
            this.soldData = s;
            // this.purchaseEvent.emit(this.soldData);
            this.productList[idx].quantity = a;
          }
        } else {
          swal.fire("no more products available");
        }
      } else {
        swal.fire("no more products available");
      }
    }
  }
  rtnProduct(data: ISProduct) {
    for (let i = 0; i < this.productList.length; i++) {
      if (data.id === this.productList[i].id) {
        this.productList[i].quantity += data.quantity;
        break;
      }
    }
  }
  setRowColor(quantity: number) {
    console.log(quantity);
    if (quantity == 0) {
      return "c1";
    } else if (quantity > 0 && quantity <= 50) {
      return "c2";
    } else {
      return "c3";
    }
  }
}
