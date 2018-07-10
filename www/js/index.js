document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady(){
  //scroll down and back-to-top button
  window.onscroll = function(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
      $('i.back-to-top').css("display","block");
    }
    else{
      $('i.back-to-top').css("display","none");
    }
  }
  //scroll back to the back while touching
  $('i.back-to-top').click(function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  //   $('body').animate({
  //     scrollTop : 0
  //   },
  //     'slow');
  });

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
  document.getElementsByClassName('submit')[0].addEventListener("click", function(){
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
