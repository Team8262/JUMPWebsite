var loaded = false


$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = '../templates/' + $(this).data('include') + '.html'
      $(this).load(file)
    })
    loaded=true
    console.log("Templates loaded")
  })

function secretCode(){
  fetch('../templates/confidential.html')
  .then((result) => { return result.text(); })
.then((content) => { secretFunc(content) });

}

function secretFunc(mm){
  var newDoc = document.open("text/html", "replace");
  newDoc.write(mm);
  newDoc.close();
}

var konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var konamiCurrent = 0;

var konamiHandler = function (event) {
	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (konamiPattern.indexOf(event.key) < 0 || event.key !== konamiPattern[konamiCurrent]) {
		konamiCurrent = 0;
		return;
	}
	// Update how much of the pattern is complete
	konamiCurrent++;

	// If complete, alert and reset
	if (konamiPattern.length === konamiCurrent) {
    konamiCurrent=0;
    ominousSeyoun()
	}
};

var kenjiPattern = ['k','e','n','j','i'];
var kenjiCurrent = 0;

var kenjiHandler = function (event) {
	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (kenjiPattern.indexOf(event.key) < 0 || event.key !== kenjiPattern[kenjiCurrent]) {
		kenjiCurrent = 0;
		return;
	}
	// Update how much of the pattern is complete
	kenjiCurrent++;

	// If complete, alert and reset
	if (kenjiPattern.length === kenjiCurrent) {
    kenjiCurrent=0;
    ominousKenji()
	}
};

var translatePattern = ['n','e','w'];
var translateCurrent = 0;

var translateHandler = function (event) {
	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (translatePattern.indexOf(event.key) < 0 || event.key !== translatePattern[translateCurrent]) {
		translateCurrent = 0;
		return;
	}
	// Update how much of the pattern is complete
	translateCurrent++;

	// If complete, alert and reset
	if (translatePattern.length === translateCurrent) {
    translateCurrent=0;
    accessibleWebsite()
	}
};

var shaanPattern = ['s','h','a','a','n'];
var shaanCurrent = 0;

var shaanHandler = function (event) {
	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (shaanPattern.indexOf(event.key) < 0 || event.key !== shaanPattern[shaanCurrent]) {
		shaanCurrent = 0;
		return;
	}
	// Update how much of the pattern is complete
	shaanCurrent++;

	// If complete, alert and reset
	if (shaanPattern.length === shaanCurrent) {
    document.body.appendChild(shaan)
    runShaan();	}
};

var nyanPattern = ['n', 'y', 'a', 'n'];
var nyanCurrent = 0;

var nyanHandler = function (event) {
	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (nyanPattern.indexOf(event.key) < 0 || event.key !== nyanPattern[nyanCurrent]) {
		nyanCurrent = 0;
		return;
	}
	// Update how much of the pattern is complete
	nyanCurrent++;
	// If complete, alert and reset
	if (nyanPattern.length === nyanCurrent) {
    nyanCurrent=0;
    console.log("nyan")
    for(var i =0;i<50;i++){
      setTimeout(function(){nyanZoom()}, i*200)
      if(i%3==0){setTimeout(function(){var nAudio = new Audio("../assets/audio/carnoise.mp3");nAudio.preservesPitch=false;nAudio.playbackRate=1+(Math.random()-0.5)*0.2;nAudio.play()}, i*200+(Math.random()*10-5)*25)}}
	}
};

function nyanZoom(){
  var nImage = document.createElement("div")
  var nContain = document.createElement("div")
  var nOutOut = document.createElement("div")
  setTimeout(function(){
    nImage.style="animation:jitter 0.5s linear infinite;width:300px;height:200px;background: url('../assets/images/nyan.jpg');background-size:cover"
    nContain.style="animation:translate 3s linear;"
    nOutOut.style="position:fixed;top:"+(Math.floor(Math.random()*10)*10-20)+"%;animation:upDown 0.2s alternate infinite ease-in-out;z-index:1031"

    nContain.appendChild(nImage)
    nOutOut.appendChild(nContain)
    document.body.appendChild(nOutOut);
    setTimeout(function(){
      nOutOut.remove()
    }, 3000)
  }, Math.floor(Math.random*5)*500)

}

function ominousSeyoun(){
  console.log("Konami triggered")
  var sImage = document.createElement("div")
  var audio = new Audio('../assets/audio/ofortuna.mp3');
  var sContain = document.createElement("div")
  audio.play();
  setTimeout(function(){
    sImage.style="animation:grow 50s linear;width:300px;height:200px;background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/images/seyoun.jpg');background-size:cover"
    sContain.style="position:fixed;top:35%;left:50%;margin-left:-150px;animation:jitter 0.1s linear infinite;z-index:1031"

    sContain.appendChild(sImage)
    document.body.appendChild(sContain);
  }, 500)

  audio.addEventListener("ended", function() 
  {
    sImage.remove()
  });


}

function ominousKenji(){
  console.log("kenji triggered")
  var kImage = document.createElement("div")
  var audio = new Audio('../assets/audio/darksoulsboss.mp3');
  var kContain = document.createElement("div")
  audio.play();
  setTimeout(function(){
    kImage.style="animation:grow 60s linear;width:300px;height:400px;background: url('../assets/images/kenji.jpg');background-size:cover"
    kContain.style="position:fixed;top:35%;left:50%;margin-left:-150px;animation:jitter 0.1s linear infinite;z-index:1031"
 
    kContain.appendChild(kImage)
    document.body.appendChild(kContain);
  }, 500)

  audio.addEventListener("ended", function() 
  {
    kImage.remove()
  });


}

function konami(){
  //lmao this is such a cool and real function
  //but still try it out
  //nyanHandler => nyanZoom()
  //kenjiHandler => ominousKenji()
  //
}
// Listen for keydown events
document.addEventListener('keydown', konamiHandler, false);
document.addEventListener('keydown', nyanHandler, false);
document.addEventListener('keydown', kenjiHandler, false);
document.addEventListener('keydown', shaanHandler, false);
document.addEventListener('keydown', translateHandler, false);


function loadLang(code){
  history.pushState("", document.title, window.location.pathname
  + window.location.search);
      window.location = window.location + '#googtrans(en|'+code+')';
      window.location.reload();
  }; 

function accessibleWebsite(){
  var codes = ['fr','id','es','it','de','ja','lv','ms','mk','zu','ro','ru','ko','lb']
  var newLang = codes[Math.floor(Math.random()*codes.length)]
  console.log("Now " + newLang);
  loadLang(newLang);
}






const blackScreen = document.createElement("div")
blackScreen.style="position:fixed;top:0;width:100%;height:100%;background-color:#252626;z-index:1031"
function flicker(){
  var rand = Math.floor(Math.random() * 10)
  console.log("flicker")
  document.body.appendChild(blackScreen)
  setTimeout(function(){blackScreen.remove()}, 50)
  setTimeout(flicker, rand*4000)
}


const shaan = document.createElement("div")
const shaanImg = document.createElement("img")
shaanImg.src="../assets/images/shaan.png"
shaanImg.style="animation:bob 1s alternate ease-in-out infinite;"
shaanImg.style.width="auto";
shaanImg.style.height="60vh";

shaan.style="position:fixed;bottom:50px;z-index:99999;animation:crawl 80s linear infinite;"
shaan.appendChild(shaanImg)

function runShaan(){
  console.log("Shaan?")
  //Figure out later
}


function load(addr, newPage){
  if(newPage){
    window.open('https://' + addr, '_blank').focus();
  }else{
    window.location=addr
  }
}

function randInt(max) {
  return Math.floor(Math.random() * max);
}