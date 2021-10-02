//DOM Elements
var time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  userName = document.getElementById("name"),
  focus = document.getElementById("focus");
date = document.getElementById("date");

//Displays Date
function showDate() {
  var today = new Date(); //retrieves date
  var currentDate =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate(); //return date according to local time
  date.innerHTML = currentDate;
}

//Show Time
function showTime() {
  var today = new Date(),
    hour = today.getHours(), //return the hour according to local time
    min = today.getMinutes(), //returns minutes according to local time
    sec = today.getSeconds(); //return seconds according to local time

  var amOrPm = " ";

  //Set AM or PM
  if (hour >= 12) {
    amOrPm = "pm";
  } else {
    amOrPm = "am";
  }
  //12 hr format
  hour = hour % 12 || 12;

  //Output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}${" " + amOrPm}`;
  //template literals allow for embedded expressions - line abouve accesses hour variable and addZero function
  setTimeout(showTime, 1000);
}

//Add zeros
function addZero(num) {
  var parsed = parseInt(num);
  if (parsed < 10) {
    return "0" + num;
  } else {
    return "" + num;
  }
}

//Set Background & Greeting
function displayBackground() {
  var today = new Date("10 September 2014 13:30:00");
  hour = today.getHours();

  if (hour < 12) {
    //morning
    document.body.style.backgroundImage = "url('img/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    //afternoon
    document.body.style.backgroundImage = "url('img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
    document.body.style.opacity = "1";
  } else {
    document.body.style.backgroundImage = "url('img/night.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

//Get name
function getName() {
  if (localStorage.getItem("name") === null) {
    userName.textContent = "[Enter Name]";
  } else {
    userName.textContent = localStorage.getItem("name");
  }
}

//Set Name
function setName(event) {
  if (event.type === "keypress") {
    //Make sure enter is pressed
    if (event.which === 13) {
      localStorage.setItem("name", event.target.innerText);
      userName.blur(); //removes focus from this element
    }
  } else {
    localStorage.setItem("name", event.target.innerText);
    //localStorage stores data with no expiration date
  }
}

//Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

//Set Focus
function setFocus(event) {
  if (event.type === "keypress") {
    //Make sure enter is pressed
    if (event.which === 13) {
      localStorage.setItem("focus", event.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", event.target.innerText);
  }
}

userName.addEventListener("keypress", setName);
userName.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//Runs functions
showTime();
showDate();
displayBackground();
getName();
getFocus();
