const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function clock(){

    const now = new Date();

    const hr = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    const hrDeg = (hr % 12) * 30 + min * 0.5;
    const minDeg = min * 6;
    const secDeg = sec * 6;

    hour.style.transform =
    `translateX(-50%) rotate(${hrDeg}deg)`;

    minute.style.transform =
    `translateX(-50%) rotate(${minDeg}deg)`;

    second.style.transform =
    `translateX(-50%) rotate(${secDeg}deg)`;

}

clock();
setInterval(clock,1000);