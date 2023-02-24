var count1 = parseInt(localStorage.getItem('count1')) || 0;
var count2 = parseInt(localStorage.getItem('count2')) || 0;

var btn1 = document.getElementById("click1");
var btn2 = document.getElementById("click2");
var disp1 = document.getElementById("display1");
var disp2 = document.getElementById("display2");

disp1.innerHTML = count1;
disp2.innerHTML = count2;

btn1.onclick = function () {
  count1++;
  disp1.innerHTML = count1;
  localStorage.setItem('count1', count1);
};

btn2.onclick = function () {
  count2++;
  disp2.innerHTML = count2;
  localStorage.setItem('count2', count2);
};