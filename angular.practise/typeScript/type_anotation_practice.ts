//explicit
let a: string = "";
//typeScript will autometically inffer the type
let b = "str";

//if variable is not initialized yet then it's type will be any
let d;

//type anotation can be used into function parameter and retun value too
const getData = function (para1: string, para2: string) {
  let b = para1 + para2;
  return b;
  //implicitely return b as string
};
let c = getData("a", "b");
console.log(c);

//type anotation in array

let arr = [];

let arr2: number[];
// will not allow arr2=['a']

//union type

let u: string | object;
//not allow u=2;
u = "str";
u = { k: 1 };

