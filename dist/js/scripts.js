/*!
* Start Bootstrap - Business Casual v7.0.2 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

i18next.init({
    lng: 'en', // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
    resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
        en: {
            translation: {
                nav: {
                    home: 'homee',
                    about: 'aboutt',
                    products: 'products',
                    store: 'store',
                },
            }
        },
        es: {
            translation: {
                nav: {
                    home: 'inicio',
                    about: 'acerca',
                    products: 'productos',
                    store: 'tienda',
                },
            }
        },
    }
}, function(err, t) {
    // for options see https://github.com/i18next/jquery-i18next#initialize-the-plugin
    updateContent();
    $('.lang-select').on('click', 'a', function(e) {
        i18next.changeLanguage($(this).data('locale'));
        updateContent();
        // $.i18n().locale = $(this).data('locale');
      });
});

function updateContent() {
    jqueryI18next.init(i18next, $); 
    $('.navbar-nav').localize();
}