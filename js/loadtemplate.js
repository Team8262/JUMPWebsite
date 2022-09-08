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
