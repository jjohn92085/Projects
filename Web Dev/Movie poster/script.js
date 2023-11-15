document.addEventListener('DOMContentLoaded', function () {
    var popupTrigger = document.getElementById('popup-trigger');
    var popup = document.getElementById('popup');
    var closeBtn = document.getElementById('close-btn')

    //show a popup
    popupTrigger.addEventListener('click', function () {
        popup.style.display = 'block';
    })

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    })

    //close the popup if user clicks outside

    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    }
    )
});