const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
	console.log(date);
	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

	let hrPosition = (hr*360/12)+(min*(360/60)/12);
	let minPosition = (min*360/60)+(sec*(360/60)/60);
	let secPosition = sec*360/60;

function runTheClock(){

	hrPosition = hrPosition+(3/360);
	minPosition = minPosition+(6/60);
	secPosition = secPosition+6;
	
	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);

function doRectClick(){

    var r = Math.floor(Math.random() * 255);

    var g = Math.floor(Math.random() * 255);

    var b = Math.floor(Math.random() * 255);

    document.body.style.background = 'rgb(' + r + ', ' + g + ' , ' + b + ')';

}

var interval = setInterval(doRectClick, 1000);

