const menu = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menu.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menu.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    },
    {
        templeName: "Cedar City Utah",
        location: "Cedar City, Utah, United States",
        dedicated: "2017, December, 10",
        area: 33400,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
    }
];

function filterTemples(field = 'all', value = '', activeLink = null) {
    document.querySelector('.images').innerHTML = '';
    temples.forEach(temple => {
        if (field === 'year') {
            const year = parseInt(temple.dedicated.split(',')[0]);
            if (value === 'old' && year < 1900 || value === 'new' && year > 2000) {
                document.querySelector('.images').appendChild(createTempleCard(temple));
            }
        } else if (field === 'area') {
            if (value === 'large' && temple.area > 90000 || value === 'small' && temple.area < 10000) {
                document.querySelector('.images').appendChild(createTempleCard(temple));
            }
        } else {
            document.querySelector('.images').appendChild(createTempleCard(temple));
        }
    });
    if (activeLink) {
        document.querySelectorAll('.navigation a').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
        menu.click();
    }
}

function createTempleCard(temple) {
    const templeCard = document.createElement('figure');
    templeCard.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" width="540" height="338" loading="lazy">
        <figcaption>
            <p class="temple-name">${temple.templeName} Temple</p>
            <i>${temple.location}</i>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} ft<sup>2</sup></p>
        </figcaption>
    `;
    return templeCard;
}

filterTemples();
