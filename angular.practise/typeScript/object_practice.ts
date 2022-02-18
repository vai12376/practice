/** @format */

//object
//implicit
let account = {
  name: "vaibhavi",
  balance: 100,
};

//explicit

let account2: {
  name: string;
  balance: number;
  //to make status optional
  status?: number;
};
let obj = {
  name: "vaibhavi",
  balance: 100,
};
//this will store array of objects
let accounts: {}[];

//interface can be used to set types of objects
//interface generaly use pascal case or I at start of the name

interface IAccount {
  name: string;
  balance: number;
  status?: number;
  deposit?: () => void;
}

let account3: IAccount = {
  name: "vaibhavi",
  balance: 100,
};
