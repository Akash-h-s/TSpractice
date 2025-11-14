//generics are the thing that are  works for all the  types it is a general type

function check<Type>(a:Type){
    console.log(typeof a)
}
check("hello")
check(123)


interface HasLength {
  length: number;
}

class Collection<T extends HasLength> {
  items: T[];

  constructor(...items: T[]) {
    this.items = items;
  }

  getLongest(): T {
    return this.items.reduce((a, b) => (a.length > b.length ? a : b));
  }
}

const cz = new Collection("hi", "akash", "typescript");
console.log(cz.getLongest()); // "typescript"

const cz1 = new Collection([1, 2], [1, 2, 3, 4]);
console.log(cz1.getLongest()); // [1,2,3,4]
