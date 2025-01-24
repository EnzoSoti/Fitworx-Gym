document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.section');
    const schedulingLink = document.querySelector('[data-section="scheduling"]');
    const schedulingSubmenu = document.getElementById('scheduling-submenu');

    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove('active');
        });
    }

    // Function to deactivate all sidebar links
    function deactivateAllLinks() {
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    // Toggle submenu for Gym Scheduling
    schedulingLink.addEventListener('click', function(event) {
        event.preventDefault();
        schedulingSubmenu.classList.toggle('active');
    });

    // Handle sidebar link clicks
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.getElementById(link.dataset.section);

            hideAllSections();
            deactivateAllLinks();

            link.classList.add('active');
            targetSection.classList.add('active');
        });
    });
});