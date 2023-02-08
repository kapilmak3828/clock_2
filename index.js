const sechand = document.querySelector(".sec-hand");
const minhand = document.querySelector(".min-hand");
const hourhand = document.querySelector(".hour-hand");
const clock = document.querySelector(".clock");
function settime(){
const now = new Date();
const seconds = now.getSeconds();
const secindeg = ((seconds/60)*360) + 90;
sechand.style.transform = `rotate(${secindeg}deg)`;

const minutes = now.getMinutes();
const minindeg = ((minutes/60)*360) + 90;
minhand.style.transform = `rotate(${minindeg}deg)`;

const hour = now.getHours();
const hourindeg = ((hour/12)*360) + 90;
hourhand.style.transform = `rotate(${hourindeg}deg)`;

console.log(hour);
console.log(hourindeg);


clock.style.borderColor = `rgba(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256} , 0.5)`;


}

setInterval(settime , 1000);