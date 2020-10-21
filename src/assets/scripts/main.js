/* Importem dependencies jquery i fontawesome */
import "@fortawesome/fontawesome-free/css/all.css"
import "./import-jquery";


$('.nav__icon').click(function(){
  $('.nav__icon').toggleClass('active');
  $('.nav__menu').toggleClass('nav__menu--display');
});