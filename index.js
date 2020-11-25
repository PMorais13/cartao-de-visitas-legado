const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch2');

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
});