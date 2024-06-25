const tombolsaya =document.getElementById("tombolsaya")
const labelsaya=document.getElementById("labelsaya")
const min = 1;
const max = 10;
let nomorAcak;

tombolsaya.onclick = function(){
nomorAcak = Math.floor ( Math.random()  * max ) + min;
labelsaya.textContent = nomorAcak;

}