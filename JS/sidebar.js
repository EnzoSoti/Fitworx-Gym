// Add click event listeners to sidebar links
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links and sections
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked link and corresponding section
        this.classList.add('active');
        document.getElementById(this.dataset.section).classList.add('active');
    });
});