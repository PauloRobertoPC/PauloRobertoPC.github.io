if(localStorage.getItem("mode_prpc_github_io") == null)
    apply_theme("light", "dark");
else if(localStorage.getItem("mode_prpc_github_io") == "light")
    apply_theme("dark", "light");

function switch_theme(){
    const mode = localStorage.getItem("mode_prpc_github_io");
    let next_theme = (mode[0] == 'l' ? "dark" : "light");
    apply_theme(mode, next_theme);
}

function apply_theme(last_theme, theme){
    localStorage.setItem("mode_prpc_github_io", theme);
    const darkElements = document.querySelectorAll(`.${last_theme}`);
    darkElements.forEach(element => {
        element.classList.remove(last_theme);
        element.classList.add(theme);
    });
}
