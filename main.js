var first = document.getElementById('Första');

var bodyColor = document.querySelectorAll('#body-color');

var ohtext = document.querySelectorAll('#outerhaven_text path');
console.log(ohtext);

var padLockBody = document.querySelectorAll('#Andra')

var padLockBody2 = document.querySelectorAll('#Tredje');

$(document).ready(function() {

	TweenMax.to(bodyColor, 3, {fill: "black"});

	TweenMax.to(first, 1, {fill: "#8C8881"});
	TweenMax.to(padLockBody2, 5, {fill: "#B3ACA3"});
	// Change color on padlock body 
	TweenMax.to(padLockBody, 3, {delay: 2, fill: "#D4AF37"});

	// Fade in text on padlock
	TweenMax.staggerFromTo(ohtext, 2, {alpha: 0, y: "-100"}, {alpha: 1, y:"0"}, 0.2);


	first.addEventListener('mouseenter', openLockbar);
	//TweenMax.to('#Första', 1, {rotation: 360, transformOrigin: "center center"});

});

function openLockbar() {

	if(TweenMax.isTweening(first)){
		return;
	}
		
	// TweenLite.to('#Första', 1, { ease: Back.easeOut.config(1.7), y: -50 }, { ease: Back.easeIn.config(1.7), y: 50 });
	// TweenMax.fromTo('#Första', 1,{rotation: 0, transformOrigin: "center center", overwrite: "none"}, 
	// 	{rotation: 360});
	
	TweenLite.to('#Första', 2, { ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.268,0.852 0.426,1 0.618,1.18 0.818,0.001 1,0"), y: -100 });
}

