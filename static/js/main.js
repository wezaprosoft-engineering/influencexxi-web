// // (function($) {
// //     "use strict";
// //
// //
// //
// // }(jQuery));
//
//
// // document.addEventListener('DOMContentLoaded', function() {
//
//
// $(document).ready(function(){
//     var testim = document.getElementById("testim"),
//         testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
//         testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
//         testimLeftArrow = document.getElementById("left-arrow"),
//         testimRightArrow = document.getElementById("right-arrow"),
//         testimSpeed = 4500,
//         currentSlide = 0,
//         currentActive = 0,
//         testimTimer,
//         touchStartPos,
//         touchEndPos,
//         touchPosDiff,
//         ignoreTouch = 30;
//
//
//     // Testim Script
//     function playSlide(slide) {
//         for (var k = 0; k < testimDots.length; k++) {
//             testimContent[k].classList.remove("active");
//             testimContent[k].classList.remove("inactive");
//             testimDots[k].classList.remove("active");
//         }
//
//         if (slide < 0) {
//             slide = currentSlide = testimContent.length - 1;
//         }
//
//         if (slide > testimContent.length - 1) {
//             slide = currentSlide = 0;
//         }
//
//         if (currentActive != currentSlide) {
//             testimContent[currentActive].classList.add("inactive");
//         }
//         testimContent[slide].classList.add("active");
//         testimDots[slide].classList.add("active");
//
//         currentActive = currentSlide;
//
//         clearTimeout(testimTimer);
//         testimTimer = setTimeout(function() {
//             playSlide(currentSlide += 1);
//         }, testimSpeed)
//     }
//
//     testimLeftArrow.addEventListener("click", function() {
//         playSlide(currentSlide -= 1);
//     })
//
//     testimRightArrow.addEventListener("click", function() {
//         playSlide(currentSlide += 1);
//     })
//
//     for (var l = 0; l < testimDots.length; l++) {
//         testimDots[l].addEventListener("click", function() {
//             playSlide(currentSlide = testimDots.indexOf(this));
//         })
//     }
//
//     playSlide(currentSlide);
//
//     // keyboard shortcuts
//     document.addEventListener("keyup", function(e) {
//         switch (e.keyCode) {
//             case 37:
//                 testimLeftArrow.click();
//                 break;
//
//             case 39:
//                 testimRightArrow.click();
//                 break;
//
//             case 39:
//                 testimRightArrow.click();
//                 break;
//
//             default:
//                 break;
//         }
//     })
//
//     testim.addEventListener("touchstart", function(e) {
//         touchStartPos = e.changedTouches[0].clientX;
//     })
//
//     testim.addEventListener("touchend", function(e) {
//         touchEndPos = e.changedTouches[0].clientX;
//
//         touchPosDiff = touchStartPos - touchEndPos;
//
//         console.log(touchPosDiff);
//         console.log(touchStartPos);
//         console.log(touchEndPos);
//
//
//         if (touchPosDiff > 0 + ignoreTouch) {
//             testimLeftArrow.click();
//         } else if (touchPosDiff < 0 - ignoreTouch) {
//             testimRightArrow.click();
//         } else {
//             return;
//         }
//
//     })
//     // }
//
// });
//
//
//
//
//
//
//
//
//
//     $('.owl-carousel').owlCarousel({
//         loop: true,
//         margin: 10,
//         nav: false,
//         fluidSpeed: 100,
//         items:1,
//         autoplay: true,
//         dots: false,
//         autoplayTimeout: 3000,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 3
//             },
//             1000: {
//                 items: 5
//             }
//         }
//     })
//
//
//
//     jQuery(document).ready(function(){
//         jQuery('.skillbar').each(function(){
//             jQuery(this).find('.skillbar-bar').animate({
//                 width:jQuery(this).attr('data-percent')
//             },6000);
//         });
//     });
//
// $.fn.jQuerySimpleCounter = function(options) {
//     var settings = $.extend({
//         start: 0,
//         end: 100,
//         easing: 'swing',
//         duration: 400,
//         complete: ''
//     }, options);
//
//     var thisElement = $(this);
//
//     $({
//         count: settings.start
//     }).animate({
//         count: settings.end
//     }, {
//         duration: settings.duration,
//         easing: settings.easing,
//         step: function() {
//             var mathCount = Math.ceil(this.count);
//             thisElement.text(mathCount);
//         },
//         complete: settings.complete
//     });
// };
//
//
// $('#number1').jQuerySimpleCounter({
//     end: 2000,
//     duration: 3000
// });
// $('#number2').jQuerySimpleCounter({
//     end: 1800,
//     duration: 3000
// });
// $('#number3').jQuerySimpleCounter({
//     end: 1300,
//     duration: 2000
// });
// $('#number4').jQuerySimpleCounter({
//     end: 700,
//     duration: 2500
// });


/* ---------------------------------------------------------------------- */
/* -------------------------------- Owl Carousel  ----------------------- */
/* ---------------------------------------------------------------------- */
// TM_owlCarousel: function() {
//     var $owl_thumb_carousel = $('.tm-owl-thumb-carousel');
//     if ($owl_thumb_carousel.length > 0) {
//         if (!$owl_thumb_carousel.hasClass("owl-carousel")) {
//             $owl_thumb_carousel.addClass("owl-carousel owl-theme");
//         }
//         $owl_thumb_carousel.each(function() {
//             var $this = $(this);
//             var data_dots = ($this.data("dots") === undefined) ? false : $this.data("dots");
//             var data_nav = ($this.data("nav") === undefined) ? false : $this.data("nav");
//             var data_duration = ($this.data("duration") === undefined) ? 4000 : $this.data("duration");
//             var data_autoplay = ($this.data("autoplay") === undefined) ? false : $this.data("autoplay");
//             var data_loop = ($this.data("loop") === undefined) ? false : $this.data("loop");
//             var data_margin = ($this.data("margin") === undefined) ? 30 : $this.data("margin");
//
//             $this.owlCarousel({
//                 // Enable thumbnails
//                 thumbs: true,
//                 // When only using images in your slide (like the demo) use this option to dynamicly create thumbnails without using the attribute data-thumb.
//                 thumbImage: false,
//                 // Enable this if you have pre-rendered thumbnails in your html instead of letting this plugin generate them. This is recommended as it will prevent FOUC
//                 thumbsPrerendered: true,
//                 // Class that will be used on the thumbnail container
//                 thumbContainerClass: 'tm-owl-thumbs',
//                 // Class that will be used on the thumbnail item's
//                 thumbItemClass: 'tm-owl-thumb-item',
//
//
//
//                 rtl: THEMEMASCOT.isRTL.check(),
//                 autoplay: data_autoplay,
//                 autoplayTimeout: data_duration,
//                 autoHeight: true,
//                 responsiveClass: true,
//                 loop: data_loop,
//                 items: 1,
//                 dots: data_dots,
//                 nav: data_nav,
//                 navText: [
//                     '<i class="fa fa-chevron-left"></i>',
//                     '<i class="fa fa-chevron-right"></i>'
//                 ]
//             });
//         });
//     }
//
//
//     var $owl_carousel_1col = $('.tm-owl-carousel-1col');
//     if ($owl_carousel_1col.length > 0) {
//         if (!$owl_carousel_1col.hasClass("owl-carousel")) {
//             $owl_carousel_1col.addClass("owl-carousel owl-theme");
//         }
//         $owl_carousel_1col.each(function() {
//             var $this = $(this);
//             var data_dots = ($this.data("dots") === undefined) ? false : $this.data("dots");
//             var data_nav = ($this.data("nav") === undefined) ? false : $this.data("nav");
//             var data_duration = ($this.data("duration") === undefined) ? 4000 : $this.data("duration");
//             var data_autoplay = ($this.data("autoplay") === undefined) ? false : $this.data("autoplay");
//             var data_loop = ($this.data("loop") === undefined) ? false : $this.data("loop");
//             var data_margin = ($this.data("margin") === undefined) ? 30 : $this.data("margin");
//
//             $this.owlCarousel({
//                 rtl: THEMEMASCOT.isRTL.check(),
//                 autoplay: data_autoplay,
//                 autoplayTimeout: data_duration,
//                 autoHeight: true,
//                 responsiveClass: true,
//                 loop: data_loop,
//                 items: 1,
//                 dots: data_dots,
//                 nav: data_nav,
//                 navText: [
//                     '<i class="fa fa-chevron-left"></i>',
//                     '<i class="fa fa-chevron-right"></i>'
//                 ]
//             });
//         });
//     }
//
//     var $owl_carousel_2col = $('.tm-owl-carousel-2col');
//     if ($owl_carousel_2col.length > 0) {
//         if (!$owl_carousel_2col.hasClass("owl-carousel")) {
//             $owl_carousel_2col.addClass("owl-carousel owl-theme");
//         }
//         $owl_carousel_2col.each(function() {
//             var $this = $(this);
//             var data_dots = ($this.data("dots") === undefined) ? false : $this.data("dots");
//             var data_nav = ($this.data("nav") === undefined) ? false : $this.data("nav");
//             var data_duration = ($this.data("duration") === undefined) ? 4000 : $this.data("duration");
//             var data_smartspeed = ($this.data("smartspeed") === undefined) ? 2000 : $this.data("smartspeed");
//             var data_autoplay = ($this.data("autoplay") === undefined) ? false : $this.data("autoplay");
//             var data_loop = ($this.data("loop") === undefined) ? false : $this.data("loop");
//             var data_margin = ($this.data("margin") === undefined) ? 30 : $this.data("margin");
//             var data_stagePadding = ($this.data("stagepadding") === undefined) ? 0 : $this.data("stagepadding");
//
//             var items_desktop = 2;
//             var items_laptop = ($this.data("laptop") === undefined) ? 2 : $this.data("laptop");
//             var items_tablet = ($this.data("tablet") === undefined) ? 2 : $this.data("tablet");
//
//             $this.owlCarousel({
//                 rtl: THEMEMASCOT.isRTL.check(),
//                 autoplay: data_autoplay,
//                 autoplayTimeout: data_duration,
//                 smartSpeed: data_smartspeed,
//                 autoHeight: true,
//                 responsiveClass: true,
//                 loop: data_loop,
//                 items: 2,
//                 margin: data_margin,
//                 stagePadding: data_stagePadding,
//                 dots: data_dots,
//                 nav: data_nav,
//                 navText: [
//                     '<i class="fa fa-chevron-left"></i>',
//                     '<i class="fa fa-chevron-right"></i>'
//                 ],
//                 responsive: {
//                     0: {
//                         items: 1,
//                         stagePadding: 0,
//                     },
//                     768: {
//                         items: items_tablet,
//                         stagePadding: 0,
//                     },
//                     1024: {
//                         items: items_laptop
//                     },
//                     1200: {
//                         items: items_desktop
//                     }
//                 }
//             });
//         });
//     }
//
//     var $owl_carousel_3col = $('.tm-owl-carousel-3col');
//     if ($owl_carousel_3col.length > 0) {
//         if (!$owl_carousel_3col.hasClass("owl-carousel")) {
//             $owl_carousel_3col.addClass("owl-carousel owl-theme");
//         }
//         $owl_carousel_3col.each(function() {
//             var $this = $(this);
//             var data_dots = ($this.data("dots") === undefined) ? false : $this.data("dots");
//             var data_nav = ($this.data("nav") === undefined) ? false : $this.data("nav");
//             var data_duration = ($this.data("duration") === undefined) ? 4000 : $this.data("duration");
//             var data_smartspeed = ($this.data("smartspeed") === undefined) ? 2000 : $this.data("smartspeed");
//             var data_autoplay = ($this.data("autoplay") === undefined) ? false : $this.data("autoplay");
//             var data_loop = ($this.data("loop") === undefined) ? false : $this.data("loop");
//             var data_margin = ($this.data("margin") === undefined) ? 30 : $this.data("margin");
//             var data_stagePadding = ($this.data("stagepadding") === undefined) ? 0 : $this.data("stagepadding");
//
//             var items_desktop = 3;
//             var items_laptop = ($this.data("laptop") === undefined) ? 2 : $this.data("laptop");
//             var items_tablet = ($this.data("tablet") === undefined) ? 2 : $this.data("tablet");
//
//             $this.owlCarousel({
//                 rtl: THEMEMASCOT.isRTL.check(),
//                 autoplay: data_autoplay,
//                 autoplayTimeout: data_duration,
//                 smartSpeed: data_smartspeed,
//                 autoHeight: true,
//                 responsiveClass: true,
//                 loop: data_loop,
//                 items: 3,
//                 margin: data_margin,
//                 stagePadding: data_stagePadding,
//                 dots: data_dots,
//                 nav: data_nav,
//                 navText: [
//                     '<i class="fa fa-chevron-left"></i>',
//                     '<i class="fa fa-chevron-right"></i>'
//                 ],
//                 responsive: {
//                     0: {
//                         items: 1,
//                         stagePadding: 0,
//                     },
//                     768: {
//                         items: items_tablet,
//                         stagePadding: 0,
//                     },
//                     1024: {
//                         items: items_laptop
//                     },
//                     1200: {
//                         items: items_desktop
//                     }
//                 }
//             });
//         });
//     }
//
//
//     var $owl_carousel_4col = $('.tm-owl-carousel-4col');
//     if ($owl_carousel_4col.length > 0) {
//         if (!$owl_carousel_4col.hasClass("owl-carousel")) {
//             $owl_carousel_4col.addClass("owl-carousel owl-theme");
//         }
//         $owl_carousel_4col.each(function() {
//             var $this = $(this);
//             var data_dots = ($this.data("dots") === undefined) ? false : $this.data("dots");
//             var data_nav = ($this.data("nav") === undefined) ? false : $this.data("nav");
//             var data_duration = ($this.data("duration") === undefined) ? 4000 : $this.data("duration");
//             var data_smartspeed = ($this.data("smartspeed") === undefined) ? 2000 : $this.data("smartspeed");
//             var data_autoplay = ($this.data("autoplay") === undefined) ? false : $this.data("autoplay");
//             var data_loop = ($this.data("loop") === undefined) ? false : $this.data("loop");
//             var data_margin = ($this.data("margin") === undefined) ? 30 : $this.data("margin");
//             var data_stagePadding = ($this.data("stagepadding") === undefined) ? 0 : $this.data("stagepadding");
//
//             var items_desktop = 4;
//             var items_laptop = ($this.data("laptop") === undefined) ? 3 : $this.data("laptop");
//             var items_tablet = ($this.data("tablet") === undefined) ? 2 : $this.data("tablet");
//
//             $this.owlCarousel({
//                 rtl: THEMEMASCOT.isRTL.check(),
//                 autoplay: data_autoplay,
//                 autoplayTimeout: data_duration,
//                 smartSpeed: data_smartspeed,
//                 autoHeight: true,
//                 responsiveClass: true,
//                 loop: data_loop,
//                 items: 4,
//                 margin: data_margin,
//                 stagePadding: data_stagePadding,
//                 dots: data_dots,
//                 nav: data_nav,
//                 navText: [
//                     '<i class="fa fa-chevron-left"></i>',
//                     '<i class="fa fa-chevron-right"></i>'
//                 ],
//                 responsive: {
//                     0: {
//                         items: 1,
//                         stagePadding: 0,
//                     },
//                     768: {
//                         items: items_tablet,
//                         stagePadding: 0,
//                     },
//                     1024: {
//                         items: items_laptop
//                     },
//                     1200: {
//                         items: items_desktop
//                     }
//                 }
//             });
//         });
//     }
//
//     var $owl_carousel_5col = $('.tm-owl-carousel-5col');
//     if ($owl_carousel_5col.length > 0) {
//         if (!$owl_carousel_5col.hasClass("owl-carousel")) {
//             $owl_carousel_5col.addClass("owl-carousel owl-theme");
//         }
//         $owl_carousel_5col.each(function() {
//             var $this = $(this);
//             var data_dots = ($this.data("dots") === undefined) ? false : $this.data("dots");
//             var data_nav = ($this.data("nav") === undefined) ? false : $this.data("nav");
//             var data_duration = ($this.data("duration") === undefined) ? 4000 : $this.data("duration");
//             var data_smartspeed = ($this.data("smartspeed") === undefined) ? 2000 : $this.data("smartspeed");
//             var data_autoplay = ($this.data("autoplay") === undefined) ? false : $this.data("autoplay");
//             var data_loop = ($this.data("loop") === undefined) ? false : $this.data("loop");
//             var data_margin = ($this.data("margin") === undefined) ? 30 : $this.data("margin");
//             var data_stagePadding = ($this.data("stagepadding") === undefined) ? 0 : $this.data("stagepadding");
//
//             var items_desktop = 5;
//             var items_laptop = ($this.data("laptop") === undefined) ? 3 : $this.data("laptop");
//             var items_tablet = ($this.data("tablet") === undefined) ? 2 : $this.data("tablet");
//
//             $this.owlCarousel({
//                 rtl: THEMEMASCOT.isRTL.check(),
//                 autoplay: data_autoplay,
//                 autoplayTimeout: data_duration,
//                 smartSpeed: data_smartspeed,
//                 autoHeight: true,
//                 responsiveClass: true,
//                 loop: data_loop,
//                 items: 5,
//                 margin: data_margin,
//                 stagePadding: data_stagePadding,
//                 dots: data_dots,
//                 nav: data_nav,
//                 navText: [
//                     '<i class="fa fa-chevron-left"></i>',
//                     '<i class="fa fa-chevron-right"></i>'
//                 ],
//                 responsive: {
//                     0: {
//                         items: 1,
//                         stagePadding: 0,
//                     },
//                     768: {
//                         items: items_tablet,
//                         stagePadding: 0,
//                     },
//                     1024: {
//                         items: items_laptop
//                     },
//                     1200: {
//                         items: items_desktop
//                     }
//                 }
//             });
//         });
//     }
//
//     var $owl_carousel_6col = $('.tm-owl-carousel-6col');
//     if ($owl_carousel_6col.length > 0) {
//         if (!$owl_carousel_6col.hasClass("owl-carousel")) {
//             $owl_carousel_6col.addClass("owl-carousel owl-theme");
//         }
//         $owl_carousel_6col.each(function() {
//             var $this = $(this);
//             var data_dots = ($this.data("dots") === undefined) ? false : $this.data("dots");
//             var data_nav = ($this.data("nav") === undefined) ? false : $this.data("nav");
//             var data_duration = ($this.data("duration") === undefined) ? 4000 : $this.data("duration");
//             var data_smartspeed = ($this.data("smartspeed") === undefined) ? 2000 : $this.data("smartspeed");
//             var data_autoplay = ($this.data("autoplay") === undefined) ? false : $this.data("autoplay");
//             var data_loop = ($this.data("loop") === undefined) ? false : $this.data("loop");
//             var data_margin = ($this.data("margin") === undefined) ? 30 : $this.data("margin");
//             var data_stagePadding = ($this.data("stagepadding") === undefined) ? 0 : $this.data("stagepadding");
//
//             var items_desktop = 6;
//             var items_laptop = ($this.data("laptop") === undefined) ? 4 : $this.data("laptop");
//             var items_tablet = ($this.data("tablet") === undefined) ? 2 : $this.data("tablet");
//
//             $this.owlCarousel({
//                 rtl: THEMEMASCOT.isRTL.check(),
//                 autoplay: data_autoplay,
//                 autoplayTimeout: data_duration,
//                 smartSpeed: data_smartspeed,
//                 autoHeight: true,
//                 responsiveClass: true,
//                 loop: data_loop,
//                 items: 6,
//                 margin: data_margin,
//                 stagePadding: data_stagePadding,
//                 dots: data_dots,
//                 nav: data_nav,
//                 navText: [
//                     '<i class="fa fa-chevron-left"></i>',
//                     '<i class="fa fa-chevron-right"></i>'
//                 ],
//                 responsive: {
//                     0: {
//                         items: 1,
//                         stagePadding: 0,
//                     },
//                     768: {
//                         items: items_tablet,
//                         stagePadding: 0,
//                     },
//                     1024: {
//                         items: items_laptop
//                     },
//                     1200: {
//                         items: items_desktop
//                     }
//                 }
//             });
//         });
//     }
//
//     var $owl_carousel_7col = $('.tm-owl-carousel-7col');
//     if ($owl_carousel_7col.length > 0) {
//         if (!$owl_carousel_7col.hasClass("owl-carousel")) {
//             $owl_carousel_7col.addClass("owl-carousel owl-theme");
//         }
//         $owl_carousel_7col.each(function() {
//             var $this = $(this);
//             var data_dots = ($this.data("dots") === undefined) ? false : $this.data("dots");
//             var data_nav = ($this.data("nav") === undefined) ? false : $this.data("nav");
//             var data_duration = ($this.data("duration") === undefined) ? 4000 : $this.data("duration");
//             var data_smartspeed = ($this.data("smartspeed") === undefined) ? 2000 : $this.data("smartspeed");
//             var data_autoplay = ($this.data("autoplay") === undefined) ? false : $this.data("autoplay");
//             var data_loop = ($this.data("loop") === undefined) ? false : $this.data("loop");
//             var data_margin = ($this.data("margin") === undefined) ? 30 : $this.data("margin");
//             var data_stagePadding = ($this.data("stagepadding") === undefined) ? 0 : $this.data("stagepadding");
//
//             var items_desktop = 7;
//             var items_laptop = ($this.data("laptop") === undefined) ? 5 : $this.data("laptop");
//             var items_tablet = ($this.data("tablet") === undefined) ? 3 : $this.data("tablet");
//
//             $this.owlCarousel({
//                 rtl: THEMEMASCOT.isRTL.check(),
//                 autoplay: data_autoplay,
//                 autoplayTimeout: data_duration,
//                 smartSpeed: data_smartspeed,
//                 autoHeight: true,
//                 responsiveClass: true,
//                 loop: data_loop,
//                 items: 7,
//                 margin: data_margin,
//                 stagePadding: data_stagePadding,
//                 dots: data_dots,
//                 nav: data_nav,
//                 navText: [
//                     '<i class="fa fa-chevron-left"></i>',
//                     '<i class="fa fa-chevron-right"></i>'
//                 ],
//                 responsive: {
//                     0: {
//                         items: 1,
//                         stagePadding: 0,
//                     },
//                     768: {
//                         items: items_tablet,
//                         stagePadding: 0,
//                     },
//                     1024: {
//                         items: items_laptop
//                     },
//                     1200: {
//                         items: items_desktop
//                     }
//                 }
//             });
//         });
//     }
//
//     var $owl_carousel_8col = $('.tm-owl-carousel-8col');
//     if ($owl_carousel_8col.length > 0) {
//         if (!$owl_carousel_8col.hasClass("owl-carousel")) {
//             $owl_carousel_8col.addClass("owl-carousel owl-theme");
//         }
//         $owl_carousel_8col.each(function() {
//             var $this = $(this);
//             var data_dots = ($this.data("dots") === undefined) ? false : $this.data("dots");
//             var data_nav = ($this.data("nav") === undefined) ? false : $this.data("nav");
//             var data_duration = ($this.data("duration") === undefined) ? 4000 : $this.data("duration");
//             var data_smartspeed = ($this.data("smartspeed") === undefined) ? 2000 : $this.data("smartspeed");
//             var data_autoplay = ($this.data("autoplay") === undefined) ? false : $this.data("autoplay");
//             var data_loop = ($this.data("loop") === undefined) ? false : $this.data("loop");
//             var data_margin = ($this.data("margin") === undefined) ? 30 : $this.data("margin");
//             var data_stagePadding = ($this.data("stagepadding") === undefined) ? 0 : $this.data("stagepadding");
//
//             var items_desktop = 8;
//             var items_laptop = ($this.data("laptop") === undefined) ? 6 : $this.data("laptop");
//             var items_tablet = ($this.data("tablet") === undefined) ? 4 : $this.data("tablet");
//
//             $this.owlCarousel({
//                 rtl: THEMEMASCOT.isRTL.check(),
//                 autoplay: data_autoplay,
//                 autoplayTimeout: data_duration,
//                 smartSpeed: data_smartspeed,
//                 autoHeight: true,
//                 responsiveClass: true,
//                 loop: data_loop,
//                 items: 8,
//                 margin: data_margin,
//                 stagePadding: data_stagePadding,
//                 dots: data_dots,
//                 nav: data_nav,
//                 navText: [
//                     '<i class="fa fa-chevron-left"></i>',
//                     '<i class="fa fa-chevron-right"></i>'
//                 ],
//                 responsive: {
//                     0: {
//                         items: 1,
//                         stagePadding: 0,
//                     },
//                     768: {
//                         items: items_tablet,
//                         stagePadding: 0,
//                     },
//                     1024: {
//                         items: items_laptop
//                     },
//                     1200: {
//                         items: items_desktop
//                     }
//                 }
//             });
//         });
//     }
//
//
//     /* animate filter */
//     var owlAnimateFilter = function(even) {
//         $(this)
//             .addClass('__loading')
//             .delay(70 * $(this).parent().index())
//             .queue(function() {
//                 $(this).dequeue().removeClass('__loading')
//             })
//     }
//
//     $('.carousel-layout-filter').on('click', 'a', function(e) {
//         e.preventDefault();
//         var $this = $(this);
//
//         var $this_parent = $this.parent('div');
//
//         $this.addClass('active').siblings().removeClass('active');
//
//         var filter_data = $this.data('filter');
//         var linkwith = $this_parent.data('link-with');
//
//         /* Filter */
//         $('#' + linkwith).owlFilter(filter_data, function(_owl) {
//             $(_owl).find('.tm-carousel-item').each(owlAnimateFilter);
//         });
//     })
//
// }

$('.card-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
$('.brand').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>'
    ],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:5
        },
        1000:{
            items:5
        }
    }
});
$('.recent-pub').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});