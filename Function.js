// function login(){
//     console.log('Logged in Successfully');
// }
// let L =login()
// console.log(L)




// <-------------Anonymous Function------------->


// let a= function(){
//     console.log("Logged in successfully");
// }
// console.log(a);

//    <----Parameterized Function------>


// function login(username,password){
// console.log(`${username} Logged in Successfully`);

// }
// login("Amit");
// //login("AbhiShek")



// function UpperCase(str){
//     return str.toUpperCase()

// }
// const result=UpperCase("javascript");
// console.log(result);


// <---------------Default Parametr in a function------->
//Normal function with Passing Parameter

// function calculate_Area(width,height){
//     const area=width*height;
//     return area;
// }
// const a = calculate_Area(30,40);
// console.log(a);

//Default Parameter


// function calculate_Area(width,height=1){
//     height=height===undefined?1:height;
//     const area=width*height;
//     return area;
// }
// const b = calculate_Area(30);
// console.log(b);

//    <------------Variable Scope--------->

// function download(){
//     const filename='xyz.pdf';
//     console.log(filename);
// }
// download()
// console.log(filename);



//<-----------------Trace the Program----------------->



// let a=10;
// a=30;
// console.log(a);
// function x(){
//     a=50;
//     console.log(a);
// }
// console.log(a);
// x()
// console.log(a)



//<<---------------------------------------ARROW FUNCTION--------------------->>

//normal function


// function name(){
//     console.log("Normal function")

// }
// name();



  //Arrow function


//   let name =()=> "arrow function"
//   name()



// let add=(a,b)=>{return a+b}
// console.log(add(5,7));
// let add1=(a,b)=>a+b;
// console.log(add1(5,9));




// let Str=a=>a
// console.log(Str("This is without Parenthesis arrow function"));

// <------------Example1------------>
// function add(a,b){
//   a=2;
//    b=6;
//   return a+b;

// }
// var result=add(6,7);
// console.log(result);

// <------------Example2------------>

// function outer() {
//   var x = 10;
//   function inner() {
//     console.log(x);
//   }
//   x = 20;
//   return inner;
// }

// var innerFn = outer();
// innerFn();

// <------------Example3------------>


// function multiply(a, b) {
//   console.log(arguments[0]);
//   arguments[0] = 10;
//   console.log(a);
//   return a * b;
// }

// multiply(2, 3);

//<------------Example4------------>

// function multiply(a, b) {
//   //console.log(a*b);
//    return a * b;
// }

// let result = multiply(2, 3);
// console.log(result);

//<------------Example5------------>


// function square(a) {
//   return a * a;
// }

// let result = square(2, 3,4);
// console.log(result)



    //<<----------------05-05-2023--------------------->>


    // function a(){
    //   console.log("This is the output of A function");
    // }

    // function b(){
    //   console.log("This is the output of B function");
    // }

    // function c(){
    //   console.log("This is the output of C function");
    // }
    // a()
    // c()
    // b()

    // setTimeout(c,3000);

    // setInterval(() => {
    //   console.log("Fun BBBB");
      
    // }, 2000);






    //<<-------------------call back function--------------------->>
   

// function x(a,b,task){
//   let z=task(6,b)
//   console.log(z);
// }
// x(4,5,(p,q)=>{return p+q})
// x(10,20,(p,q)=>p-q)



// function x(a,b,task1,task2,task3){
//   let z=task1(a,b)
//   console.log(z);
// }
// x(4,5,(p,q)=>{return p+q})
// x(10,20,(p,q)=>p-q)
// x(4,5,(p,q)=>{return p*q})
// x(10,20,(p,q)=>p/q)








//<------------------------------Spread Operator------------------->>
//Spread operator is 3 dot ,it is used to store the rest parameter after one 
// function a(x,...y){
//   console.log(x);
//   console.log(y);
// }
// //a(1)
 //a(1,2,3,4,5)


//<<<<<<-------------------EXample 


// function a(...y){
  
//   console.log(y);
// }
// a(1,2,3,4,5)




//<-------------------------------MathsMedhods------------------->



let maxValue= Math.max(60,40,-30,-20)
console.log(maxValue);




let minValue= Math.max(60,40,-30,-20)
console.log(maxValue);