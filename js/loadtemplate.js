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
    ominousSeyoun()
	}

};

function ominousSeyoun(){
  var sImage = document.createElement("div")
  var audio = new Audio('../assets/audio/ofortuna.mp3');
  audio.play();
  setTimeout(function(){
    sImage.style="position:fixed;top:35%;left:40%;animation:grow 50s linear;width:300px;height:200px;z-index:1031;background: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/images/seyoun.jpg');background-size:cover"
    
    document.body.appendChild(sImage);
  }, 500)

  audio.addEventListener("ended", function() 
  {
    sImage.remove()
  });


}

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);


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
