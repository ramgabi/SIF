$(document).ready(function(){
 
$('.header .menu').on('click',function(e){
 e.preventDefault();
 $(this).toggleClass('on')
 
 if($(this).hasClass('on')){
  $(this).find('span:first').text('전체메뉴닫기')
  $('html').css('overflow','hidden')
  $('.allmenu').show().css('overflow-y','scroll')
  $('.header').css('backgroundColor','#4f1c67')
  $('.header h1').css('color','#fff')
  $('.header .logo img').attr('src','../images/logo2.png')
 }else{
  $(this).find('span:first').text('전체메뉴열기')
  $('html').css('overflow-y','scroll')
  $('.allmenu').hide()
  $('.header').css('backgroundColor','#fff')
  $('.header h1').css('color','#4f1c67')
  $('.header .logo img').attr('src','../images/logo.png')
  $('.gnb li a.on').removeClass('on').next().slideUp()
 }
 
 
 
})
 
 $('.gnb li a').on('click',function(){
  if($(this).hasClass('on')==false){
  $('.gnb li a.on').removeClass('on').next().slideUp()
  $(this).addClass('on').next().slideDown()
  }else{
   $('.gnb li a.on').removeClass('on').next().slideUp()
  }
 })
	
})
