let lastScroll = 0;
const header = document.querySelector('header');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll > lastScroll && currentScroll > 100) {
		header.classList.add('hide');
		nav.classList.remove('open');
	} else {
		header.classList.remove('hide');
	}
	lastScroll = currentScroll;
});

const menuToggle = document.querySelector('.menu-icon');

menuToggle.addEventListener('click', () => {
	nav.classList.toggle('open');
});
