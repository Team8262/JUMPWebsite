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
    for(var i =0;i<50;i++){
      setTimeout(function(){nyanZoom()}, i*200)
      if(i%3==0){setTimeout(function(){var nAudio = new Audio("../assets/audio/carnoise.mp3");nAudio.preservesPitch=false;nAudio.playbackRate=1+(Math.random()-0.5)*0.2;nAudio.play()}, i*200+(Math.random()*10-5)*25)}}
	}
};

function nyanZoom(){
  var nImage = document.createElement("div")
  var nContain = document.createElement("div")
  var nOutOut = document.createElement("div")
  console.log("mm")
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

function konami(){
  //lmao this is such a cool and real function
  //but still try it out
  //nyanHandler => nyanZoom()
  //
}
// Listen for keydown events
document.addEventListener('keydown', konamiHandler, false);
document.addEventListener('keydown', nyanHandler, false);



const blackScreen = document.createElement("div")
blackScreen.style="position:fixed;top:0;width:100%;height:100%;background-color:#252626;z-index:1031"
function flicker(){
  var rand = Math.floor(Math.random() * 10)
  console.log("flicker")
  document.body.appendChild(blackScreen)
  setTimeout(function(){blackScreen.remove()}, 50)
  setTimeout(flicker, rand*4000)
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
