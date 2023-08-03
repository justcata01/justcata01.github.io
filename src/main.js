function redirect(name){
    var url = "";
    switch(name){
        case "linkedin": url = "https://www.linkedin.com/in/catalin-brezoi/"; break;
        case "github": url = "https://github.com/justcata01"; break;
    }
    window.location = url;
}