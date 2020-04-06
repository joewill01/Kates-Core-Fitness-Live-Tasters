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