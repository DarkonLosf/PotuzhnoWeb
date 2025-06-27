const translations = {
    en: {
        title: "Instrumental",
        welcome: "Welcome to official website of game 'Instrumental'",
        mainTheme: "Main Theme.ogg",
        runner: "Runner.ogg"
    },
    uk: {
        title: "Instrumental",
        welcome: "Ласкаво просимо на офіційну веб-сторінку гри 'Instrumental'",
        mainTheme: "Main Theme.ogg",
        runner: "Runner.ogg"
    },
    eo: {
        title: "Instrumental",
        welcome: "Bonvenon al la oficiala retejo de la ludo 'Instrumental'",
        mainTheme: "Main Theme.ogg",
        runner: "Runner.ogg"
    }
};

function switchLanguage(lang) {
    localStorage.setItem('lang', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    document.title = translations[lang].title;
    document.getElementById("welcome-text").innerText = translations[lang].welcome;
    document.getElementById("track1-title").innerText = translations[lang].mainTheme;
    document.getElementById("track2-title").innerText = translations[lang].runner;
}

window.onload = function () {
    const savedLang = localStorage.getItem('lang') || 'en';
    applyLanguage(savedLang);
};
