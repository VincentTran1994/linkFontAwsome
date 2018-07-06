document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady(){
  // reducing texts in cards
  var fullText=[];
  var temp = [];
  for(var  i = 0;i < $("p.card-text").length; i++){
    fullText[i] = $("p.card-text")[i].innerHTML;
    temp[i] = $("p.card-text")[i];
    temp[i].innerHTML = fullText[i].substring(0, 200) + " <span><br>...</span>";

    $("p.card-text")[i].addEventListener("click", function(){
      $(this)["0"].innerHTML = fullText[temp.indexOf(this)];
    });

  }

}
