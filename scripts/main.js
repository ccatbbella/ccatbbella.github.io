var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === "images/beautiful-book-cute-fashion-flowe-Favim.com-121425.jpg"){
		myImage.setAttribute('src','http://www.bannerblog.com.au/news/picts/funny-pictures-kitten-is-excited-about-bacon.jpg');
	}
	else{
		myImage.setAttribute('src','images/beautiful-book-cute-fashion-flowe-Favim.com-121425.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name:)');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Reading is fun, ' + myName;
}

if(!localStorage.getItem('name')){
  setUserName();
} else{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Reading is fun, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}
