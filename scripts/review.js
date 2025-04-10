const urlParams = new URLSearchParams(window.location.search);

// Form fields (Required)
const productName = urlParams.get("product-name");
const overallRating = urlParams.get("overall-rating");
const dateOfInstallation = urlParams.get("date-of-installation");

// Form fields (Optional)
const durability = urlParams.get("durability");
const easeOfUse = urlParams.get("ease-of-use");
const performance = urlParams.get("performance");
const design = urlParams.get("design");
const review = urlParams.get("review");
const name = urlParams.get("name");

const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

let reviewsCount = reviews.length;

if (productName && overallRating && dateOfInstallation) {
    const reviewObject = {
        productName: productName,
        overallRating: overallRating,
        dateOfInstallation: dateOfInstallation,
        durability: durability || null,
        easeOfUse: easeOfUse || null,
        performance: performance || null,
        design: design || null,
        review: review || null,
        name: name || null,
    };
    reviews.push(reviewObject);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    reviewsCount = reviews.length;
}

const reviewCounter = document.getElementById("review-counter");
reviewCounter.textContent = reviewsCount;
