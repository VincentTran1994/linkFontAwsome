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

  // contact form
  $('button.submit')[0].addEventListener("click", function(){
    var email = $('input.email').get(0).value,
        phoneNumber = $('input.phone').get(0).value,
        body = ('textarea.body').get(0).value;

    if(!email || !phoneNumber || !body){
      alertify.error("Please filled all the blanks!");
    }
    else{
      $.ajax({
        type: "POST",
        url: "http://formspree.io/vincenttran2601@gmail.com",
        data: {
          name: email,
          phone: phoneNumber,
          message: body
        },
        success: success,
        dataType: "json"
      });
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success("Message sent!");
    }
  });
}
