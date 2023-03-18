AOS.init({
	// Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

$(document).ready(function(){
	

$('.studentSliderBody').slick({
	  infinite: true,
	  autoplay:false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true
   });

$(window).on('load resize', function() {
  if ($(window).width() < 768) {
    $('.infoCardsBody').slick({
			infinite: true,
			autoplay:false,
			slidesToShow: 1.5,
			slidesToScroll: 1,
			dots: true
    });
  } else {
    $(".infoCardsBody").slick("unslick");
  }
});

$(window).on('load resize', function() {
  if ($(window).width() < 768) {
		$('.aboutMeGallery').slick({
			  infinite: true,
			  autoplay:false,
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  dots: true,

		   });
  } else {
    $(".aboutMeGallery").slick("unslick");
  }
});

$(window).on('load resize', function() {
  if ($(window).width() < 768) {
		$('.stepsBody').slick({
			  infinite: true,
			  autoplay:false,
			  slidesToShow: 1.5,
			  slidesToScroll: 1,
			  dots: true,

		   });
  } else {
    $(".stepsBody").slick("unslick");
  }
});

$(window).on('load resize', function() {
  if ($(window).width() < 768) {
		$('.tariffBody').slick({
			  infinite: true,
			  autoplay:false,
			  slidesToShow: 1.45,
			  slidesToScroll: 1,
			  dots: true,

		   });
  } else {
    $(".tariffBody").slick("unslick");
  }
});

});

function scrollTo(element){
	window.scroll({
		left:0,
		top: element.offsetTop,
		behavior: 'smooth'
	})
}


const quizForm = document.querySelector(".quiz__form")
const quizBack = document.querySelector(".quizBack")
const quizNext = document.querySelector(".quizNext")
const q1inp = document.querySelectorAll(".q1inp")
const q2inp = document.querySelectorAll(".q2inp")
const q3inp = document.querySelectorAll(".q3inp")
const q4inp = document.querySelectorAll(".q4inp")
const q5inp = document.querySelectorAll(".q5inp")
const progressLine = document.querySelector(".quiz__progress-line")
const progressNumber = document.querySelector(".progress-number")
const quizBody = document.querySelector(".quiz__body")
const quizPreloader = document.querySelector(".quiz__preloader")


quizNext.setAttribute('disabled', true)

quizForm.addEventListener('change', e => {

	if(quizForm.classList.contains('active_01')){
		setTimeout(() => {
			quizForm.classList.remove('active_01')
			quizForm.classList.add('active_02')
			progressLine.style.width = '33.333%'
			progressNumber.innerHTML = "2"
	}, 500)
		scrollTo(quizForm)
	}else if(quizForm.classList.contains('active_02')){
		quizNext.removeAttribute('disabled')
	}else if(quizForm.classList.contains('active_03')){
		setTimeout(() => {
			quizForm.classList.remove('active_03')
			quizForm.classList.add('active_04')
			progressLine.style.width = '66.666%'
			progressNumber.innerHTML = "4"
	}, 500)
		scrollTo(quizForm)
	}else if(quizForm.classList.contains('active_04')){
		setTimeout(() => {
			quizForm.classList.remove('active_04')
			quizForm.classList.add('active_05')
			progressLine.style.width = '83.333%'
			progressNumber.innerHTML = "5"
	}, 500)
		scrollTo(quizForm)
	}else if(quizForm.classList.contains('active_05')){
		setTimeout(() => {
			quizForm.classList.remove('active_05')
			quizPreloader.style.display = 'flex'
			quizForm.style.display = 'none'
			quizBody.classList.add('transform')
			quizForm.classList.add('active_06')
			progressLine.style.width = '100%'
			progressNumber.innerHTML = "6"
			setTimeout(() =>{
				quizPreloader.style.display = 'none'
				quizForm.style.display = 'block'
			}, 1000)
	}, 500)
		scrollTo(quizForm)
	}
})




quizNext.addEventListener('click', e => {
	e.preventDefault()

	if(quizForm.classList.contains('active_01')){
		setTimeout(() => {
			quizBack.removeAttribute('disabled')
			quizForm.classList.remove('active_01')
			quizForm.classList.add('active_02')
			progressLine.style.width = '33.333%'
			progressNumber.innerHTML = "2"
			quizNext.setAttribute('disabled', true)
			for(let i = 0; i <q2inp.length; i++){
				if(q2inp[i].checked){
				if(quizForm.classList.contains('active_02')){
					quizNext.removeAttribute('disabled')
				}}}
	}, 500)
		scrollTo(quizForm)

	}else if(quizForm.classList.contains('active_02')){
		setTimeout(() => {
			quizForm.classList.remove('active_02')
			quizForm.classList.add('active_03')
			progressLine.style.width = '50%'
			progressNumber.innerHTML = "3"
			quizNext.setAttribute('disabled', true)
			for(let i = 0; i <q3inp.length; i++){
				if(q3inp[i].checked){
				if(quizForm.classList.contains('active_03')){
					quizNext.removeAttribute('disabled')
				}}}
	}, 500)
		scrollTo(quizForm)
	}else if(quizForm.classList.contains('active_03')){
		setTimeout(() => {
			quizForm.classList.remove('active_03')
			quizForm.classList.add('active_04')
			progressLine.style.width = '66.666%'
			progressNumber.innerHTML = "4"
			quizNext.setAttribute('disabled', true)
			for(let i = 0; i <q4inp.length; i++){
				if(q4inp[i].checked){
				if(quizForm.classList.contains('active_04')){
					quizNext.removeAttribute('disabled')
				}}}
	}, 500)
		scrollTo(quizForm)
	}else if(quizForm.classList.contains('active_04')){
		setTimeout(() => {
			quizForm.classList.remove('active_04')
			quizForm.classList.add('active_05')
			progressLine.style.width = '83.333%'
			progressNumber.innerHTML = "5"
			quizNext.setAttribute('disabled', true)
			for(let i = 0; i <q5inp.length; i++){
				if(q5inp[i].checked){
				if(quizForm.classList.contains('active_05')){
					quizNext.removeAttribute('disabled')
				}}}
	}, 500)
		scrollTo(quizForm)
	}else if(quizForm.classList.contains('active_05')){
		setTimeout(() => {
			quizForm.classList.remove('active_05')
			quizPreloader.style.display = 'flex'
			quizForm.style.display = 'none'
			quizBody.classList.add('transform')
			quizForm.classList.add('active_06')
			progressLine.style.width = '100%'
			progressNumber.innerHTML = "6"
			setTimeout(() =>{
				quizPreloader.style.display = 'none'
				quizForm.style.display = 'block'
			}, 1000)
	}, 500)
		scrollTo(quizForm)
	}

})

quizBack.addEventListener('click', e => {
	e.preventDefault()
	if(quizForm.classList.contains('active_02')){
		setTimeout(() => {
			quizForm.classList.remove('active_02')
			quizForm.classList.add('active_01')
			progressLine.style.width = '16.666%'
			progressNumber.innerHTML = "1"
			quizNext.removeAttribute('disabled')
	}, 500)
		scrollTo(quizForm)
	}else if(quizForm.classList.contains('active_03')){
		setTimeout(() => {
			quizForm.classList.remove('active_03')
			quizForm.classList.add('active_02')
			progressLine.style.width = '33.333%'
			progressNumber.innerHTML = "2"
			quizNext.removeAttribute('disabled')
	}, 500)
		scrollTo(quizForm)
	}else if(quizForm.classList.contains('active_04')){
		setTimeout(() => {
			quizForm.classList.remove('active_04')
			quizForm.classList.add('active_03')
			progressLine.style.width = '50%'
			progressNumber.innerHTML = "3"
			quizNext.removeAttribute('disabled')
	}, 500)
		scrollTo(quizForm)
	}else if(quizForm.classList.contains('active_05')){
		setTimeout(() => {
			quizForm.classList.remove('active_05')
			quizForm.classList.add('active_04')
			progressLine.style.width = '66.666%'
			progressNumber.innerHTML = "4"
			quizNext.removeAttribute('disabled')
	}, 500)
		scrollTo(quizForm)
	}else if(quizForm.classList.contains('active_06')){
		setTimeout(() => {
			quizForm.classList.remove('active_06')
			quizForm.classList.add('active_05')
			progressLine.style.width = '83.333%'
			progressNumber.innerHTML = "5"
			quizNext.removeAttribute('disabled')
	}, 500)
		scrollTo(quizForm)
	}

})



/*-----------privat-block--------------*/

const quizPrivatCheckbox = document.querySelector(".quiz__privat__checkbox")
const quizPrivatCheckboxBody = document.querySelector(".quiz__privat__checkbox__body")
const quizBtnSubmit = document.querySelector(".quiz__btn__submit")
const privatBlockBtn = document.querySelector(".privat-block__btn")

quizPrivatCheckbox.addEventListener('change', e =>{
	if(quizPrivatCheckbox.checked == true){
		quizPrivatCheckboxBody.classList.add('checked')
		quizBtnSubmit.removeAttribute('disabled')
	}else{
		quizPrivatCheckboxBody.classList.remove('checked')
		quizBtnSubmit.setAttribute('disabled', true)
	}
})

privatBlockBtn.addEventListener('click', e => {
	e.preventDefault()
})



/*-------------------------------pupup1-----------------------------------*/

const popupCheckboxBodyOne = document.querySelector(".popupCheckboxBodyOne")
const popupOne = document.querySelector(".popupOne")
const popupSubmiteOne = document.querySelector(".popupSubmiteOne")
const popupWrapper = document.querySelector(".popup-wrapper")
const popupBlock01 = document.querySelector(".popup-block_01")
const popupExit01 = document.querySelector(".popup-exit01")
const btnColection = document.querySelectorAll(".btnPopup")

btnColection.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
		popupWrapper.classList.remove('disabled')
		popupBlock01.classList.remove('disabled')
  })
})

popupExit01.addEventListener('click', e =>{
	popupWrapper.classList.add('disabled');
	popupBlock01.classList.add('disabled');
	}
)

popupOne.addEventListener('change', e =>{
	if(popupOne.checked == true){
		popupCheckboxBodyOne.classList.add('checked')
		popupSubmiteOne.removeAttribute('disabled')
	}else{
		popupCheckboxBodyOne.classList.remove('checked')
		popupSubmiteOne.setAttribute('disabled', true)
	}
})




/*-------------------------------pupup2-----------------------------------*/


const popupSelect = document.querySelector('.popup-select')
const labelOptionP1 = document.querySelector('.labelOptionP1')
const labelOptionP2 = document.querySelector('.labelOptionP2')
const optionP1 = document.querySelector('.optionP1')
const optionP2 = document.querySelector('.optionP2')
const popupExit02 = document.querySelector('.popup-exit02')
const popupExitBlock = document.querySelector('.popupExit-block')
const popupSubmiteTwo = document.querySelector('.popupSubmitetwo')
const popupCheckboxBodyTwo = document.querySelector('.popupCheckboxBodyTwo')
const popupTwo = document.querySelector('.popuptwo')


popupExitBlock.addEventListener('click', e => {
	 if(!e.target.classList.contains('popup-select')){
		popupSelect.classList.remove('open')
	}
})


popupSelect.addEventListener('click', e => {
	if(!popupSelect.classList.contains('open')){
		popupSelect.classList.add('open')
	}else{
		popupSelect.classList.remove('open')
	}
})

optionP1.addEventListener('click', e =>{
	labelOptionP2.classList.remove('checked')
	labelOptionP1.classList.add('checked')
	popupSelect.classList.remove('opt2')
	popupSelect.classList.add('opt1')

})

optionP2.addEventListener('click', e =>{
	labelOptionP1.classList.remove('checked')
	labelOptionP2.classList.add('checked')
	popupSelect.classList.remove('opt1')
	popupSelect.classList.add('opt2')
})

popupExit02.addEventListener('click', e => {
	popupWrapper.classList.add('disabled');
	popupExitBlock.classList.add('disabled');
})


popupTwo.addEventListener('change', e =>{
	if(popupTwo.checked == true){
		popupCheckboxBodyTwo.classList.add('checked')
		popupSubmiteTwo.removeAttribute('disabled')
	}else{
		popupCheckboxBodyTwo.classList.remove('checked')
		popupSubmiteTwo.setAttribute('disabled', true)
	}
})



popupWrapper.addEventListener('click', e => {
	if(e.target.classList.contains('popup-wrapper')){
		popupWrapper.classList.add('disabled')
		popupExitBlock.classList.add('disabled');
		popupBlock01.classList.add('disabled');
	}

})


let numPopupExit = 0

	setTimeout(() => {
	document.addEventListener('wheel', (e)=>{
		if(e.deltaY < 0 && numPopupExit == 0 && window.screen.width > 768){
			popupWrapper.classList.remove('disabled');
			popupExitBlock.classList.remove('disabled');
			numPopupExit++
		}
	})},5000);

/*-----------------------sidebar-----------------------------------*/

const sidebar = document.querySelector(".sidebar")
const sidebarTopBtn = document.querySelector(".sidebar__top-btn")
const sidebarContainer = document.querySelector(".sidebar__container")
const sidebaritem01 = document.querySelector(".sidebar__item01")
const sidebaritem02 = document.querySelector(".sidebar__item02")
const sidebaritem03 = document.querySelector("sidebar__item03")
const sidebarBottomBtn = document.querySelector(".sidebar__bottom-btn")
const studentSlider = document.querySelector(".student-slider")
const tariffs = document.querySelector(".tariff")
const toUp = document.querySelector(".to_up")
const header = document.querySelector(".header")


sidebarTopBtn.addEventListener('click', e =>{
	sidebar.classList.add('disabled')
})

sidebarBottomBtn.addEventListener('click', e =>{
	if(sidebar.classList.contains('disabled-inner')){
		sidebar.classList.remove('disabled-inner')
	} else {
		sidebar.classList.add('disabled-inner')
	}
	
})

sidebaritem01.addEventListener('click', e =>{
	scrollTo(studentSlider)
})

sidebaritem02.addEventListener('click', e =>{
	scrollTo(tariffs)
})

toUp.addEventListener('click', e =>{
	scrollTo(header)
})

const inputTel = document.querySelector('.input__tel')

const maskOptions = {
	mask: '+1 (0 0 0) 0 0 0 - 0 0 - 0 0',
	lazy:false
}

const mask = new IMask(inputTel, maskOptions);





