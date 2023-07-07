const uselessButton = document.getElementById("uselessButton");
uselessButton.onclick = function()
{
let numberOfClicks = parseInt(document.getElementById("numberOfClicks").innerText);
numberOfClicks++
document.getElementById("numberOfClicks").innerText = numberOfClicks;
}
const theGreatResetButton = document.getElementById("theGreatResetButton")
theGreatResetButton.onclick = function()
{
document.getElementById("numberOfClicks").innerText = 0
}