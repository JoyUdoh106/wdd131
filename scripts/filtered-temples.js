document.addEventListener('DOMContentLoaded', () => {

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Salt Lake",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253015,
            imageUrl: 
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
        },
        {
            templeName: "Accra Ghana",
            location: "Accra, Ghana",
            dedicated: "2004, January, 11",
            area: 17500,
            imageUrl: 
            "https://content.churchofjesuschrist.org/acp/bc/Africa%20West%20Area/temple%202021/400x250/accra_ghana_temple_lds.jpeg"
        },
        {
            templeName: "Memphis Tennessee",
            location: "Barlett, Tennessee, United states",
            dedicated: "2000, April, 23",
            area: 10890,
            imageUrl: 
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/news-and-events/2019/03/400x250/Memphis-Temple-News-1920x1080.jpg"
        }
    ];

   const templeGrid = document.querySelector('.temples-grid');
    const pageTitle = document.querySelector('main h2'); 

    // --- Functions to Build and Display Cards ---
    function createTempleCard(temple) {
        const card = document.createElement('figure');
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
            <figcaption>
                <strong>${temple.templeName}</strong>
                Location: ${temple.location}<br>
                Dedicated: ${temple.dedicated}<br>
                Size: ${temple.area.toLocaleString()} sq ft
            </figcaption>
        `;
        return card;
    }

    function displayTemples(templeList) {
        templeGrid.innerHTML = '';
        templeList.forEach(temple => {
            templeGrid.appendChild(createTempleCard(temple));
        });
    }

    // --- Filtering Event Listeners ---
    document.querySelector('#home').addEventListener('click', (e) => { e.preventDefault(); pageTitle.textContent = 'Home'; displayTemples(temples); });
    document.querySelector('#old').addEventListener('click', (e) => { e.preventDefault(); pageTitle.textContent = 'Old Temples'; displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900)); });
    document.querySelector('#new').addEventListener('click', (e) => { e.preventDefault(); pageTitle.textContent = 'New Temples'; displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000)); });
    document.querySelector('#large').addEventListener('click', (e) => { e.preventDefault(); pageTitle.textContent = 'Large Temples'; displayTemples(temples.filter(t => t.area > 90000)); });
    document.querySelector('#small').addEventListener('click', (e) => { e.preventDefault(); pageTitle.textContent = 'Small Temples'; displayTemples(temples.filter(t => t.area < 10000)); });
    
    // --- Code for Footer and Hamburger Menu ---
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    const menuButton = document.getElementById('menu-button');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuButton.textContent = nav.classList.contains('open') ? 'X' : '☰';
    });
    
    // --- Initial Page Load ---
    displayTemples(temples);
});