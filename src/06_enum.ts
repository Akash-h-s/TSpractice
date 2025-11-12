//numeric enum
enum Directions{
    up=1,
    down,
    top,
    bottom
}
//here the up is initialiazed to one and following things will be auto incremented that is bottom is 2 and soo on
console.log(Directions.down)//prints 2

enum userresponse{
    No,
    Yes
}
function respond(rec:string,msg:userresponse){
    console.log(`hii iam ${rec} my responce is ${msg}`)
}
respond("akash",userresponse.No)

//enums without initializers either need to be first, or have to come after numeric enums initialized with numeric constants or other constant enum members. In other words, the following isn’t allowed:
/*enum E {
  A = getSomeValue(),
  B,
Enum member must have initializer.
}*/

//string enums

enum direc{
    up="up",
    down="down",
    left="left",
    right="right"
}
console.log(direc.up)

//heterogeneous enums
enum det{
    age=-20,//allowed
    name="akash"
}
console.log(det.age)

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}
console.log(FileAccess.ReadWrite)


//reverse mapping

enum Enu{
    A,
}
let s=Enu.A
let nameofA=Enu.A
console.log(s)
console.log(nameofA)

const enum abc{
    up,down,left,right
}

console.log(abc.right)



//arrays
const n:number[]=[10,30,60]
console.log(n)
const str1:string[]=["a","bc","def"]
console.log(str1)



//tuples is another type of array that knowa exactly how many elements it containsand exacktly which type it contains
type tup=[string,number]//it should be a type not const or let
function dosomething(pair:[string,number]){
    console.log(pair[0])
    console.log(pair[1])
}
dosomething(["hello",123])


//type assertion

//as
let some:any="akash welcome to  talview"
let str_length=(some as string).length
console.log(`length is ${str_length}`)

//as const

const color=['red','black','green'] as const //now it is readonly
console.log(color)
//color=<const>['red','green'] also a valid assertion time


//non null assertion operator

let fin:string |null="Akash"
console.log(fin!.length)//if the value of string is nill then it will not throw error in compile but it will in runtime

//type inference in typescript refers to the process of automatically determining the type of the variable based on the value assigned to it

const w="Akash"
console.log(typeof w)

//type compactibility
interface add{
    area:number,
}
class  sub{
    area:number
    constructor(area:number){
    this.area=area
    }
}

let a5=new sub(100)
let ad:add
ad=a5
console.log(ad.area)

interface Pet {
  name: string;
}
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
function greet1(pet: Pet) {
  console.log("Hello, " + pet.name);
}
greet1(dog); 

let x=(a:10)=>0
let y=(z:10,s:string)=>0
//x=y it is not possible bcz it checks the parameters first
y=x
console.log(y==x)

let x1 = () => ({ name: "Alice" });
let y1  = () => ({ name: "Alice", location: "Seattle" });


//type union | is ued to combine two or more types intp to single type and that accepts the all posibble types
type am=string|number
let val:am=10000
console.log(val)
let stre:am="hello"
console.log(stre)


//type intersection
interface A1{
    a:number
}
interface A2{
    b:string
 }
 type A1andA2=A1&A2
 let vf:A1andA2={a:10,b:"ghhhh"}

 console.log(vf.a,vf.b)


 //type Alliases

 type s1=number
 type s2=string
 type s3={num:s1,str:s2}
 let pr:s3={num:20,str:"akash ur genius"}
 console.log(pr.str)