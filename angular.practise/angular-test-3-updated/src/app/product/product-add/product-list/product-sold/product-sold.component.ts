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
import swal from "sweetalert";

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
    if (
      this.productSoldData &&
      this.productSoldData.id !== "" &&
      this.productSoldData.id !== null
    ) {
      this.productSoldData.datetime = new Date();

      let rate = parseInt(this.productSoldData.rate);
      let quantity = this.productSoldData.quantity;
      let total = rate * quantity;
      let ordertotal = total.toString();
      
      this.productSoldData.ordertotal = ordertotal;
     
      this.SoldList.push(this.productSoldData);
      this.showTable = true;
    }
    if (this.SoldList[0].id == "") {
      this.SoldList.splice(0);
    }
  }
  setRowColor(total: any) {
    //return css class based on ordertotal
    let t = parseInt(total);
    if (t <= 500) {
      return "c1";
    } else {
      return "c2";
    }
  }
  returnProduct(data: ISProduct, idx: number) {
    swal({
      title: "Are you want to return the purchase?",
      icon: "info",
      dangerMode: true,
    }).then((willReturn) => {
      if (willReturn) {
        this.rtnProduct.emit(data);
        let reverseIndex = this.SoldList.length - idx - 1;
        this.SoldList.splice(reverseIndex, 1);
      }
    });
  }
}
