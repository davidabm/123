(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js').attr('src', 'images/logo-108-2.png');
$('.js-2').attr('src', 'images/png-1--37.png');
$('.js-3').attr('src', 'images/zi-ti-47.png');
$('.js-4').attr('src', 'images/gang-bi-36.png');
$('.js-5').attr('src', 'images/yan-se-40-1.png');
$('.js-6').attr('src', 'images/sketch-38-1.png');
$('.js-7').attr('src', 'images/guan-li-liu-zhuan-xie-zuo-43-1.png');
$('.js-8').attr('src', 'images/pizza-47.png');
$('.js-9').attr('src', 'images/tu-pian-43.png');
$('.js-10').attr('src', 'images/tu-pian-43.png');
$('.js-11').attr('src', 'images/tu-pian-43.png');
$('.js-12').attr('src', 'images/tu-pian-43.png');

}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});