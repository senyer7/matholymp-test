
document.addEventListener('DOMContentLoaded', function(){
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');

    function updatePage() {
        if (nav && main){
            const height = nav.offsetHeight;
            main.style.marginTop = height + 'px';
        }
    }

    // Первоначальная установка
    updatePage();

    // Обновляем при изменении размера окна
    let resizeTimer;
    window.addEventListener('resize', function(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updatePage, 150);
    });
});