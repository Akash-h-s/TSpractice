class Car{
    make:string
    model:string
    year:number
    //if i dont want to annotate means assign using constroctor i can use ! symbol
    age!:number
    constructor(make:string,model:string,year:number)
    {
        this.make=make
        this.model=model
        this.year=year
    }
    print()
    {
        console.log(`details are ${this.year} ${this.make} ${this.model}`)
    }
}

const car1=new Car("aaa","bbb",2022)
car1.print()


//in heritence if we accessing a elements of parent class first we need to cll super() function otherwise it will throw usan error\
class A{
    k=4
}
class B extends A{
    a:number=0
    constructor()
    {
        super()//super has to be called inside the constructor itself
    }
    drive()
    {
        console.log(this.k)
    }
    
}
const b=new B()
b.drive()

//implements clause

interface AB{
    ping():void
}
class Sonar implements AB{
    ping(){
        console.log("ping!")
    }
}
//int gives error because the AB interace doesnot contain a pong() method

// class Ball implements AB{
//     pong()
//     {
//         console.log("pong")
//     }
// }

//overriding methods 
class Base {
  greet() {
    console.log("Hello, world!");
  }
}
 
class Derived extends Base {
  greet(name?: string) {//if u miss the question mark it will crash because the name may be undefined
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}
 
const d = new Derived();
d.greet();
d.greet("reader");
//ccess specifier
//public can be accessedd everywhere-default
//protected can be accesed inside the classs and in the subclasses
//private can be accesable only inside the class


//In TypeScript (and JavaScript), if a class has static members, you can access them directly using the class name if they are public — without creating an object .
class Veh{
    static x=10
    static print()
    {
        console.log("welcome to talvirew")
    }
}
console.log(Veh.x)
Veh.print()

//generic classes
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
  dive(){
    console.log("hi from america"+" "+ typeof(this.contents))
  }
}
 
const b1 = new Box(100);
b1.dive()

//Abstract classes are like interfaces, but we can’t create objects directly from them — instead, we inherit them in another class and then create objects from that class.
abstract class aira{
    abstract greet():string
    printname()
    {
        console.log(`hello ${this.greet()} i am from abstract class`)
    }

}
class der extends aira{
    greet(){
        return "world";}
}
const a=new der()
a.printname()
//const a=new aira()//this will give u error

//relationship between clasees
// class Person3{
//   name: string;
//   age: number;
// }
 
// class Employee2 {
//   name: string;
//   age: number;
//   salary: number;
// }
 
// // OK
// const p: Person = new Employee();