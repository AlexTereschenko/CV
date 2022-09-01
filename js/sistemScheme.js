"use strict"

window.addEventListener("load", windowLoad);

function windowLoad() {
    //HTML
    const htmlBlock = document.documentElement;

    //Get user theme
    const saveUserTheme = localStorage.getItem('user-theme');

    //Work with sistem settings
    let userTheme;
    if (window.matchMedia) {
        userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        !saveUserTheme ? changeTheme() : null; /////////////////////////////
    });



    //Change theme onclick
    const themeButton = document.querySelector('.page_theme');
    const resetButton = document.querySelector('.page_reset');

    if (themeButton) {
        themeButton.addEventListener('click', function (e) {
            resetButton.classList.add('active');
            changeTheme(true);
        });
    }

    if (resetButton) {
        resetButton.addEventListener('click', function (e) {
            resetButton.classList.remove('active');
            localStorage.setItem('user-theme', '')
        });
    }

    //function adding theme class 
    function setThemeClass() {
        if (saveUserTheme) {
            htmlBlock.classList.add(saveUserTheme)
            resetButton.classList.add('active');
        } else {
            htmlBlock.classList.add(userTheme);
        }
    }

    //add theme class
    setThemeClass();

    //function change theme 
    function changeTheme(saveTheme = false) {
        let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
        let newTheme;

        currentTheme === 'light' ? newTheme = 'dark' : newTheme = 'light'


        htmlBlock.classList.remove(currentTheme);
        htmlBlock.classList.add(newTheme);
        saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
    }

}