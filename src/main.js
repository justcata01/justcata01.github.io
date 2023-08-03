const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('shown')
        }
        else {
            entry.target.classList.remove('shown')
        }
    })
}, {threshold: 0.75});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function redirect(name) {
    var url = "";
    switch (name) {
        case "linkedin": url = "https://www.linkedin.com/in/catalin-brezoi/"; break;
        case "github": url = "https://github.com/justcata01"; break;
        case "highschool": url = "https://www.ctenergetic.ro/"; break;
        case "uni": url = "https://www.anmb.ro/"; break;
    }
    window.location = url;
}
