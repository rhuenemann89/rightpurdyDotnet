document.getElementById("start_pump").onclick = function() {load_pump()};

function load_pump() {
    document.getElementById("pump").src = "https://rawgit.com/rhuenemann89/rightpurdyDotnet/master/referenced/pump/iframePump.html";
}

document.getElementById("start_astro").onclick = function() {load_astro()};

function load_astro() {
    document.getElementById("astro").src = "https://rawgit.com/rhuenemann89/rightpurdyDotnet/master/referenced/astro.html";
}