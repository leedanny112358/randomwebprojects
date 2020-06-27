const info = new Date();

let hour = info.getHours();
const minutes = info.getMinutes();
if(hour>12){
    hour -= 12;
}
document.getElementById("time").innerHTML = `${hour}:${minutes}`;

document.getElementById("date").innerHTML = 

