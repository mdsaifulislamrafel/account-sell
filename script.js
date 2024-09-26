
window.addEventListener('load', function() {
    // setTimeout(function() {
        var loader = document.getElementById('loader');
        var navbar = document.getElementById('navbar');
        var content = document.getElementById('content');
        var footer = document.getElementById('footer');
        

        loader.style.display = 'none';
        navbar.style.display = 'block'; 
        content.style.display = 'block'; 
        footer.style.display = 'block'; 
    // }, 5000); // 5000 milliseconds = 5 seconds
});

window.onload = function() {
    const modal = document.getElementById('my_modal_2');
    modal.showModal();
}


