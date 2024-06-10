
const menuIcon = document.getElementById
('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');


        
    });




    

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // Adicionando um evento de clique para cada link da navbar
    document.addEventListener('DOMContentLoaded', function () {
        const navbarLinks = document.querySelectorAll('.navbar a');

        navbarLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Evita o comportamento padrão do link
                const sectionId = link.getAttribute('href').substring(1); // Obtém o ID da seção
                scrollToSection(sectionId); // Rola até a seção correspondente
            });
        });
    });
