$(document).ready(function(){


  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 30){
      $('.header').css({'background':'#6C5CE7','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
    }else{
      $('.header').css({'background':'none','box-shadow':'none'});
    }
  });


  $('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp();
    $(this).next('.accordion-body').slideDown();
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
  });



});



/**
 * Created by ccania.
 */
var para = document.querySelectorAll(".ellipsis");

for (var i = 0; i < para.length; i++) {
    var paraTxt = para[i].innerHTML;

    if (paraTxt.length > 200) {

        var newPara = document.createElement("p"); //create new paragraph element
        newPara.className = "ellipsis-trunc";
        var newParaTxt = document.createTextNode(paraTxt.substring(0,200)+"...");
        //create new text node

        newPara.appendChild(newParaTxt); //bind new text node to new element
        para[i].replaceWith(newPara);

    } else {
        console.log("I've got nothing");
    }

}


