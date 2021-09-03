$(function() {
  $(".p-main__section--aboutImageItem:not(:first-child)").hide();
  setInterval(function() {
    $(".p-main__section--aboutImageItem:first-child").fadeOut("slow").next(".p-main__section--aboutImageItem").fadeIn("slow").end().appendTo(".p-main__section--aboutImageSection");
  },5000);

  $(".p-main__section--drinkImageItem:not(:first-child)").hide();
  setInterval(function() {
    $(".p-main__section--drinkImageItem:first-child").fadeOut("slow").next(".p-main__section--drinkImageItem").fadeIn("slow").end().appendTo(".p-main__section--drinkImageSection");
  },5000);

  $(".p-main__section--foodImageItem:not(:first-child)").hide();
  setInterval(function() {
    $(".p-main__section--foodImageItem:first-child").fadeOut("slow").next(".p-main__section--foodImageItem").fadeIn("slow").end().appendTo(".p-main__section--foodImageSection");
  },5000);

  $(".p-main__section--accessImageItem:not(:first-child)").hide();
  setInterval(function() {
    $(".p-main__section--accessImageItem:first-child").fadeOut("slow").next(".p-main__section--accessImageItem").fadeIn("slow").end().appendTo(".p-main__section--accessImageSection");
  },5000);

  $(".p-main__section--newsImageItem:not(:first-child)").hide();
  setInterval(function() {
    $(".p-main__section--newsImageItem:first-child").fadeOut("slow").next(".p-main__section--newsImageItem").fadeIn("slow").end().appendTo(".p-main__section--newsImageSection");
  },5000);


});

