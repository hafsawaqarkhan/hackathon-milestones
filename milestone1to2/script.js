var toggleButton = document.getElementById('toggle-work');
var work = document.getElementById('work-experience');
toggleButton.addEventListener('click', function () {
    if (work.style.display === 'none') {
        work.style.display = 'block';
    }
    else {
        work.style.display = 'none';
    }
});
