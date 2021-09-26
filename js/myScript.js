var zoomer = document.querySelector(".slide_01_img");
var backgrounder = document.querySelector(".slide_01_img_portion");
var imgOuter = document.querySelector(".img_outer");
function zommingFunction() {
	imgOuter.classList.add("img_outer_div");
	zoomer.classList.add("zommer_class");
	backgrounder.classList.add("backgrounder_class");
}
function zoomouterFunction() {
	imgOuter.classList.remove("img_outer_div");
	zoomer.classList.add("zommout_class");
	zoomer.classList.remove("zommer_class");
	backgrounder.classList.remove("backgrounder_class");
}
var video01 = document.querySelector(".vdo_thmb_1");
var video02 = document.querySelector(".vdo_thmb_2");
var video03 = document.querySelector(".vdo_thmb_3");
var playBtn01 = document.querySelector(".play_button_bg_01");
var playBtn02 = document.querySelector(".play_button_bg_02");
var playBtn03 = document.querySelector(".play_button_bg_03");
document.querySelector(".button_1").classList.add("active");
function clickForVideo01() {
	video01.style.visibility = "visible";
	video02.style.visibility = "hidden";
	video03.style.visibility = "hidden";
	playBtn01.style.visibility = "visible";
	playBtn02.style.visibility = "hidden";
	playBtn03.style.visibility = "hidden";
	video01.classList.add("animate__animated", "animate__fadeIn");
	video02.classList.remove("animate__animated", "animate__fadeIn");
	video03.classList.remove("animate__animated", "animate__fadeIn");
	playBtn01.classList.add("animate__animated", "animate__fadeIn");
	playBtn02.classList.remove("animate__animated", "animate__fadeIn");
	playBtn03.classList.remove("animate__animated", "animate__fadeIn");
	document.querySelector(".button_1").classList.add("active");
	document.querySelector(".button_2").classList.remove("active");
	document.querySelector(".button_3").classList.remove("active");
}
function clickForVideo02() {
	video01.style.visibility = "hidden";
	video02.style.visibility = "visible";
	video03.style.visibility = "hidden";
	playBtn01.style.visibility = "hidden";
	playBtn02.style.visibility = "visible";
	playBtn03.style.visibility = "hidden";
	video01.classList.remove("animate__animated", "animate__fadeIn");
	video02.classList.add("animate__animated", "animate__fadeIn");
	video03.classList.remove("animate__animated", "animate__fadeIn");
	playBtn01.classList.remove("animate__animated", "animate__fadeIn");
	playBtn02.classList.add("animate__animated", "animate__fadeIn");
	playBtn03.classList.remove("animate__animated", "animate__fadeIn");
	document.querySelector(".button_1").classList.remove("active");
	document.querySelector(".button_2").classList.add("active");
	document.querySelector(".button_3").classList.remove("active");
}
function clickForVideo03() {
	video01.style.visibility = "hidden";
	video02.style.visibility = "hidden";
	video03.style.visibility = "visible";
	playBtn01.style.visibility = "hidden";
	playBtn02.style.visibility = "hidden";
	playBtn03.style.visibility = "visible";
	video01.classList.remove("animate__animated", "animate__fadeIn");
	video02.classList.remove("animate__animated", "animate__fadeIn");
	video03.classList.add("animate__animated", "animate__fadeIn");
	playBtn01.classList.remove("animate__animated", "animate__fadeIn");
	playBtn02.classList.remove("animate__animated", "animate__fadeIn");
	playBtn03.classList.add("animate__animated", "animate__fadeIn");
	document.querySelector(".button_1").classList.remove("active");
	document.querySelector(".button_2").classList.remove("active");
	document.querySelector(".button_3").classList.add("active");
}
document.documentElement.style.setProperty("--animate-duration", "1s");
var indicator01 = document.querySelector(".indicator_1");
var indicator02 = document.querySelector(".indicator_2");
var indicator03 = document.querySelector(".indicator_3");
var indicator04 = document.querySelector(".indicator_4");
var indicator05 = document.querySelector(".indicator_5");
var indicator06 = document.querySelector(".indicator_6");
var indicator07 = document.querySelector(".indicator_7");
var indicator08 = document.querySelector(".indicator_8");
var ImgNexter01 = document.querySelector(".img_1");
var ImgNexter02 = document.querySelector(".img_2");
var ImgNexter03 = document.querySelector(".img_3");
var ImgNexter04 = document.querySelector(".img_4");
var ImgNexter05 = document.querySelector(".img_1");
var ImgNexter06 = document.querySelector(".img_2");
var ImgNexter07 = document.querySelector(".img_3");
var ImgNexter08 = document.querySelector(".img_4");
function imgNexter01() {
	indicator01.classList.remove("indicator_active");
	indicator02.classList.add("indicator_active");
	indicator03.classList.remove("indicator_active");
	indicator04.classList.remove("indicator_active");
	document.getElementById("img_1").style.visibility = "hidden";
	document.getElementById("img_2").style.visibility = "visible";
	document.getElementById("img_3").style.visibility = "hidden";
	document.getElementById("img_4").style.visibility = "hidden";
}
function imgNexter02() {
	indicator01.classList.remove("indicator_active");
	indicator02.classList.remove("indicator_active");
	indicator03.classList.add("indicator_active");
	indicator04.classList.remove("indicator_active");
	document.getElementById("img_1").style.visibility = "hidden";
	document.getElementById("img_2").style.visibility = "hidden";
	document.getElementById("img_3").style.visibility = "visible";
	document.getElementById("img_4").style.visibility = "hidden";
}
function imgNexter03() {
	indicator01.classList.remove("indicator_active");
	indicator02.classList.remove("indicator_active");
	indicator03.classList.remove("indicator_active");
	indicator04.classList.add("indicator_active");
	document.getElementById("img_1").style.visibility = "hidden";
	document.getElementById("img_2").style.visibility = "hidden";
	document.getElementById("img_3").style.visibility = "hidden";
	document.getElementById("img_4").style.visibility = "visible";
}
function imgNexter04() {
	indicator01.classList.add("indicator_active");
	indicator02.classList.remove("indicator_active");
	indicator03.classList.remove("indicator_active");
	indicator04.classList.remove("indicator_active");
	document.getElementById("img_1").style.visibility = "visible";
	document.getElementById("img_2").style.visibility = "hidden";
	document.getElementById("img_3").style.visibility = "hidden";
	document.getElementById("img_4").style.visibility = "hidden";
}
// 2nd img portion
function imgNexter05() {
	indicator05.classList.remove("indicator_active");
	indicator06.classList.add("indicator_active");
	indicator07.classList.remove("indicator_active");
	indicator08.classList.remove("indicator_active");
	document.getElementById("img_1-1").style.visibility = "hidden";
	document.getElementById("img_2-2").style.visibility = "visible";
	document.getElementById("img_3-3").style.visibility = "hidden";
	document.getElementById("img_4-4").style.visibility = "hidden";
}
function imgNexter06() {
	indicator05.classList.remove("indicator_active");
	indicator06.classList.remove("indicator_active");
	indicator07.classList.add("indicator_active");
	indicator08.classList.remove("indicator_active");
	document.getElementById("img_1-1").style.visibility = "hidden";
	document.getElementById("img_2-2").style.visibility = "hidden";
	document.getElementById("img_3-3").style.visibility = "visible";
	document.getElementById("img_4-4").style.visibility = "hidden";
}
function imgNexter07() {
	indicator05.classList.remove("indicator_active");
	indicator06.classList.remove("indicator_active");
	indicator07.classList.remove("indicator_active");
	indicator08.classList.add("indicator_active");
	document.getElementById("img_1-1").style.visibility = "hidden";
	document.getElementById("img_2-2").style.visibility = "hidden";
	document.getElementById("img_3-3").style.visibility = "hidden";
	document.getElementById("img_4-4").style.visibility = "visible";
}
function imgNexter08() {
	indicator05.classList.add("indicator_active");
	indicator06.classList.remove("indicator_active");
	indicator07.classList.remove("indicator_active");
	indicator08.classList.remove("indicator_active");
	document.getElementById("img_1-1").style.visibility = "visible";
	document.getElementById("img_2-2").style.visibility = "hidden";
	document.getElementById("img_3-3").style.visibility = "hidden";
	document.getElementById("img_4-4").style.visibility = "hidden";
}
// for changing watch img by indicator nav
function imgChanger01() {
	indicator01.classList.add("indicator_active");
	indicator02.classList.remove("indicator_active");
	indicator03.classList.remove("indicator_active");
	indicator04.classList.remove("indicator_active");
	document.getElementById("img_1").style.visibility = "visible";
	document.getElementById("img_2").style.visibility = "hidden";
	document.getElementById("img_3").style.visibility = "hidden";
	document.getElementById("img_4").style.visibility = "hidden";
}
function imgChanger02() {
	indicator01.classList.remove("indicator_active");
	indicator02.classList.add("indicator_active");
	indicator03.classList.remove("indicator_active");
	indicator04.classList.remove("indicator_active");
	document.getElementById("img_1").style.visibility = "hidden";
	document.getElementById("img_2").style.visibility = "visible";
	document.getElementById("img_3").style.visibility = "hidden";
	document.getElementById("img_4").style.visibility = "hidden";
}
function imgChanger03() {
	indicator01.classList.remove("indicator_active");
	indicator02.classList.remove("indicator_active");
	indicator03.classList.add("indicator_active");
	indicator04.classList.remove("indicator_active");
	document.getElementById("img_1").style.visibility = "hidden";
	document.getElementById("img_2").style.visibility = "hidden";
	document.getElementById("img_3").style.visibility = "visible";
	document.getElementById("img_4").style.visibility = "hidden";
}
function imgChanger04() {
	indicator01.classList.remove("indicator_active");
	indicator02.classList.remove("indicator_active");
	indicator03.classList.remove("indicator_active");
	indicator04.classList.add("indicator_active");
	document.getElementById("img_1").style.visibility = "hidden";
	document.getElementById("img_2").style.visibility = "hidden";
	document.getElementById("img_3").style.visibility = "hidden";
	document.getElementById("img_4").style.visibility = "visible";
}
function imgChanger05() {
	indicator05.classList.add("indicator_active");
	indicator06.classList.remove("indicator_active");
	indicator07.classList.remove("indicator_active");
	indicator08.classList.remove("indicator_active");
	document.getElementById("img_1-1").style.visibility = "visible";
	document.getElementById("img_2-2").style.visibility = "hidden";
	document.getElementById("img_3-3").style.visibility = "hidden";
	document.getElementById("img_4-4").style.visibility = "hidden";
}
function imgChanger06() {
	indicator05.classList.remove("indicator_active");
	indicator06.classList.add("indicator_active");
	indicator07.classList.remove("indicator_active");
	indicator08.classList.remove("indicator_active");
	document.getElementById("img_1-1").style.visibility = "hidden";
	document.getElementById("img_2-2").style.visibility = "visible";
	document.getElementById("img_3-3").style.visibility = "hidden";
	document.getElementById("img_4-4").style.visibility = "hidden";
}
function imgChanger07() {
	indicator05.classList.remove("indicator_active");
	indicator06.classList.remove("indicator_active");
	indicator07.classList.add("indicator_active");
	indicator08.classList.remove("indicator_active");
	document.getElementById("img_1-1").style.visibility = "hidden";
	document.getElementById("img_2-2").style.visibility = "hidden";
	document.getElementById("img_3-3").style.visibility = "visible";
	document.getElementById("img_4-4").style.visibility = "hidden";
}
function imgChanger08() {
	indicator05.classList.remove("indicator_active");
	indicator06.classList.remove("indicator_active");
	indicator07.classList.remove("indicator_active");
	indicator08.classList.add("indicator_active");
	document.getElementById("img_1-1").style.visibility = "hidden";
	document.getElementById("img_2-2").style.visibility = "hidden";
	document.getElementById("img_3-3").style.visibility = "hidden";
	document.getElementById("img_4-4").style.visibility = "visible";
}
// owl carusel
var owl = $(".owl-carousel");
owl.owlCarousel({
	loop: false,
	nav: false,
	margin: 10,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		960: {
			items: 1,
		},
		1200: {
			items: 1,
		},
	},
	animateOut: "fadeOut",
	mouseDrag: false,
});
owl.on("mousewheel", ".owl-stage", function (e) {
	if (e.deltaY > 0) {
		owl.trigger("next.owl");
	} else {
		owl.trigger("prev.owl");
	}
	e.preventDefault();
});
