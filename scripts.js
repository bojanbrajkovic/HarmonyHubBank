document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const editProfileButton = document.getElementById('edit-profile-button');
    const modalIframe = document.getElementById('modal-iframe');

    editProfileButton.addEventListener('click', function () {
        modalIframe.src = 'https://4b49a58a-92ec-4f7b-bfc0-b98ee1ffa714-00-1e4z2wwu1qh94.riker.replit.dev/';
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
        modalIframe.src = '';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            modalIframe.src = '';
        }
    });
});
