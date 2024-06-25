const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const labelHitung = document.getElementById("labelHitung");
let hitung = 0;

increaseBtn.onclick = function(){
    hitung++;
    labelHitung.textContent = hitung;
}

decreaseBtn.onclick = function(){
    hitung--;
    labelHitung.textContent = hitung;
}

resetBtn.onclick = function(){
    hitung = 0;
    labelHitung.textContent = hitung;
}