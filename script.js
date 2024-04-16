//your code here
function swapTheme() {
            var app = document.getElementById('app');
            var button = document.getElementById('swap');

            if (app.classList.contains('day')) {
                app.classList.remove('day');
                app.classList.add('night');
                button.textContent = 'Day Mode';
            } else {
                app.classList.remove('night');
                app.classList.add('day');
                button.textContent = 'Night Mode';
            }
        }