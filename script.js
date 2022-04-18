
//var firstName="Jackson"
//var male=true
//console.log(male)
//var age=15
//var frequency=91.1
//var sum=2+5
//console.log(sum)
//var subtract=10-5
//console.log(subtract)
//var multiply=2*2
//console.log(multiply)
//var divide =10/5
//console.log(divide)
//var exponential=2**2
//console.log(exponential)
//var firstnumber=5
//var secondnumber="5"
//var answer=firstnumber===secondnumber
//console.log(answer)
//var answer2=(5>2) || (4<1)
//console.log(answer2)
//if (7>6){
//    console.log("This is correct")
//}else{
//console.log("This is incorrect")
//}

//Now we want to practice the if , else statement.
//var password="Cozmo"
//var username="spotify"
//var userpassword=prompt("Please enter your password")
//var useusername=prompt("Please enter your username")
//if (password===userpassword && username===useusername){
//    console.log("Access granted")
//}else{
//    console.log("Access denied")
//}
//Now we want to practice switch
//var name=prompt("What is your name")
//var bestfood=prompt("What is your best food")
//switch (bestfood){
 //   case "fried rice":
 //       console.log("Your best food is fried rice")
 //       break
  //  case "moi moi":
  //      console.log("Your best food is moi moi")
   //     break
  //  case "garri":
  //      console.log("Your best food is garri")
   //     break
//    case "yam":
   //     console.log("Your best food is yam")
  //      break
  //  default:
  //      confirm(name + ",I don't really know your best food")
//}
// let us talk about HTML dom
//var paragraph1=document.querySelector(".name")
//var paragraph2=document.getElementById("career")
//paragraph1.textContent="My name is chinedum"
//paragraph2.textContent="I am a rapper"
//var newstatement=prompt("Type your new statement.")
//console.log(newstatement)
//paragraph2.textContent=newstatement

//paragraph1.style.backgroundColor="orange";
//paragraph1.style.fontSize="45px"

//function expression
//const age=function(height,width){
//   return height*width;
//};
//console.log(age(4,5));
//expected result:20

//function declaration
//console.log(age(4,4));
//function age(height,width){
//   return height*width;
//};

//expected result:16


//var fullName = prompt("What is your full name?")
//var yearOfBirth = prompt("What year were you born")
//var calculating = document.querySelector(".btn")
//var answer = document.querySelector(".ans")
//calculating.addEventListener("click",calcAge)

//function calcAge(){
//     var currentYear=new Date().getFullYear()
//     var age=currentYear-yearOfBirth
//     answer.textContent=age
//}
//calcAge();


//Now let us learn arrays in javascript
//var colors=["Blue","Orange","Green","Red","Yellow"]
//colors[2]="Purple"
//console.log(colors)
//var cars=new Array("Bentley","Mercedes","Audi","Porsche","Ferrari");
//console.log(cars);

//var choice="My name is chinedum and I love a " + colors[4] +" "+ cars[4];
//console.log(choice)
//Let us make use of the push method in java script array.
//colors.push("white")

//Let us use the unshift method in java script array.
//colors.unshift("Violet")
//console.log(colors)

//pop method in javascript array
//colors.pop()

//shift method in javascript array
//colors.shift()
//console.log(colors)

//javascript date function
//const d = new Date();
//d.getDate();
//console.log(d)

//Let us learn lenght in javascript array.
//console.log(cars.length)

//Let us learn the sort in javascript array.
//console.log(cars.sort())

//var join=cars +" ," + colors
//console.log(join)

//Concatenation method in javascript array.
//var Concatenation=colors.concat(cars)
//console.log(Concatenation)

//Slice method in javascript array.
//var selectedCars=cars.slice(2)
//console.log(selectedCars)

//indexOf method in javascript array.
//console.log(cars.indexOf("Ferrari"))

//Lets now practice objects in javascript.
//var person={
//   firstname:"Chinedum",
//   lastname:"Nworu",
 //  middlename:"Godswill",
 //  artistname:"Lil cozmo",
 //  career:"Rapper",
//   birthyear:2010,
//   cars:["Bentley","Audi A8","Range rover", "Mercedes maybach"],
 //  Married:false,
 //  calcAge: function(){
 //     this.age=new Date().getFullYear()-this.birthyear
//   }
//}
//person.calcAge()
//console.log(person)

//console.log(person.career)
//console.log(person["Married"])
//console.log(person.cars)
//person.artistname="Lil durk"
//console.log(person.artistname)

//Let us practice loops in javascript
//console.log(1)
//console.log(2)
//console.log(3)
//console.log(4)
//console.log(5)
//console.log(6)
//console.log(7)
//console.log(8)
//console.log(9)
//console.log(10)
//console.log(11)
//console.log(12)
//console.log(13)
//console.log(14)
//console.log(15)
//console.log(16)
//console.log(17)
//console.log(18)
//console.log(19)
//console.log(20)

//For loops in javascript.
//for (var d=1; d<=100; d=d+1){
//   console.log(d)
//}

const firstName=document.getElementById("first")
const lastName=document.getElementById("last")
const height=document.getElementById("height") 
const weight=document.getElementById("weight")
const button=document.querySelector(".btn")
const result=document.querySelector(".result")

button.addEventListener("click", ()=>{
   const firstName=document.getElementById("first")
   const lastName=document.getElementById("last")
   const height=document.getElementById("height") 
   const weight=document.getElementById("weight")
   const result=document.querySelector(".result")
   //Let us carry out arithemetic operation
   let BMI=(weight.value)/(height.value**2)
   BMI=BMI.toFixed(2)
   console.log(BMI)
   //form validation
   if (firstName.value=="" || lastName.value=="" || height.value=="" || weight.value=="") {
      setTimeout(()=>{
         result.textContent="Pls fill all fields correctly"
         result.style.color="red"
         setTimeout(()=>{
            result.textContent=""
         }, 1500)
      }, 100)
   } else {
      if (BMI > 0 && BMI <= 18 ) {
         result.textContent=firstName.value +" "+ lastName.value + " Your BMI value is " + BMI +"kg/m square. You are UNDERWEIGHT. Pls see a medical doctor or a pharmacist. Thanks for using Chinedum Nworu's BMI calculator."
         result.style.color="blue"
         result.style.fontWeight="bold"
         init()
      } else if (BMI > 18 && BMI <= 24.9) {
         result.textContent=firstName.value + " "+ lastName.value + " Your BMI value is " + BMI +"kg/m square. You are NORMAL. Pls stay healthy. Thanks for using Chinedum Nworu's BMI calculator."
         result.style.color="green"
         result.style.fontWeight="bold"
         init()
      } else if (BMI > 25 && BMI <= 30) {
         result.textContent=firstName.value + " "+ lastName.value + " Your BMI value is " + BMI +"kg/m square. You are OVERWEIGHT. Pls see a medical doctor or a pharmacist. Thanks for using Chinedum Nworu's BMI calculator."
         result.style.color="orange"
         result.style.fontWeight="bold"
         init()
      }else {
         result.textContent=firstName.value + " "+ lastName.value + " Your BMI value is " + BMI +"kg/m square. You are OBESE. Pls see a medical doctor or a pharmacist immediately. Thanks for using Chinedum Nworu's BMI calculator."
         result.style.color="red"
         result.style.fontWeight="bold"
         init()
      }
   }
})

function init(){
   firstName.value=""
   lastName.value=""
   height.value=""
   weight.value=""
}























