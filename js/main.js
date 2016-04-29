var $star1 = $('.star1');
var $star2 = $('.star2');
var $star3 = $('.star3');
var $star4 = $('.star4');
var $star5 = $('.star5');
var $star6 = $('.star6');

$star1.waypoint(function () {
  $star1.addClass('js-star1-animate');
  console.log('Waypoint!');
}, { offset: '50%'});

$star2.waypoint(function () {
  $star2.addClass('js-star2-animate');
  console.log('Waypoint!');
}, { offset: '50%'});

$star3.waypoint(function () {
  $star3.addClass('js-star3-animate');
  console.log('Waypoint!');
}, { offset: '50%'});

$star3.waypoint(function () {
  $star4.addClass('js-star4-animate');
  console.log('Waypoint!');
}, { offset: '50%'});

$star5.waypoint(function () {
  $star5.addClass('js-star5-animate');
  console.log('Waypoint!');
}, { offset: '50%'});

$star6.waypoint(function () {
  $star6.addClass('js-star6-animate');
  console.log('Waypoint!');
}, { offset: '50%'});
