
window.addEventListener('load', function() {
    setTimeout(function() {
        var loader = document.getElementById('loader');
        var autoAdd = document.getElementById('autoAdd');
        var navbar = document.getElementById('navbar');
        var content = document.getElementById('content');
        var footer = document.getElementById('footer');
        

        loader.style.display = 'none';
        navbar.style.display = 'block'; 
        content.style.display = 'block'; 
        footer.style.display = 'block'; 
        autoAdd.style.display = 'block'; 
    }, 2000); // 2000 milliseconds = 2 seconds
});

window.onload = function() {
    const modal = document.getElementById('my_modal_2');
    modal.showModal();
}


