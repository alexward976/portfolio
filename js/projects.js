projects = [
    {
        name: 'Morgan Valley Arts Council',
        made_with: 'WordPress, Custom CSS',
        image_path: '../images/mvac-logo.png',
        link: 'https://morganvalleyarts.org/'
    },
    {
        name: 'Sample Admin Dashboard',
        made_with: 'React',
        image_path: '../images/react.png',
        link: '../'
    },
    {
        name: 'Your Website Here!',
        made_with: 'whatever you need!',
        image_path: '../images/q-mark.png',
        link: '../'
    },
]

const projectCards = document.querySelector('.project-cards');

projects.forEach(element => {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    let cardTitle = document.createElement('h3');
    cardTitle.textContent = element.name;

    let cardLogo = document.createElement('img');
    cardLogo.setAttribute('src', element.image_path);
    cardLogo.setAttribute('alt', `${element.name} logo`);

    let cardMadeWith = document.createElement('p');
    cardMadeWith.textContent = `Made with ${element.made_with}`;

    let cardLink = document.createElement('a');
    cardLink.textContent = 'Check it out...';
    cardLink.setAttribute('href', element.link);
    cardLink.setAttribute('target', 'blank');

    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardLogo);
    cardDiv.appendChild(cardMadeWith);
    cardDiv.appendChild(cardLink);

    projectCards.appendChild(cardDiv);

    console.log(element.name);
});