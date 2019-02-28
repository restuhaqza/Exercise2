function equalButton(){
    var valueOfCalculate = document.getElementById("txtCalculation").value;
    document.getElementById("txtResult").value = eval(valueOfCalculate);
}

function addText(val){
    document.getElementById('txtCalculation').value += val;
}

function clearAll(){
  document.getElementById("txtCalculation").value = "";
  document.getElementById("txtResult").value = ""
}