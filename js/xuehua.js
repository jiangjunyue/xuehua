var  minSize=5;
var  maxSize=50;
var newOn=200;
var  flakeColor="blue";
var  flake=$("<div></div>").css({
	"position":"absolute",
	"top":"-50px"
}).html("*")


$(function(){
	var documentHeight=$(document).height();
	var documentWidth=$(document).width();
	setInterval(function(){
		var startPostionLeft=Math.random()*documentWidth;
		var startOpacity= 0.7+Math.random()*0.3;
		var endPositionTop=documentHeight;
		var endPostionLeft=Math.random()*documentWidth;
		var sizeFlake=minSize+Math.random()*maxSize;
		var durationFall=3000+Math.random()*7000;

		flake.clone().appendTo("body").css({
			"left":startPostionLeft,
			"opacity":startOpacity,
			"font-size":sizeFlake,
			"color":flakeColor
		}).animate({
			"top":endPositionTop,
			"left":endPostionLeft,
			"opacity":0.5
		},durationFall,function(){$(this).remove()});
	
		

	},newOn);
	
	});