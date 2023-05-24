$(function () {
  //Taken from http://ionden.com/a/plugins/ion.rangeSlider/demo.php

  $("#range_01").ionRangeSlider();

  $("#range_02").ionRangeSlider({
    min: 100,
    max: 1000,
    from: 550,
  });

  $("#range_03").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    prefix: "$",
  });

  $("#range_04").ionRangeSlider({
    type: "double",
    grid: true,
    min: -1000,
    max: 1000,
    from: -500,
    to: 500,
  });

  $("#range_05").ionRangeSlider({
    type: "double",
    grid: true,
    min: -1000,
    max: 1000,
    from: -500,
    to: 500,
    step: 250,
  });

  $("#range_06").ionRangeSlider({
    type: "double",
    grid: true,
    min: -12.8,
    max: 12.8,
    from: -3.2,
    to: 3.2,
    step: 0.1,
  });

  $("#range_07").ionRangeSlider({
    type: "double",
    grid: true,
    from: 1,
    to: 5,
    values: [0, 10, 100, 1000, 10000, 100000, 1000000],
  });

  $("#range_08").ionRangeSlider({
    grid: true,
    from: 5,
    values: [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
    ],
  });

  $("#range_09").ionRangeSlider({
    grid: true,
    from: 3,
    values: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  });

  $("#range_10").ionRangeSlider({
    grid: true,
    min: 1000,
    max: 1000000,
    from: 100000,
    step: 1000,
    prettify_enabled: false,
  });
});

$("#slider").roundSlider({
  radius: 85,
  sliderType: "default",
  value: 40,
});

$("#min_range").roundSlider({
  radius: 85,
  sliderType: "min-range",
  value: 48
});

$("#r_range").roundSlider({
  radius: 85,
  sliderType: "range",
  value: "10,49"
});

$("#startAngle").roundSlider({
  startAngle: 90,
  endAngle: "+225",
  value: 45
});

$("#appearance1").roundSlider({
  radius: 80,
  width: 14,
  handleSize: "24,12",
  handleShape: "square",
  sliderType: "min-range",
  value: 40
});

$("#appearance2").roundSlider({
  radius: 80,
  width: 14,
  handleSize: "+8",
  handleShape: "dot",
  sliderType: "min-range",
  value: 80
});

$("#appearance3").roundSlider({
  radius: 80,
  width: 8,
  handleSize: "+16",
  handleShape: "dot",
  sliderType: "min-range",
  value: 47
});

$("#appearance4").roundSlider({
  radius: 80,
  width: 9,
  handleSize: "+8",
  sliderType: "min-range",
  value: 40
});

// Material Design Range Sliders
$('input[type=range]').wrap("<div class='range'></div>");
var i = 1;

$('.range').each(function() {
  var n = this.getElementsByTagName('input')[0].value;
  var x = (n / 100) * (this.getElementsByTagName('input')[0].offsetWidth - 8) - 12;
  this.id = 'range' + i;
  if (this.getElementsByTagName('input')[0].value == 0) {
    this.className = "range"
  } else {
    this.className = "range rangeM"
  }
  this.innerHTML += "<style>#" + this.id + " input[type=range]::-webkit-slider-runnable-track {background:linear-gradient(to right, #3f51b5 0%, #3f51b5 " + n + "%, #515151 " + n + "%)} #" + this.id + ":hover input[type=range]:before{content:'" + n + "'!important;left: " + x + "px;} #" + this.id + ":hover input[type=range]:after{left: " + x + "px}</style>";
  i++
});

$('input[type=range]').on("input", function() {
  var a = this.value;
  var p = (a / 100) * (this.offsetWidth - 8) - 12;
  if (a == 0) {
    this.parentNode.className = "range"
  } else {
    this.parentNode.className = "range rangeM"
  }
  this.parentNode.getElementsByTagName('style')[0].innerHTML += "#" + this.parentNode.id + " input[type=range]::-webkit-slider-runnable-track {background:linear-gradient(to right, #3f51b5 0%, #3f51b5 " + a + "%, #515151 " + a + "%)} #" + this.parentNode.id + ":hover input[type=range]:before{content:'" + a + "'!important;left: " + p + "px;} #" + this.parentNode.id + ":hover input[type=range]:after{left: " + p + "px}";
})