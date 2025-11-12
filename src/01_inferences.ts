//ts knows js verywell//inference
let count=0;//it will writes the types
const str="abcde"
const scores=[10,20,20]


function add(a:number,b:number):number{
    return a+b
}
console.log(add(10,20))
//you can annotate when u not sure about it
let maybe:string | number;
maybe=Math.random()>0.5?"test":10
