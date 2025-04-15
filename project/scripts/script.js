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

const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");

const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];

let subscriptionCount = subscriptions.length;

if (email) {
    const subscriptionObject = {
        email: email,
    };
    subscriptions.push(subscriptionObject);
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
    subscriptionCount = subscriptions.length;
	const url = new URL(window.location);
	url.searchParams.delete('email');
	window.history.replaceState({}, '', url);
}

const subscriptionCounter = document.getElementById("subscription-counter");
subscriptionCounter.textContent = `${subscriptionCount} subscribers`;
