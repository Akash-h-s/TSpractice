//In TypeScript, an interface is meant only for defining the structure or contract of an object or class — not for providing actual implementations.
interface Person{
    name:string,
    age:number
    print():void
}
function greet(person:Person){
    console.log("hello "+ person.name)
}

greet({name:"akash",age:20, print() {
    console.log("bllallsnkds");
  }})

interface Person1{
    name:string
    age:number
}
interface readonlyperson{
    readonly name:string
    readonly age:number
}
let p1:Person1={
    name:"akash",
    age:20
}
console.log(p1)
let p2:readonlyperson=p1;
p1.age++;//in p2 age is also reflected 
console.log(p2)

interface numberdir{
    [index:string]:number
    length:number
    //name:string //it will give error because the index signature is indexex with a number
}

//to do the above senerio
interface num{
     readonly [index:string]:number | string
    name:string
    length:number
}

interface SquareConfig {
  color?: string;
  width?: number;
}
 
function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

let mySquare = createSquare({ color: "red", width: 100 });
 console.log(mySquare)

 //inheritence

 interface student{
    name:string
    usn?:string
    college:string
    phoneno?:bigint
 }
 interface professor extends student{
    profid:string
 }
 let prof:professor={name:"renu",profid:"1010",college:"PESCE mandya"}
 console.log(prof)


 //intersection type:we can combine  the existing objects using &

 interface colour{
    color:string
 }
 interface rad{
    radius:number
 }

 type col=colour & rad

 function draw(colour:col)
 {
    console.log("colour is"+" "+colour.color)
    console.log("radius is"+" "+colour.radius)
 }
 draw({color:"black",radius:100})

