var student ={
  name: "",
  type: "student"
};

document.addEventListener ('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
  document.getElementById("name").addEventListener("keyup", keyup);
}

function keyup(event){
  calculatorNumericOutput();
}

function calculatorNumericOutput {
  student.name = document.getElementById("name").value;

var totalNameValue = 0;
for (var i = 0; i < student.name.length; i++) {
  totalNameValue += studnet.name.charCodeAt(i);
}
//insert result into page
var ouput = "Total count of the name is " + totalNameValue;
document.getElementById('output').innerText = output;
}
