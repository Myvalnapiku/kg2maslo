function calculateButter() {
let kg = parseFloat(document.getElementById("kgInput").value);

if (isNaN(kg) || kg < 0) {
document.getElementById("result").innerText = "Zadej platnou váhu!";
return;
}

let grams = kg * 1000;
let butterCubes = Math.round(grams / 250);

document.getElementById("result").innerText = butterCubes;
}