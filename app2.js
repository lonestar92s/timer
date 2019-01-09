//let x;
let time = 15;
// let x = setTimeout(function(){ timer(); }, 1000);

let timer = function() {
    x = setInterval(function() {
        if(time > 0)
        time -= 1
        document.getElementById("timer").innerHTML = time + " seconds";
    }, 1000)
}

let stopTimer = function() {
    clearTimeout(x)
}



$("#start").click(function(){
 	timer()
 })

$("#stop").click(function(){
 	stopTimer()
 })