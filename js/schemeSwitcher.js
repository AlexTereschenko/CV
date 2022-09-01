const themeSwitch = body.querySelector(".toggle-switch"),
      themeText = body.querySelector(".theme-text");

window.addEventListener("load", windowLoad);

function windowLoad() {


    //Get user theme
    const saveUserTheme = localStorage.getItem('user-theme');
    console.log(saveUserTheme)

    //Work with sistem settings
    let userTheme;
    if (window.matchMedia) {
        userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        localStorage['user-theme']==='' ? changeTheme() : null; //////////////

        textChangeCheck();
    });


    //Change theme onclick
    const themeButton = themeSwitch;
    const resetButton = document.querySelector('.page_reset');

    if (themeButton) {
        themeButton.addEventListener('click', function (e) {
            resetButton.classList.add('active');
            changeTheme(true);
            textChangeCheck();
        });
    }

    if (resetButton) {
        resetButton.addEventListener('click', function (e) {
            resetButton.classList.remove('active');
            localStorage.setItem('user-theme', '')
            textChangeCheck();
            checkTheme()
        });
    }


    //function adding theme class 
    function setThemeClass() {
        if (localStorage['user-theme']!=='') {
            body.classList.add(saveUserTheme)
            resetButton.classList.add('active');
        } else {
            body.classList.add(userTheme);
        }
    }


    //add theme class
    setThemeClass();


    //function change theme 
    function changeTheme(saveTheme = false) {
        let currentTheme = body.classList.contains('light') ? 'light' : 'dark';
        let newTheme;

        currentTheme === 'light' ? newTheme = 'dark' : newTheme = 'light'


        body.classList.remove(currentTheme);
        body.classList.add(newTheme);
        saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
        console.log();
    }

    function textChangeCheck() {
        if(body.classList.contains("dark")){
            themeText.innerText = "Light theme";
    
        }else{
            themeText.innerText = "Dark theme";
        }
    }

    
    //function check theme 
function checkTheme() {
    let currentTheme = body.classList.contains('light') ? 'light' : 'dark';

    body.classList.remove(currentTheme);
    body.classList.add(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    textChangeCheck()
}
}