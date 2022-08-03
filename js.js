function myTable(){
  
    let number=document.getElementById('tableValue').value;
    let showResult
    document.getElementById('result').innerHTML="";
    for (let index = 1; index <= 10; index++) {
        showResult = number +" x " + index + " = " + number * index;
        result = " <h1> " + showResult + " </h1> ";
             document.getElementById('result'). innerHTML += result;
            }
}