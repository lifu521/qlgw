"use strict";!function(window,$){$(".back-top").on("click",function(){$("body,html").stop().animate({scrollTop:0},450)});var CustomScrollReveal={Reveal:null,slideDown:function(options){options=Object.assign({distance:"100%",origin:"top",opacity:0,delay:250,duration:400},options||options),this.Reveal.reveal(".sr-slideDown",options)},slideUp:function(options){options=Object.assign({distance:"100px",origin:"bottom",opacity:0,delay:250,duration:400},options||options),this.Reveal.reveal(".sr-slideUp",options)},fadeIn:function(options){options=Object.assign({opacity:0,delay:200,duration:1e3},options||options),this.Reveal.reveal(".sr-fadeIn",options)},init:function(options){return ScrollReveal().noop?(console.log("ScrollReveal is non-operational!"),!1):(this.Reveal=ScrollReveal(Object.assign({easing:"ease-out"},options||{})),this)}};window.CustomScrollReveal=CustomScrollReveal}(window,jQuery);