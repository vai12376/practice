/** @format */

import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
} from "@angular/core";
import { UUID } from "angular2-uuid";
import { IProduct, ISProduct } from "src/app/core/model/interfaces";

@Component({
  selector: "app-product-sold",
  templateUrl: "./product-sold.component.html",
  styleUrls: ["./product-sold.component.css"],
})
export class ProductSoldComponent implements OnInit, OnChanges {
  showTable = false;
  @Output()
  rtnProduct = new EventEmitter<ISProduct>();
  @Input() productSoldData: ISProduct | undefined;
  SoldList: ISProduct[] = [
    {
      id: "",
      name: "",
      rate: "",
      quantity: 0,
      color: "",
      lotsize: 0,
      description: "",
      ordertotal: "",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.productSoldData) {
      if (this.productSoldData.id !== "") {
        this.productSoldData.datetime = new Date();
        let rate = parseInt(this.productSoldData.rate);
        let quantity = this.productSoldData.quantity;
        let total = rate * quantity;
        let ordertotal = total.toString();
        this.productSoldData.ordertotal = ordertotal;
        // this.productSoldData.salesId = UUID.UUID();
        // let temp: any = this.productSoldData;
        // temp.datetime = new Date();
        // temp.ordertotal = temp.quantity * temp.rate;
        this.SoldList.push(this.productSoldData);
        this.showTable = true;
      }
    }
    if (this.SoldList[0].id == "") {
      this.SoldList.splice(0);
    }
  }
  setRowColor(total: any) {
    let t = parseInt(total);
    if (t <= 500) {
      return "c1";
    } else {
      return "c2";
    }
  }
  returnProduct(data: ISProduct, idx: number) {
    this.rtnProduct.emit(data);
    this.SoldList.splice(idx, 1);
  }
}
