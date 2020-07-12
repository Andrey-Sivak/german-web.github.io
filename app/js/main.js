window.addEventListener('load', () => {

	function toArray( pseudoArr, newArr ) {
		for( let i = 0, len = pseudoArr.length; i < len; i++ ) {
			newArr.push(pseudoArr[i]);
		}
	}

	function prevDefaultProjectCard() {
		const projectCards = document.getElementsByClassName('project__img_wrap');
		const projectCardsArr = [];

		toArray( projectCards, projectCardsArr );

		projectCardsArr.forEach( (item) => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
			})
		})
	}

	function loaderShow() {
		const preloader = document.createElement('div');
		preloader.setAttribute('class', 'preloader');
		preloader.setAttribute('id', 'preloader');

		const loader = document.createElement('div');
		loader.setAttribute('class', 'loader');

		preloader.appendChild(loader);
		document.body.appendChild(preloader);
	}

	function loaderHide(form) {
		const iframe = document.getElementById(form);
		const iframeCloseElement = iframe.parentElement.parentElement.parentElement;

		iframeCloseElement.addEventListener('click', (e) => {
			document.body.style.overflow = 'visible';
		});

		const preloader = document.getElementById('preloader');

		iframe.addEventListener('load', () => {
			preloader.classList.add('done');
			setTimeout( () => {
				document.body.removeChild(preloader);
			}, 1000);
		})
	}

	function prevDefaultFeedbackBtns() {
		const feedbackBtnsHeader = document.getElementsByClassName('b24-web-form-popup-btn-7');
		const feedbackBtns = document.getElementsByClassName('b24-web-form-popup-btn-3');
		const feedbackBtnsArr = [];

		let form1 = false;
		let form2 = false;

		toArray( feedbackBtns, feedbackBtnsArr );
		toArray( feedbackBtnsHeader, feedbackBtnsArr );

		feedbackBtnsArr.forEach( (item) => {

			item.addEventListener('click', (e) => {
				e.preventDefault();
				document.body.style.overflow = 'hidden';

				if( !form1 ) {
					if( e.target.classList.contains('b24-web-form-popup-btn-3') ) {
						const form = 'bx_form_iframe_3';
						loaderShow();
						loaderHide(form);
						form1 = true;
						return form1;
					}
				}
				if ( !form2 ) {
					if( e.target.classList.contains('b24-web-form-popup-btn-7') ) {
						const form = 'bx_form_iframe_7';
						loaderShow();
						loaderHide(form);
						form2 = true;
						return form2;
					}
				}
			})
		})
	}

	function coastCardTransform() {
		const cards = document.getElementsByClassName('coast__item');

		for(let i = 0, len = cards.length; i < len; i++) {
			cards[i].addEventListener('click', () => {
				const transformElements = document.getElementsByClassName('coast__transformY');
				for(let j = 0, length = transformElements.length; j < length; j++) {
					transformElements[j].classList.remove('coast__transformY_mob-helper');
				}

				const transformElement = cards[i].getElementsByClassName('coast__transformY')[0];
				transformElement.classList.toggle('coast__transformY_mob-helper');
			})
		}
	}



	prevDefaultFeedbackBtns();

	$('[data-fancybox]').fancybox({

		loop       : true,
		opacity    : 1, 
		slideShow  : false,
		fullScreen : false,
		thumbs     : false,
		buttons: [
    	"close"
  	]

	});

	const isCoarsePointer = (window.matchMedia &&
		matchMedia("(pointer: coarse)").matches);


	if ( isCoarsePointer ) {
		prevDefaultProjectCard();
		coastCardTransform();
	}

});