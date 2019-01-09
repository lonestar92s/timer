let time = 11;
let runningId;

let timer = function(){
	runningId = setInterval(function(){ 
   		time -= 1
  	document.getElementById("timer").innerHTML = time +" seconds";
	 }, 1000)

	
}
// let x = setTimeout(function(){ 
//  running = true 
// 	timer();
// }, 1000);

let stopTimer = function(timerId){
	clearInterval(timerId)
}
	
// console.log(x)
$("#start").click(function(){
	if (time <= 0) {
		stopTimer()
	}
	timer()
})

// console.log(running)

function listentForTime(){
	if (time <= 9) {
		stopTimer()
	}
}