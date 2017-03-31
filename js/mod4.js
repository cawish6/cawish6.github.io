//
var number = 1;
var outputDiv=document.createElement('div');
document.body.appendChild(outputDiv);
while (number <= 5) {

  console.log(number);
  outputDiv.innerHTML+="<br>"+number+"</br>";
  number++;

}
