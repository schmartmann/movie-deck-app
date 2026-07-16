const setSwitches = () => {
    const popup = document.getElementById('character-detail-popup');
    const characterBlocks = [...document.getElementsByClassName('character-block')];

    characterBlocks.forEach(element => {
        element.addEventListener('click', (e) => {
            toggleCharacterInfoBlock(e, popup)
        })
    });
}

const toggleCharacterInfoBlock = ({ target }, popup) => {
    const characterName = target.innerText.toLowerCase();
    populateCharacterInfoBlock(characterName, popup);
    popup.classList.toggle('hidden');
}

const populateCharacterInfoBlock = (characterName, popup) => {
    const characterData = characterDetails[characterName]

    popup.children[0].innerText = characterName;

    popup.children[1].innerText = characterData.text;

    const imageTags = popup.children[2].children;

    for (let i = 0; i < imageTags.length; i ++) {
        imageTags[i].src = `./assets/img/${characterName}/${i + 1}.jpeg`
    }
}

const characterDetails = { 
    'weaver': {
        text: 'This is where the text about Weaver goes.'
    },
    'erin': {
        text: 'This is where the text about Erin goes.'
    },
    'greg': { 
        text: 'This is where the text about Greg goes.'
    },
    'dean': {
        text: 'This is where the text about Dean goes.'
    },
    'aiden': {
        text: 'This is where the text about Aiden goes.'
    },
    'scout': {
        text: 'This is where the text about Scout goes.'
    }
}

window.onload = (event) => {
    console.log('loaded');
    setSwitches();
}
