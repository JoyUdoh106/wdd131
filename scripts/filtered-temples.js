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
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
        },
        {
            templeName: "Rome Italy",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 40000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160340.jpg"
        },
        {
            templeName: "Provo City Center",
            location: "Provo, Utah, United States",
            dedicated: "2016, March, 20",
            area: 85084,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572512-wallpaper.jpg"
        }
    ];

    const templeGrid = document.querySelector('.temples-grid');
    const pageTitle = document.querySelector('main h2');

    function createTempleCard(temple) {
        const card = document.createElement('figure');
        card.classList.add('temple-card');
        card.innerHtml =  `
            <h3>${temple.templeName}</h3>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <div class="card-info">
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </div>
        `;
        return card;
    }

    function displayTemples(templeList) {
        templeGrid.innerHtml = '';
        templeList.forEach(temple => {
            templeGrid.appendChild(createTempleCard(temple));
        });
    }

    document.querySelector('#home').addEventListener('click', (e) => {
        e.preventDefault();
        pageTitle.textContent = 'Home';
        displayTemples(temples);
    });

    document.querySelector('#old').addEventListener('click', (e) => { 
        e.preventDefault();
        pageTitle.textContent = 'Old Temples (Before 1900)';
        displayTemples(temples.filter(t => new Date (t.dedicated).getFullYear() < 1900));
    });

    document.querySelector('#new').addEventListener('click', (e) => { 
        e.preventDefault(); 
        pageTitle.textContent = 'New Temples (After 2000)'; 
        displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
     });
    document.querySelector('#large').addEventListener('click', (e) => { 
        e.preventDefault(); 
        pageTitle.textContent = 'Large Temples (> 90,000 sq ft)'; 
        displayTemples(temples.filter(t => t.area > 90000)); 
    });
    document.querySelector('#small').addEventListener('click', (e) => { 
        e.preventDefault(); 
        pageTitle.textContent = 'Small Temples (< 10,000 sq ft)'; 
        displayTemples(temples.filter(t => t.area < 10000)); 
    });

    const currentYearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    const lastModifiedSpan = document.getElementById('last-modified');
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = lastModified;

    const menuButton = document.getElementById('menu-button');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        if (nav.classList.contains('open')) {
            menuButton.textContent = 'X';
        } else {
            menuButton.textContent = '☰';
        }
    });

    displayTemples(temples);

});