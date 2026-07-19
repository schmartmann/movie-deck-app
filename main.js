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
        const hostName = window.location.hostname || '.'
        imageTags[i].src = `${hostName}/assets/img/${name}/${i + 1}.jpeg`
    }
}

const characterDetails = { 
    'Weaver': {
        text: 'Coach Fletcher has two daughters: a basketball prodigy, and Weaver, a freshman psych student at Bridgetown. '+
        "When her birthday falls on the day of Bridgetown's historic, first March Madness game, she decidees to attend the game "+
        "hoping to somehow sabotage it, and exact revenge for her family's neglect."
    },
    'Erin': {
        text: 'Saxophonist. Leader of Bridgetown U\'s Pep Band. Doctoral Student in Music. Literally Dr. Pepper. ' +
        'Pop star Salem Boatright\'s attendance gives Erin visions of touring, if she can impress her, and prevent DJ Greg, ' +
        'her ex-boyfriend, from stealing the spotlight'
    },
    'Greg': { 
        text: 'DJ Shortcut. Erin\'s ex-boyfriend. He has failed upward into every position he has ever held in his life. '+
        'Things come easily to him, and they are getting even easier now that AI helps him DJ. With Salem Boatright in attendance, '+
        'he\'s confident he\'ll get invited to the tour. Why would\'t he?'
    },
    'Dean': {
        text: "An up-and-coming influencer on GambleTok whose account has been hijacked for ransom, which he hopes to pay for "+
        "by betting on a Bridgetown victory. He is at the game to stir up fans and secure the home court advantage, only to find "+
        "himself forced to hide his true intentions to romance Weaver, next to whom he finds himself seated."
    },
    'Aiden': {
        text: "Previous alias: the Bridgetown Butcher. Alleged serial killer (acquitted), and formerly #22 of Bridgetown U (Men's team). " +
        "His jersey had been hung in the arena, until the...unpleasantness. He will stop at nothing to get his number re-retired."
    },
    'Scout': {
        text: 'A frustrated would-be sports journalist sent by the network to sniff out gossip-y stories of who is dating whom, and who' +
        "is beefing with whom, questions they'd never ask male sports journalists. Her goal is threatened by Aiden, whose presence " +
        "disrupts an orderly broadcast."
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
