// let div1=document.getElementById("a")
// div1.style.backgroundColor="Red"
// console.log(div1)


// let divs=document.getElementsByClassName("b");
// console.log(divs);


// divs[0].style.background="yellow";
// divs[1].style.background="blue";
// divs[2].style.background="green";
// divs[3].style.background="pink";


// divs[0].innerText="HELLO DIV2"
// let contentDIV2=divs[0].innerHTML
// console.log(contentDIV2);




//<------------HTML COLLECTION NOT AN ARRAY------------------>



// let tags=document.getElementsByTagName("div")
// console.log(tags);

// let check=Array.isArray(tags)
// console.log(check);

// //Convert HTML COLLECtion to Pure array
// let pureArray=Array.from(tags)
// console.log(pureArray);


// let checkAgain=Array.isArray(pureArray)
// console.log(checkAgain);


//TO itterate all the elements of array we used forEach method

// pureArray.forEach((x)=>{
//     x.style.background="orange"
// })

// pureArray[0].style.fontSize="30px"




// let a=document.querySelectorAll(".b")
// console.log(a);
// a.style.background="purple";



let headingTag=document.createElement("h1")
let para=document.createElement("p")

headingTag.innerText="Hello World"
para.innerHTML="Praragraph"
document.body.append(headingTag)
document.body.append(para)
let orderList=document.createElement("ol")

let li1=document.createElement("li")
let li2=document.createElement("li")
let li3=document.createElement("li")


li1.innerText="Apple"
li2.innerText="Bananna"
li3.innerText="Orange"

orderList.appendChild(li1)
orderList.appendChild(li2)
orderList.appendChild(li3)
document.body.append(orderList)
