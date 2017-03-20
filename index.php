<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"> 
	<title>stroy-hammer</title>
	<meta name="description" content="IMPOVAR" />
	<?php include("include/head.php");?>
	<script src="http://<?php echo $_SERVER["HTTP_HOST"];?>/app/libs/jquery.bxslider/jquery.bxslider.min.js"></script>
	<script>
		$(document).ready(function(){
			$('.bxslider').bxSlider({
  	            mode: 'fade',           // тип перехода между слайдами может быть 'horizontal', 'vertical', 'fade'
            captions: true,         // отображение title
            easing: 'easeInOutQuad',// анимация слайда
            controls: true,         // отображение стрелки - вперед, назад
            startSlide: 0,          // Показ начнется с заданного слайда
            infiniteLoop: true,     // показывать первый слайд за последним 
            auto: true,             // сделать автоматический переход
            pause: 4000,            // время между сменой слайдов в м-сек
            speed: 500,             // длительность перехода слайда в м-сек
            useCSS: false           // CSS переходы
        });
		});
	</script>
	<link href="http://<?php echo $_SERVER["HTTP_HOST"];?>/app/libs/jquery.bxslider/jquery.bxslider.css" rel="stylesheet">
</head>
<body>
<div class="nav">
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-sm-6">
				<div class="logo_block">
					<p class="logo_p">stroy hammer</p>
				</div>
			</div>
			<div class="col-md-6 col-sm-6">
				<div class="nav_info">
					<div class="adress_info">
						<span class="tel">8 800 000 000</span>
						<span class="adress">Нижний Новгород</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="nav_bottom">
		<div class="container">
			<div class="row">
			<i class="fa fa-bars" id="show_nav" aria-hidden="true"></i>
				<ul class="ul_menu">
					<li class="li_nav"><a href="#">главная</a></li>
					<li class="li_nav"><a href="#">улуги</a></li>
					<li class="li_nav"><a href="#">цены</a></li>
					<li class="li_nav"><a href="#">наши работы</a></li>
					<li class="li_nav"><a href="#">акции</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div class="wrapp_slider">
	<div class="container-fluid">
		<div class="row">
			<ul class="bxslider">
				<li><img src="http://www.elitecleaners.co.uk/wp-content/uploads/2012/02/house-cleaning1.jpg">
				<p class="inner_slider">TExt test test</p>
				</li>
				<li><img src="http://zar-remont.ru/assets/common/11-94bc08e66ddc0fac0edf5f619c5e74e4.jpg">
				<p class="inner_slider">TExt test test</p>
				</li>
				<li><img src="http://mebel-fox.by/wp-content/uploads/2015/09/prihojaya-1024x500.jpg">
				<p class="inner_slider">TExt test test</p>
				</li>
				<li><img src="http://indiareel.com/mmk/images/purple.jpg">
<p class="inner_slider">TExt test test</p>
				</li>
			</ul>
		</div>
	</div>
</div>
<?php include("include/scripts.php");?>
</body>
</html>
