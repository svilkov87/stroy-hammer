$(document).ready(function(){

  //выпадающий блок "о нас"
  $("#show_nav").click(function(){
    $(".ul_menu").slideToggle(100);
  });

    //выпадающий доп меню в лк (навигация)
  $("#showNav").click(function(){
    $(".lk_ul_child").slideToggle(100);
  });

  //убрать садбар
    $("#close_sb").click(function(){
    $(".lk_sidebar").toggleClass('close');
    $(".lk_wrapp_content").toggleClass('wr_left');
  });

// выпадающее меню
  $("#justify_nav").click(function(){
    $(".menu").fadeToggle(500);
  });

  //могоуровневое меню
    $('.ul_menu .li_nav').hover(
        function() {
        $(this).css("background", "#8c878c");
        $('a', this).css("color", "#fff");
        $('ul:first', this).slideDown(150);
    },
        function() {
          $(this).css("background", "#444050");
          $('a', this).css("color", "#ffbc00");
          $('ul:first', this).slideUp(150);
        }
    );

    // форма отправки заказа
    $('.btn_modal').click(function(e){
        e.preventDefault();
        var name = $('#name').val(),
            s_name = $('#s_name').val(),
            field = $('#modal_field').val();

        if( name == "" || s_name == "" || field == ""){
            $('.err_block').css("display" , "block");
        }
        else {
            $('.err_block').css("display" , "none");
            $.ajax({
                url: "../../ajax/upload.php",
                type: "POST",
                data: $('.myform').serialize(),
                dataType: "html"
            }).done(function(){
                // $('#myModlal').css("display" , "none");
                $('.modal_forms').css("display" , "none");
                $('.modal_confirm').css("display" , "block");
                // alert('data');
            });
        }
        $('#name, #s_name, #modal_field').focus(function(){
            $('.err_block').css("display" , "none");
        });
    });

    //Плавный скролл до блока .div по клику на .scroll
  //Документация: https://github.com/flesler/jquery.scrollTo
  $("#fa-angle-down").click(function() {
    $.scrollTo($("#main_about"), 800, {
      offset: 0
    });
  });

    //modal
    var modal = document.getElementById('myModlal'),
        btnModal = document.getElementsByClassName('send_need')[0],
        close = document.getElementsByClassName('close')[0];

    btnModal.onclick = function (event) {
      event.preventDefault();
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

    //фиксированный нав
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150){
            $('.nav_bottom').addClass("fixed_down");
            $('.nav').css("margin-bottom", "60px");
        }
        else{
            $('.nav_bottom').removeClass("fixed_down");
            $('.nav').css("margin-bottom", "0");
        }
    });

});
