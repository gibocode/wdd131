// Subscription
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

if (subscriptionCounter) {
	subscriptionCounter.textContent = `${subscriptionCount} subscribers`;
}
