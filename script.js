
window.addEventListener('load', function() {
    // setTimeout(function() {
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
// });

window.onload = function() {
    const modal = document.getElementById('my_modal_2');
    modal.showModal();
}




// script.js
document.addEventListener('DOMContentLoaded', () => {
    const iconContainer = document.getElementById('icon-container');
    const icon = document.getElementById('icon');
    let isHovered = false;

    iconContainer.addEventListener('mouseenter', () => {
        isHovered = true;
        iconContainer.classList.replace('w-14', 'w-32');
        iconContainer.classList.replace('h-14', 'h-16');
        iconContainer.classList.replace('bg-blue-500', 'bg-green-500');
        iconContainer.innerHTML = `
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" class="mx-2 p-4 h-10 w-10 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-800 transition-colors duration-300">
                <i class="fab fa-whatsapp text-xl"></i>
            </a>
            <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" class="mx-2 p-4 h-10 w-10 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-800 transition-colors duration-300">
                <i class="fab fa-telegram text-xl"></i>
            </a>
            <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" class="mx-2 p-4 h-10 w-10 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-800 transition-colors duration-300">
                <i class="fab fa-facebook text-xl"></i>
            </a>
        `;
    });

    iconContainer.addEventListener('mouseleave', () => {
        isHovered = false;
        iconContainer.classList.replace('w-32', 'w-14');
        iconContainer.classList.replace('h-16', 'h-14');
        iconContainer.classList.replace('bg-green-500', 'bg-blue-500');
        iconContainer.innerHTML = `<i id="icon" class="fas fa-envelope text-2xl"></i>`;
    });
});



