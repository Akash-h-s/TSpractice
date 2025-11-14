//function declaration

function sayHi(){
    console.log("hii fromm function declaration")
}

sayHi()

//function expression
const saybye=function(){
    console.log("bye from function expression")
}
saybye()


//generic function 
function print<Type>(arr:Type[]): Type | undefined
{
    return arr[2];
}
const arr=[1,2,4]
console.log(print(arr))


//constrains on generic function
function longest<Type extends {length:number}>(a:Type,b:Type){
    if(a.length > b.length){
        console.log('a length is greater than b')
    }
    else
        console.log("b lenght is greater than a")
}
longest([10,20],[10,20,90])
//longest(10,400) gives u a error


//function overloading

function makeDate(timestamp: number): Date;//declaration
function makeDate(m: number, d: number, y: number): Date;//declaration

function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {//method
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
console.log(makeDate(12345678));
console.log(makeDate(5, 5, 2005));


function add():any;
function add(str:string):any

function add(num:any){
    console.log("function overloading type "+ typeof num)
}
add()
add("akash")

