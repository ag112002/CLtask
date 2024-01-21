function updateClock() {
   const now = new Date();
   const hours = now.getHours() || 12;   
   const minutes = now.getMinutes();
   const seconds = now.getSeconds();
   const hourAngle = (hours % 12) * 30 + minutes * 0.5;
   const minuteAngle = minutes * 6;
   const secondAngle = seconds * 6;
   rotateElement('hourLine', hourAngle, hours);
   rotateElement('minuteLine', minuteAngle, minutes);
   rotateElement('secondLine', secondAngle, seconds);
 }

 setInterval(updateClock, 1000);
 updateClock();

 function rotateElement(elementId, angle, value) {
   const element = document.getElementById(elementId);
   element.style.transform = `rotate(${angle}deg)`;
   const clockNumbers = element.getElementsByClassName('time');
   for (const clockNumber of clockNumbers) {
     clockNumber.innerHTML = value;
     clockNumber.style.transform = `rotate(${-angle}deg)`;
   }
 }