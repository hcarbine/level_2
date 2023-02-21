const input1 = document.getElementById("goombasinput");
const input2 = document.getElementById("bobombsinput");
const input3 = document.getElementById("cheepcheepsinput");
const result = document.getElementById("cost");

function calculate() {
    const input1Value = input1.value;
    const input2Value = input2.value;
    const input3Value = input3.value;

    const input1Result = input1Value * 5;
    const input2Result = input2Value * 7;
    const input3Result = input3Value * 11;

    const total = input1Result + input2Result + input3Result;

    result.value = total;
  }

  input1.addEventListener("input", calculate);
  input2.addEventListener("input", calculate);
  input3.addEventListener("input", calculate);