const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get("product-name");

if (productName) {
    let count = parseInt(localStorage.getItem('review-counter'));
    if (isNaN(count)) {
        count = 0;
    }
    count++;
    localStorage.setItem('review-counter', count);
    const reviewCounter = document.getElementById("review-counter");
    reviewCounter.textContent = count;
}

