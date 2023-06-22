function toggleBalloon() {
    let balloon = document.querySelector('.balloon');
    if (balloon.style.display === 'none') {
        balloon.style.display = 'block';
    } else {
        balloon.style.display = 'none';
    }
}
