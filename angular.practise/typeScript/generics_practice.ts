/** @format */

//generics
//generics is a placeholder for datatypes

class Queue<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }
}

let q = new Queue<string>();
q.add("str");

let q2 = new Queue<number>();
q2.add(4);

/*conclusion: generics made it possible to use different
   data types for different objects.
   but into that same object data type is restricted*/

//it can be used in function and class method too as a parameter and return type.
