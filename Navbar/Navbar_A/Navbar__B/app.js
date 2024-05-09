let links = document.querySelectorAll(".nav__link");
for(let i =0; i<links.length; i++){
    links[i].addEventListener('click',activeLink);
}

function activeLink() {
    links.forEach(l=>{
        l.classList.remove('activeLink');
        this.classList.add('activeLink');
    })
}
 const toggle = document.getElementById('nav__toggle'),
 nav = document.getElementById('nav');
toggle.addEventListener('click',showMenu);
function showMenu(){
    toggle.classList.toggle('toggleRotate');
    nav.classList.toggle('toggleWidth');
} 
document.addEventListener("DOMContentLoaded", function() {
    const dashboardLink = document.querySelector(".nav__link.activeLink");
    const mainContent = document.querySelector(".main-content");

    // Function to handle dashboard link click
    function handleDashboardClick(event) {
        event.preventDefault();
        // Remove active class from all nav links
        const navLinks = document.querySelectorAll(".nav__link");
        navLinks.forEach(link => link.classList.remove("activeLink"));
        // Add active class to dashboard link
        dashboardLink.classList.add("activeLink");
        // Load content of privacy.html into main content area
        fetch("privacy.html")
            .then(response => response.text())
            .then(data => {
                mainContent.innerHTML = data;
            })
            .catch(error => console.error("Error loading content:", error));
    }

    // Add click event listener to the dashboard link
    dashboardLink.addEventListener("click", handleDashboardClick);
});
