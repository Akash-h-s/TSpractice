//class decorators
function MyDecorator(constructor: Function) {
  console.log("Decorator called for:", constructor.name);
}

@MyDecorator
class MyClass {}

//method decorator
function adder(target:any,propertkey:string,descriptor:PropertyDescriptor){
    const original=descriptor.value;
    descriptor.value=function(...args:any[]){
        
    }
}
class Dec{
    @adder
    add(x:number,y:number){
        return x+y;
    }
}