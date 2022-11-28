// const prompt = require("prompt-sync")()
let speed = prompt("Car speed input:")

function speedDetector () {
    let demeritPoint = (speed - 70) / 5
if (speed <= 70){
    console.log("OK");
} 
else if (demeritPoint > 12) {
    console.log("License suspended");
    //
} else {
    console.log("demirit points:" + demeritPoint);
}
}
speedDetector()