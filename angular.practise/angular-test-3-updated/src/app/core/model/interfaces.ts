/** @format */

export interface IProduct {
  id: string;
  name: string;
  rate: string;
  quantity: number;
  color: string;
  lotsize: number;
  description: string;
}
export interface ISProduct {
  id: string;
  salesId?:string;
  name: string;
  rate: string;
  quantity: number;
  color: string;
  lotsize: number;
  description: string;
  datetime?: Date;
  ordertotal?: string;
}
