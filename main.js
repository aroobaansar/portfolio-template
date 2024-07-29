document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById('text');
    const textArray = ["Web Developer", "Graphic Designer", "Content Writer"]; // Add more roles here if needed
    let currentIndex = 0;

    function changeText() {
        anime({
            targets: textElement,
            opacity: 0,
            duration: 500,
            easing: 'easeOutQuad',
            complete: function () {
                textElement.textContent = textArray[currentIndex];
                currentIndex = (currentIndex + 1) % textArray.length;
                anime({
                    targets: textElement,
                    opacity: 1,
                    duration: 500,
                    easing: 'easeOutQuad'
                });
            }
        });
    }

    setInterval(changeText, 2000); // Change text every 2 seconds (2000 milliseconds)
});

function showAbout() {
    hideAllSections();
    document.getElementById('about-section').style.display = 'block';
}
function hideAllSections() {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}
function showSkill() {
    hideAllSections();
    document.getElementById('skill-section').style.display = 'block';
}
function showProject() {
    hideAllSections();
    document.getElementById('project-section').style.display = 'block';
}
function showService() {
    hideAllSections();
    document.getElementById('project-section').style.display = 'block';
}
function showContact() {
    hideAllSections();
    document.getElementById('project-section').style.display = 'block';
}
