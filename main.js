const setSwitches = () => {
    const characterDetailsArray = [...document.getElementsByClassName('character-block')];
    characterDetailsArray.forEach(element => {
        element.addEventListener('click', (e) => {
            toggleHidden(e)
        })
    });
}

const toggleHidden = ({ target }) => {
    target.nextElementSibling.classList.toggle('hidden')
}



window.onload = (event) => {
    console.log('loaded');
    setSwitches();
}
