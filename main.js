'use strict';

const handlePopupToggle = (event, popup) => {
    const isClickedInteractives = event.target.classList.contains('character-button');
    const clickIsOutsideOfPopup = !isClickedInteractives;
    const isPopupOpen = !popup.classList.contains('hidden');

    const shouldPopupOpen = isClickedInteractives && !isPopupOpen;
    const shouldPopupClose = clickIsOutsideOfPopup && isPopupOpen;

    if (shouldPopupOpen) {
        populateCharacterInfoBlock(event.target, popup);
        popup.classList.remove('hidden');
    } else if (shouldPopupClose) {
        popup.classList.add('hidden');
    } else {
        populateCharacterInfoBlock(event.target, popup);
    }
}

const populateCharacterInfoBlock = (target, popup) => {
    const name = target.innerText;
    const characterData = characterDetails[name];

    popup.children[0].innerText = name;

    popup.children[1].innerText = characterData.text;

    const imageTags = popup.children[2].children;

    for (let i = 0; i < imageTags.length; i ++) {
        imageTags[i].src = `./assets/img/${name}/${i + 1}.jpeg`
    }
}

const characterDetails = { 
    'Weaver': {
        text: 'This is where the text about Weaver goes.'
    },
    'Erin': {
        text: 'This is where the text about Erin goes.'
    },
    'Greg': { 
        text: 'This is where the text about Greg goes.'
    },
    'Dean': {
        text: 'This is where the text about Dean goes.'
    },
    'Aiden': {
        text: 'This is where the text about Aiden goes.'
    },
    'Scout': {
        text: 'This is where the text about Scout goes.'
    }
}

const addInteractivity = () => {
    const popup = document.getElementById('character-detail-popup');

    document.addEventListener('click', (event) => {
        handlePopupToggle(event, popup);
    });
}

window.onload = (event) => {
    addInteractivity();
}
