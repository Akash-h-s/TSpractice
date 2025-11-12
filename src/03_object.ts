
type User={
    id:string   //required
    name:string //required
    email?:string //it is optional if it is present its type should be a string
    readonly createdAt:Date //read only canot be reassigned
}

const user1:User={id:"u1",name:"akash",createdAt:new Date()}
console.log(user1)

const user2:User={id:"u2",name:"renu",createdAt:new Date(),email:"renu@gmail.com"}
console.log(user2)

//this both are not one and the same
type User2={email?:string}//if its is absent its okay but if it is present it should be a string
type user3={email:string | undefined}//it has to present it might be a 

type count={[k:string]:number}
type count1=Record<"likes" | "views" | "shares" | "random",number>

const c1:count={whenever:1}
console.log(c1)
const c2:count1={likes:1,views:2,shares:3,random:5}
console.log(c2)