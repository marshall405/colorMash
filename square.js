// CANVAS WIDTH AND HEIGHT = 400px
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const button = document.getElementById('mashColors');
  const color1 = document.getElementById('firstColor');
  const color2 = document.getElementById('secondColor');
  color1.focus();
  const checkedCircle = document.getElementById('circle');
  const checkedSquare = document.getElementById('square');
  const myForm = document.getElementById('myForm');
  const userNum = document.getElementById('slider');
  const displayNum = document.getElementById('sizeSetting');
  const randomColorButton = document.getElementById('randomColors');
  button.addEventListener('click', function(){
    if(color1.value && color2.value){
        mashColors();
      } else if(color2.value) {
        color1.focus();
      } else if(color1.value) {
        color2.focus();
      }else {
        //do nothing
      }
  });
  
  checkedCircle.addEventListener('click', function(){
    if(checkedCircle.checked){
      checkedSquare.checked = false;
    }
  });
  checkedSquare.addEventListener('click', function(){
    if(checkedSquare.checked){
      checkedCircle.checked = false;
      mashColors();
    }
  });
  
  userNum.addEventListener('input', function(){
    displayNum.innerHTML = ' ' + userNum.value;
  });
color2.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
      if(color1.value && color2.value){
        return mashColors();
      } else if(color2.value) {
        color1.focus();
      } else {
        //do nothing
      }
    }
  });

  color1.addEventListener('keydown',function(e){
    if(e.key === 'Enter'){
      if(color1.value && color2.value){
        return mashColors();
      }else if(color1.value){
        color2.focus();
      } else {
        //do nothing
      }
    }
  });


  function Square(){
      this.width = 1;
      this.height = 1;
      this.x;
      this.y;
      this.color;
    }
  Square.prototype.drawSquare = function(){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);  
    }
  
  function Circle(){
      this.x = canvas.width/2;
      this.y = canvas.height/2;
      this.radius;
      this.color;
    }
    Circle.prototype.drawCircle = function(){
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
      ctx.stroke();
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.strokeStyle = this.color;
      ctx.stroke();
    }
    
    var randomColorOrNot = false;
  randomColorButton.addEventListener('click',function(){
    randomColorOrNot = true;
    mashColors();
  });


  function randomNumber(){
    return Math.floor(Math.random() * (255 - 1)) + 1;
  }
  function randomColorGenerator(){
    var color = 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')';
    return color;
  }

    var firstRandomColor;
    var secondRandomColor;
    var arr = [];
  function mashColors(){
    arr = [];
    var canvasX;
    var canvasY;
    firstRandomColor  = randomColorGenerator();
    secondRandomColor = randomColorGenerator();
    if(checkedSquare.checked){
      for(var i = 0; i < (canvas.width * canvas.height); i++){
        arr.push(new Square());
      }
      canvasX = 0;
      canvasY = 0;
      arr.forEach(function(item){
        if(canvasX >= canvas.width){
          canvasY += 1;
          canvasX = 0;
        }
        item.x = canvasX;
        item.y = canvasY;

        if(randomColorOrNot){
          item.color = item.x % 2 === 0 ? firstRandomColor : secondRandomColor;
        } else {
          item.color = item.x % 2 === 0 ? color1.value.toLowerCase() : color2.value.toLowerCase();
        }
        item.drawSquare();
        canvasX += 1;
      });
    } else { // create instances of Circle
      var counter = canvas.width;
      for(var i = 0; i < canvas.width; i++){
        arr.push(new Circle());
      }

      arr.forEach(function(item){
        if(counter < 0){
          counter = 0;
        }
        item.radius = counter;
        if(randomColorOrNot){
          item.color = item.radius % 2 === 0 ? firstRandomColor : secondRandomColor;
        } else {
          item.color = item.radius % 2 === 0 ? color1.value.toLowerCase() : color2.value.toLowerCase();
        }
        item.drawCircle();
        counter -= 1;
      });
      userNum.addEventListener('input', function(){
        counter = canvas.width;
        arr.forEach(function(item){
          if(counter < 0){
          counter = 0;
          }
          item.radius = counter;
          item.drawCircle();
          counter -= userNum.value;
        });
      });
    }
    userNum.value = 1;
    displayNum.innerHTML = userNum.value;
    color1.value = '';
    color2.value = '';
    color1.focus();
    randomColorOrNot = false;
  }
