var off_btn = document.getElementById("off");
var on_btn = document.getElementById("on");
var img = document.getElementById("fan");

function fan_off() {
    fan.classList.remove("rotate");
}

function fan_on() {
    fan.classList.add("rotate");
}