function goToClass(classID) {
    anime({
        targets: `#class${classID}`,
        left: 0,
        easing: 'easeInOutQuad',
        duration: 200
    })
}

function closeClass(classID) {
    anime({
        targets: `#class${classID}`,
        left: '100%',
        easing: 'easeInOutQuad',
        duration: 200
    })
}

function openPopup(popup_id) {
    document.getElementById(popup_id).style.display = 'flex';

    let tl = anime.timeline({
    });

    tl
    .add({
        targets: `#${popup_id}`,
        opacity: '1',
        easing: 'easeInOutQuad',
        duration: 200
    })
    .add({
        targets: `#${popup_id} .popup`,
        scale: [0.5, 1],
        easing: 'easeInOutExpo',
        duration: 170
    }, '-=170');
}

function closePopup(popup_id) {
    let tl = anime.timeline({
    });

    tl
    .add({
        targets: `#${popup_id} .popup`,
        scale: [1, 0.5],
        easing: 'easeInOutExpo',
        duration: 170
    })
    .add({
        targets: `#${popup_id}`,
        opacity: '0',
        easing: 'easeInOutQuad',
        duration: 200
    }, '-=170');

    tl.finished.then(() => {
        document.getElementById(popup_id).style.display = 'none';
    })
}

window.onload = function() {
    openPopup('disclaimer');
};
