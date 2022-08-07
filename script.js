let max = 0;
let mid = 0;
let min = 0;

function convert_to_float(b) {
var floatValue = +(b);
return floatValue;
}
function round(b){
  return Math.round(b * 100) / 100;

}
const Calculate = () => {
  let avgEDPI = convert_to_float(document.getElementById("avgEDPI").value);
  let DPI = convert_to_float(document.getElementById("DPI").value);
  mid = avgEDPI/DPI
  document.getElementById("mid").innerHTML = round(mid);
  max = mid * 1.5;
  document.getElementById("max").innerHTML = round(max);
  min = mid / 2;
  document.getElementById("min").innerHTML = round(min);
}

document.getElementById("calc").addEventListener("click", ()=>{
  console.log("Calculated")
  Calculate()
  
})

document.getElementById("trashHIGH").addEventListener("click", ()=>{
  max = mid;
  mid = (mid + min) / 2
  document.getElementById("mid").innerHTML = round(mid);
  document.getElementById("max").innerHTML = round(max);
  document.getElementById("min").innerHTML = round(min);
  
})
document.getElementById("trashMID").addEventListener("click", ()=>{
  mid = (max + min) / 2
  document.getElementById("mid").innerHTML = round(mid);
  document.getElementById("max").innerHTML = round(max);
  document.getElementById("min").innerHTML = round(min);
  
})
document.getElementById("trashLOW").addEventListener("click", ()=>{
  min = mid;
  mid = (mid + max) / 2
  document.getElementById("mid").innerHTML = round(mid);
  document.getElementById("max").innerHTML = round(max);
  document.getElementById("min").innerHTML = round(min);
  
})


