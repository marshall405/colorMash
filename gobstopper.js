const gobstopperButton = document.getElementById('gobstopper');

gobstopperButton.addEventListener('click', gobStopper);
var gobArray = [];
var gobstopperAccess = false;
var gobRadius;
function gobStopper(){
  
  if(gobstopperAccess){
    gobRadius = canvas.width;
    gobArray.forEach(function(item){
      if(gobRadius < 0){
        gobRadius = 0;
      }
      item.radius = gobRadius;
      item.drawCircle();
      gobRadius -= userNum.value; 
    });
    gobstopperAccess = false;
  } else {
    userNum.value = 1;
    displayNum.innerHTML = userNum.value;
    gobArray = [];
    gobRadius = canvas.width;
    for(let i = 0; i < canvas.width; i++){
      gobArray.push(new Circle());
    }
    gobArray.forEach(function(item){
      if(gobRadius < 0){
        gobRadius = 0;
      }
      item.radius = gobRadius;
      gobRadius--;
      item.color = randomColorGenerator();
      item.drawCircle();
    });
    userNum.addEventListener('input',function(){
      gobstopperAccess = true;
      gobStopper();
    });
  }
  
  // Only edit below this line (12/8/2017)
  
}