/** @format */
//dacorators are function for extending business logic or adding meta data.
//decorator are used to reduce duplicate code.
// decorator can be applied to classes, methods , parameter, accesser and property.
function MenuItem(itemId: string) {
  return (target: Function) => {
    target.prototype.id = itemId;
  };
}
@MenuItem("abc")
class Pizza {
  id: string;
}
let pz = new Pizza();
console.log(pz.id);
class Burger {
  id: string;
}
