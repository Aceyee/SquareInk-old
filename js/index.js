function judgeBrowserLanguage() {
    var language = navigator.browserLanguage?navigator.browserLanguage:navigator.language;
    alert(language);
    if (language.indexOf('zh') > -1) document.location.href = './zh/';
}

function hello() {
    alert('abc');
}