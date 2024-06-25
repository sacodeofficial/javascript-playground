const DescreaseBtn = document.getElementById("DescreaseBtn" );
const ResetBtn = document.getElementById("Reset" );
const IncreaseBtn= document.getElementById("IncreaseBtn");
const labelHitung= document.getElementById("labelHitung");
let  hitung = 0;

IncreaseBtn.onclick = function() {
hitung++;
console.log(hitung);

labelHitung.textContent = hitung;
}

DescreaseBtn.onclick = function() {
hitung--;
console.log(hitung);

labelHitung.textContent = hitung;
}

ResetBtn.onclick = function() {
hitung = 0;
console.log(hitung);

labelHitung.textContent = hitung;
}