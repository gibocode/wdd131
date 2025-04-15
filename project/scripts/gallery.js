// Populate image captions
const captions = [
    "Sniff squad",
    "Treat please",
    "Squirrel hunter",
    "Leash rebel",
    "Wiggle expert",
    "Derp face",
    "Chase mode",
    "Floof alert",
    "Bark boss",
    "Pawsitively cute",
    "Mutt magic",
    "Fluff mode",
    "Nap champion",
    "Zoomies incoming",
    "Bone collector",
    "Snack patrol",
    "Cuddle bug",
    "Fetch master",
    "Tail waggin'",
    "Puppy power"
];

const imageCaptions = document.querySelectorAll('.gallery-text-overlay');

imageCaptions.forEach(function(imageCaption, index) {
    imageCaption.textContent = captions[index];
});
