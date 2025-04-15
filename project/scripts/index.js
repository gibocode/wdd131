// Populate featured images
const featuredImages = [
	{
		"url": "images/gallery_1.webp",
		"name": "Gallery 1",
		"width": "312",
		"height": "445"
	},
	{
		"url": "images/gallery_2.webp",
		"name": "Gallery 2",
		"width": "312",
		"height": "445"
	},
	{
		"url": "images/gallery_3.webp",
		"name": "Gallery 3",
		"width": "312",
		"height": "445"
	},
	{
		"url": "images/gallery_4.webp",
		"name": "Gallery 4",
		"width": "312",
		"height": "445"
	},
	{
		"url": "images/gallery_5.webp",
		"name": "Gallery 5",
		"width": "312",
		"height": "445"
	},
	{
		"url": "images/gallery_6.webp",
		"name": "Gallery 6",
		"width": "312",
		"height": "445"
	},
	{
		"url": "images/gallery_7.webp",
		"name": "Gallery 7",
		"width": "312",
		"height": "445"
	},
]

const galleryTrack = document.getElementById('gallery-track');

if (galleryTrack) {
	// Repeated 3 times for infinite-like scrolling
	for (let i = 0; i < 3; i++) {
		featuredImages.forEach((featuredImage) => {
			const image = document.createElement('img');
			image.src = featuredImage['url'];
			image.alt = featuredImage['name'];
			image.width = featuredImage['width'];
			image.height = featuredImage['height'];
			image.loading = 'lazy';
			galleryTrack.appendChild(image);
		});
	}
}
