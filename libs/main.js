$(document).ready(function(){

  //выпадающий блок "о нас"
  $("#about_us").click(function(){
    $(".about-ul").slideToggle(100);
  });

// выпадающее меню
  $("#justify_nav").click(function(){
    $(".menu").fadeToggle(500);
  });

  // выпадающий поиск
  $("#stuff_menu_search").click(function(e){
    e.preventDefault();
    $(".stuff_menu_search_field").slideToggle(100);
  });

    //Плавный скролл до блока .div по клику на .scroll
  //Документация: https://github.com/flesler/jquery.scrollTo
  $("#fa-angle-down").click(function() {
    $.scrollTo($("#main_about"), 800, {
      offset: 0
    });
  });

  // показать кнопку наверх
  $(window).scroll(function() {
    if ($(this).scrollTop() > 350){
      $('#top').fadeIn(100);
    }
    else{
      $('#top').fadeOut(100);
    }
  });

  //Кнопка "Наверх"
  //Документация:
  //http://api.jquery.com/scrolltop/
  //http://api.jquery.com/animate/
  $("#top").click(function () {
    $("body, html").animate({
      scrollTop: 0
    }, 800);
    return false;
  });

});

//modal
var modal = document.getElementById('myModlal'),
    btnModal = document.getElementById('linkModal'),
    close = document.getElementsByClassName('close')[0];

btnModal.onclick = function () {
    modal.style.display = "block";
}
close.onclick = function () {
    modal.style.display = "none";
}
//закрытие модал, если юзер кликает на bg
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}