document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const fact = document.getElementById('fact');
    const projectTitle = document.getElementById('project-title');
    const topRightsLinks = document.querySelectorAll('.top-right-links a');
    let clickCount = 0;
    const originalLogoSrc = logo.src;
    const originalTitle = document.title;
    const originalBodyColor = document.body.style.color;

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
        }, 500);
    }

    function setTheme(theme) {
        if (theme === 'xof') {
            logo.src = logo.dataset.xofSrc;
            document.title = 'Project XOF';
            projectTitle.textContent = 'Project XOF';
            document.body.style.color = '#C0C0C0';
            topRightsLinks.forEach(link => link.style.color = '#C0C0C0');
        } else {
            logo.src = originalLogoSrc;
            document.title = originalTitle;
            projectTitle.textContent = 'Project FOX';
            document.body.style.color = originalBodyColor;
            topRightsLinks.forEach(link => link.style.color = '#FAA930');
        }
    }

    logo.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            triggerAnimation();
            setTimeout(() => setTheme('xof'), 250);
        } else if (clickCount >= 10) {
            triggerAnimation();
            setTimeout(() => setTheme('fox'), 250);
            clickCount = 0;
        }
    });

    fetchFact();
});
