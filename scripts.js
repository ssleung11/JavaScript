//mouse hover example - add the css
const tip = document.getElementById('tooltip');
tip.addEventListener("mouseover", function() { 
// get tool tip to appear 
// console.log('hello')
document.getElementById("tooltiptext").style.visibility = "visible";




});
tip.addEventListener("mouseout", function() {
// get tool tip to disappear 
// console.log('there')

document.getElementById("tooltiptext").style.visibility = "hidden";

});

