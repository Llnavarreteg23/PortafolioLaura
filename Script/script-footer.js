document.querySelectorAll('.footer-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.preventDefault();
        const url = this.getAttribute('data-url');
        if(url) window.open(url, '_blank');
    });
});