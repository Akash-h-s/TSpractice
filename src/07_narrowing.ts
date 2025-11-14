//narrowing is something like we are specifically checking for types

//typeof narrowing 
function check(A:string | number){
    if(typeof A==="string")
        console.log("this is  a string message "+A)
    else
        console.log("this is a number "+A)
}
check("hello everyone")
check(100)

//in narrowing
type car={
    wheels:number,
    drive:()=>void
}
type boat={
    wheels:number
    stream:()=>void
}

function carorboat(A:car | boat){
    if("drive" in A){
        A.drive()
      console.log("hi iam car")
    }
    else{
        A.stream()
        console.log("hi iam boat")
    }
}
const z:car=({wheels:4,drive:()=>console.log("zoooo")})
const c:boat=({wheels:0,stream:()=>console.log("cooooo")})

carorboat(z)
carorboat(c)


//instance of narrowing

class a1{
    x=10
}

class a2{
    b=10
}

const obj = new a1();
console.log(obj instanceof a2);