const canvasWidthSlider = document.getElementById('canvasWidth');
const canvasHeightSlider = document.getElementById('canvasHeight');
const displayWidth = document.getElementById('c');
const displayHeight = document.getElementById('h');
const defaultButton = document.getElementById('defaultSize');
const closeSettings = document.getElementById('closeSettings');
const divSettings = document.getElementById('settings'); 

canvasWidthSlider.addEventListener('input', function(){
  displayWidth.innerHTML = ' ' + canvasWidthSlider.value;
  
});
canvasHeightSlider.addEventListener('input', function(){
  displayHeight.innerHTML = ' ' + canvasHeightSlider.value;
});

canvasWidthSlider.addEventListener('change', function(){
  canvas.width = canvasWidthSlider.value;
});
canvasHeightSlider.addEventListener('change', function(){
  canvas.height = canvasHeightSlider.value;
});

defaultButton.addEventListener('click', function(){
  canvas.height = 400;
  canvas.width = 400;
  canvasHeightSlider.value = 400;
  canvasWidthSlider.value = 400;
  displayWidth.value = 400;
  displayWidth.innerHTML = ' ' + canvasWidthSlider.value;
  displayHeight.innerHTML = ' ' + canvasHeightSlider.value;
});

var num = 150;
closeSettings.addEventListener('click', function(){
  if(myForm.style.display === ''){
    closingSettings();
  }else {
    closeSettings.innerHTML = '&gt;';
    myForm.style.display = '';
    divSettings.style.overflow = 'hidden';
    closeSettings.style.right = '3px';
    openSettings();
  }
})
var goodbye;
function closingSettings(){
  if(num >= 150){
    goodbye = setInterval(closingSettings,10);
  }
  if(num <= 20){
    clearInterval(goodbye);
    closeSettings.innerHTML = '&gt; <span id="showStopper">show settings</span>';
    closeSettings.style.right = '-15px';
    myForm.style.display = 'none';
    divSettings.style.overflow = 'visible';
    
  } else {
  divSettings.style.width = num + 'px';
  num -= 2;
  }
}
function openSettings(){
  if(num <= 20){
    goodbye = setInterval(openSettings,10);
  }
  if(num >= 150){
    clearInterval(goodbye);
    closeSettings.innerHTML = '&times;'
    
  } else {
    divSettings.style.width = num + 'px';
    num += 2;
  }
}