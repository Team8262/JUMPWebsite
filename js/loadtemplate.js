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

var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
    current=0;
    ominousSeyoun()
	}

};

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
}
// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);


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
