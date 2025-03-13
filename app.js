document.addEventListener("DOMContentLoaded", function() {   /*only runs after HTML fully loads*/
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Modal functionality
    const modal = document.getElementById("myModal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.querySelector(".close-btn");

    openModalBtn.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    closeModalBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Tooltip functionality
    document.querySelectorAll('.tooltip').forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function() {
            this.setAttribute('data-tooltip', this.getAttribute('data-tooltip'));
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const content = this.nextElementSibling;

            // the display of the accordion content
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

