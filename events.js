'use strict';

// callBack functions:


// function greeting(getName) {
//     let userName = getName();
//     alert("welcome " + userName)
// }

// function getName() {
//     let Name = prompt("Enter your name");
//     return Name;
// }

// greeting(getName);


//----------------------------------------------
//----------------------------------------------



// function greeting(getName) {
//     let userName = getName();
//     alert("welcome " + userName)
// }

// function getName() {
//     let name = prompt("please enter your name");
//     return name;
// }


// greeting(getName)

//----------------------------------------------
//----------------------------------------------



// function greeting(getName) {

//     let userName = getName();
//     alert("welcome " + userName);
// }

// function getName() {
//     let name = prompt("please enter your name");
//     return name;
// }



// greeting(getName);

//----------------------------------------------
//----------------------------------------------








// callBack functions:

// function greeting(getName) {
//     let userName = getName();
//     alert("Welcome " + userName);
// }


// function getName() {
//     let name = prompt("enter your name");
//     return name;
// }

// greeting(getName);

//----------------------------------------------
//----------------------------------------------



//js events:

// // it is an action


// most famous event:
//click event:
// submit event:




// steps to add events and handle events:
//1- where the event happining.  "for example in the bottom of the page"
//2- type of event. for example.   "click"
//3- what should happen.    "i want to show a text once i click on the botton"




















//when i click on the btn i want to show a welcome msg for user



//1. where the event should happen
// let btn = document.getElementsByTagName('button');
let btn = document.getElementById('btn');


//2. what type of events should happen ?  it is click


//3. what should happen once the event happen
// btn[0].addEventListener('click', handleClick);    //it is just listening for clicking and it take type of event that im lisstening to (click) and it take a function
btn.addEventListener('click', handleClick);

function handleClick() {
    alert("welcome darling to py course");    // in here i will put the action what will do when im clicking in the btn
}






// when i hover on the btn 2 i want to change the content of the btn

//1. where the event should happen
let secondBtn = document.getElementById('secondBtn');

//2. what type of events should happen ?  mouseover

//3. what should happen once the event happen
secondBtn.addEventListener("mouseover", handleHover);

function handleHover() {
    secondBtn.textContent = '😒';  //windows + .
}



//------------------------------------------


//submiting a form:

//once i put data inside this form, once i click on the submit btn, iwant to save the user data, in any place i want


//when i submit the form i want to save the user data



//1. where the event should happen
let formEl = document.getElementById('form');


//2. what type of events should happen ?  submit


//3. what should happen once the event happen?  save the user data
formEl.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
    // im lossing the data, so what i have to do is:
    event.preventDefault();
    console.log(event);
    // the console it will not appear because im loading the page:
    //so i have to prevent the prowser from doing a refresh once im clickin on submit


    // to find it in console   go to event then target than id the value       value: "ahmad"
// you have to put an id to target the value



    // now i want to save the data for the user in a variable


    let Name = event.target.name.value;
    let email = event.target.email.value;


    console.log(Name , email);

}














