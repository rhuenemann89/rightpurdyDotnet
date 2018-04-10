document.getElementById("start_pump").onclick = function() {load_pump()};

function load_pump() {
    document.getElementById("pump").src = "https://rawgit.com/rhuenemann89/rightpurdyDotnet/master/referenced/pump.html";
    document.getElementById("astro").src = "astro.png";
    var x = document.getElementById("start_pump");
    x.style.display = "none";
    var x = document.getElementById("start_astro");
    x.style.display = "block";
}

document.getElementById("start_astro").onclick = function() {load_astro()};

function load_astro() {
    document.getElementById("astro").src = "https://rawgit.com/rhuenemann89/rightpurdyDotnet/master/referenced/astro.html";
    document.getElementById("pump").src = "pumpPic.png";
    var x = document.getElementById("start_astro");
    x.style.display = "none";
    var x = document.getElementById("start_pump");
    x.style.display = "block";
}