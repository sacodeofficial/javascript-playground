const tombolSaya = document.getElementById("tombolSaya");
const labelSaya = document.getElementById("labelSaya");
const min = 1;
const max = 10;
let nomorAcak;

tombolSaya.onclick = function(){
    nomorAcak = Math.floor(Math.random() * max) + min;
    labelSaya.textContent = nomorAcak;
}