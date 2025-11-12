let username:string="sangan"
let age:number=40
 const big=2n**63n-1n
//Operator '+' cannot be applied to types 'bigint' and 'number'
 //const mixed=big+age 

 const Token:unique symbol=Symbol('Token') 

 function yearstoDay(years:number):number{
    return years
 }

 console.log(yearstoDay(2011))

 //strictNullcheck
//  let title:string="intro"
//  title=undefined

let subtitle:string | undefined
subtitle=undefined

//void :function doesnt return a useful value
function log(msg:string):void{
   console.log(msg)
}

log("hello")

//never returns anything
function fail(fail:string):never{
   throw new Error(fail)
}

//do not use any->try to ignore as much as possible
const anyt:any=JSON.parse('{"x":1}')
console.log(anyt)

