document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const fact = document.getElementById('fact');
    const projectTitle = document.getElementById('project-title'); // Get title element
    let clickCount = 0;
    const originalLogoSrc = logo.src; // Store original logo source
    const originalTitle = document.title; // Store original title
    const originalBodyColor = document.body.style.color; // Store original body color

    function fetchFact() {
        fetch('/get-fact')
            .then(response => response.text())
            .then(data => {
                fact.textContent = `"${data}"`;
            });
    }

    function triggerAnimation() {
        logo.classList.add('animated');
        setTimeout(() => {
            logo.classList.remove('animated');
        }, 500); // Duration should match the CSS transition
    }

    logo.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            triggerAnimation();
            setTimeout(() => {
                logo.src = logo.dataset.xofSrc;
                document.title = 'Project XOF';
                projectTitle.textContent = 'Project XOF'; // Update title text
                document.body.style.color = '#C0C0C0'; // Silver
            }, 250); // Change image mid-animation
        } else if (clickCount >= 10) {
            triggerAnimation();
            setTimeout(() => {
                logo.src = originalLogoSrc;
                document.title = originalTitle;
                projectTitle.textContent = 'Project FOX'; // Revert title text
                document.body.style.color = originalBodyColor;
            }, 250); // Change image mid-animation
            clickCount = 0; // Reset click count
        }
    });

    fetchFact();
});
