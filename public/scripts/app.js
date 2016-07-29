/*

state = 0: digital
state = 1: analog

*/

// Modelo / estado

var state = 0;

var hour1 = 2;
var hour2 = 3;
var minute1 = 5;
var minute2 = 9;
var seconds = 45;
/*
var secteller = document.getElementById("secondteller");
var minteller = document.getElementById("minuteteller");
var hourteller = document.getElementById("hourteller");
*/


var canvas=document.getElementById("test");

var clockController= document.getElementById("selector");

clockController.addEventListener("change", function() {
    if (clockController.value=== "digital") {
      state=0;
    }else if(clockController.value === "analogo"){
      state=1;
    }
    canvas.innerHTML = render2(state);
});

function render2(state){
  var html = "";
  if (state==0) {
    html += '<div class="display">';
    html += '<div class="number hour1">'+ hour1 +'</div>';
    html += '<div class="number hour2">'+ hour2 +'</div>';
    html += '<div class="separation">'+ seconds +'</div>';
    html += '<div class="number minute1">'+ minute1 +'</div>';
    html += '<div class="number minute2">'+ minute2 +'</div>';
    html += '<div style="clear:both;"></div>';
    html += '</div>';

    //calcular el tiempo continuamente
  seconds+=1;
  if(seconds===60){
    seconds=0;
    minute2+=1;
  }
  if(minute2>9){
    minute1+=1;
    minute2=0;
  }
  if (minute1>5) {
    hour2+=1;
    minute1=0;
    minute2=0;
  }
  if (hour1===2) {
    if (hour2>3) {
      hour2=0;
      hour1=0;
      minute2=0;
      minute1=0;
    }
  }

  }
  else if (state===1) {

  	html += '<div id="analog-clock">';

    html += '<div class="digit d1">1</div>';
    html += '<div class="digit d2">2</div>';
    html += '<div class="digit d3">3</div>';
    html += '<div class="digit d4">4</div>';
    html += '<div class="digit d5">5</div>';
    html += '<div class="digit d6">6</div>';
    html += '<div class="digit d7">7</div>';
    html += '<div class="digit d8">8</div>';
    html += '<div class="digit d9">9</div>';
    html += '<div class="digit d10">10</div>';
    html += '<div class="digit d11">11</div>';
    html += '<div class="digit d12">12</div>';

    html += '<div class="hourteller">';
    html += '<div class="show hour"></div>';
    html += '<div class="no-show hour"></div>';
    html += '</div>';
    


    html += '<div class="minuteteller">';
    html += '<div class="show minute"></div>';
    html += '<div class="no-show minute"></div>';
    html += '</div>';
    

    html += '<div class="secondteller">';
    html += '<div class="show second"></div>';
    html += '<div class="no-show second"></div>';
    html += '</div>';
    
    html += '</div>';
/*
    secteller.style.transform='rotate('+ seconds* 6 +'deg)';
    minteller.style.transform='rotate('+ (minute1 + minute2) * 6 +'deg)';
    hourteller.style.transform='rotate('+ (hour1 + hour2) * 30 +'deg)';
*/
    //calcular el tiempo continuamente
	  seconds+=1;
	  if(seconds===60){
	    seconds=0;
	    minute2+=1;
	  }
	  if(minute2>9){
	    minute1+=1;
	    minute2=0;
	  }
	  if (minute1>5) {
	    hour2+=1;
	    minute1=0;
	    minute2=0;
	  }
	  if (hour1===2) {
	    if (hour2>3) {
	      hour2=0;
	      hour1=0;
	      minute2=0;
	      minute1=0;
	    }
	  }

  }
  return html; 
}

function r(){
  canvas.innerHTML=render2(state);
}
r();
setInterval(r,1000);