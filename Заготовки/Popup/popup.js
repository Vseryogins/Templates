const body = document.querySelector('body');
const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll('.lock-padding');
let settingsPopup = {
	unlock: true,
	timeout: 500
};

if(popupLinks.length > 0){
	for(let index = 0; index < popupLinks.length; index++){
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function(e){
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0){
	for(let index = 0; index < popupCloseIcon.length; index++){
		const element = popupCloseIcon[index];
		element.addEventListener("click", function(e){
			popupClose(element.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup){
	if(curentPopup && settingsPopup.unlock){
		const popupActive = document.querySelector('.popup.open');
		if(popupActive){
			popupClose(popupActive, false);
		}else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function(e){
			if(!e.target.closest('.popup__content')){
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true){
	if(unlock){
		popupActive.classList.remove('open');
		if(doUnlock){
			bodyUnlock();
		}
	}
}

function bodyLock(){
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if(lockPadding.length > 0){
		for(let index = 0; index < lockPadding.length; index++){
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	settingsPopup.unlock = true;
	setTimeout(function(){
		unlock = true;
	}, settingsPopup.timeout);
}

function bodyUnlock(){
	setTimeout(function(){
		if(lockPadding.length > 0){
			for(let index = 0; index < lockPadding.length; index++){
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, settingsPopup.timeout);

	settingsPopup.unlock = false;
	setTimeout(function(){
		settingsPopup.unlock = true;
	}, settingsPopup.timeout);
}

document.addEventListener('keydown', function(e){
	if(e.which === 27){
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});