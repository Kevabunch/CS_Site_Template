'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
});

$("button").click(function(){
    $(this).find("i").toggleClass("fa-moon");
});
