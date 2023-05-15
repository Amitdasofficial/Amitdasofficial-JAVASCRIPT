// JavaScript Class 25-04-2023  (Jspiders)

//Execution of SSlice method

// let arr=["a","b","c","d","e"]
// let x=arr.slice(1,5)
// console.log(x);



//Splice method execution
// let arr=["a","b","c","d","e","hi","bye"]
// arr.splice(1,3,"Hello")
// console.log(arr);


// Include and indexof Method for an array

// let arr=["a","b","c","d","e","hi","bye","wow","yes"]
// console.log(arr.includes("wow"))

// console.log(arr.indexOf("c"));

//Concatinate method to camncatinate more than one array to another array
//26-04-2023

// let a=["a","b","c","d"]
// let b=[10,20,30,40]
// let d=['hi','hello','bye']
// let e=["x","y","z"]


// let c=a.concat(b,d,e);
// console.log(c);



//Objects in javascript;



// let person={
//     name:"Amit",
//     id:6969,
//     address:{
//         pincode:573201,
//         Area:'Jp Nagar'
//     }
// }

// console.log(person.address)
// console.log(person.address.pincode)

// //How to add any data in object
// person.skills=["html","css","JavaScript","reactjs"]
// console.log(person);
// console.log(person.skills[2]);


// //delete skills from person
// delete person.skills[3];
// console.log(person);

// person.skills="ReactJs";
// console.log(person);
// person.address={city:"Delhi"}
// console.log(person)
// person.skills.splice(1,1,"ReactJs","BootStrap")
// console.log(person.skills);


// console.log(person);
// person.skills=["HTML","Css","JS"]


// Different object added to a current object
// date--->27/0/2023

// let person={
//     name:"ABC",
//     age:25,
//     skills:["html","CSS"],
//     address:{
//         pincode:573201,
//         city:'Bangalore'
//     },
//     friends:[{name:"Krishna",age:20,skills:["html","CSS","JavaScript"]},
//     {name:"Shiv",age:21,skills:["html","CSS","Bootstrap"]},
//     {name:"Bishnu",age:23,skills:["html","CSS","ReactJs","MongoDb"]}]
     
//  }

// // console.log(person.friends[0])
// // console.log(person.friends[0].name)
  
// console.log(person.friends[0].skills[2]);
// console.log(person.friends[0].name,person.friends[0].skills);







// Todays topic is Function

// //Normal Function
// function greet(){
//     console.log("Hare Krishna");
// }
// greet()

// // Paraeterized Functions


// function add(a,b){
//     console.log(a+b)
// }
// add(10,50)



//<------------- anonymous Function------------>

// let a=function ()
// {
//     console.log("This is anonymous Function");
// }

// console.log(a)



//Take two inputs from User and Pass
// two inputs as a Arguments in the funtion and return the Value

// let x=prompt("Enter x value:");
// let y=prompt("Enter  Y value:")
// function multi(x,y){
// console.log(x*y)
// }
// multi(x,y)




// let p=prompt("Enter p value:");
// let q= prompt("Enter  q value:");
// function Concat(p,q){
// console.log(p+" "+q)
// }
// Concat(p,q)




//OBject

// let person={
//     name:"Amit",
//     id:123,
//     skills:["HTML","CSS","JavaScript"],
//     greet:function(){
//         console.log("Hello Freiends")
//     }
// }

// person.greet()
// console.log(console.log)
// console.log(person.greet)




//<-----------Return Statement----------------->


// function a(x){
//     console.log( x)
//     return x
   
// }
// let v=a("hi")
// console.log(v)

//a()  //--->Throw Undefined because it not a normal function it is funtion with Expression.
let a=function(){
    console.log("Hello");//hello
}
a()//hello
console.log(a())//hello  //undefined
a="Hi"  
console.log(a) //hi
a() //error
