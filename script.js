//your code here
function swapTheme() {
    var app = document.getElementById('app');
    var button = document.getElementById('swap');

    if (app.classList.contains('day')) {
        app.classList.remove('day');
        app.classList.add('night');
        button.textContent = 'Light Theme';
        button.classList.remove('button_day');
        button.classList.add('button_night');
    } else {
        app.classList.remove('night');
        app.classList.add('day');
        button.textContent = 'Dark Theme';
        button.classList.remove('button_night');
        button.classList.add('button_day');
    }
}
