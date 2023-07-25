function onScreen(value) {
    if(  document.getElementById('screen').value=="0" || document.getElementById('screen').value=="00")
     {
         document.getElementById('screen').value = "";
     }
     document.getElementById('screen').value += value;
 }
 function clearScreen() {
     document.getElementById('screen').value = "";
 }
 function calculate() {
     var screen = document.getElementById('screen');
     var result = eval(screen.value);
     screen.value = result;
 }
 function del()
 {
     var i;
     var del=document.getElementById('screen');
     del.value=del.value.slice(0,-1);
 }

 function calculatePercentage(partialValue, totalValue) {
    if (typeof partialValue !== 'number' || typeof totalValue !== 'number' || totalValue === 0) {
      return 'Error: Invalid input. Please provide valid numbers and ensure the totalValue is not 0.';
    }
  
    const percentage = (partialValue / totalValue) * 100;
    return percentage;
  }
