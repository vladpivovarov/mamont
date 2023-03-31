document.addEventListener('DOMContentLoaded', function(){

    var $owl = $('.loop');

    $owl.owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 800,
        center: true,
        items: 1.4,
        stagePadding: 15,
        loop: true,
        margin: 15,
    animateOut: 'slide-up',
    animateIn: 'slide-down',
    });

    function showPopup() {
        const btn = document.querySelector('.header__popup-call');
        const popupClose = document.querySelector('.header__popup-close');
        const popup = document.querySelector('.header__popup-wrapper');

        btn.addEventListener('click', ()=> {
            popup.classList.add('show')
        })
        popupClose.addEventListener('click', ()=> {
            popup.classList.remove('show')
        })
    }
    showPopup();



    function showMenu() {
        const burger = document.querySelector('.header__burger');
        const menu = document.querySelector('.header__wrapper');

        burger.addEventListener('click', ()=> {
            menu.classList.toggle('active');
            burger.classList.toggle('active')
        })
    }
    showMenu()

    let center = [55.657088,37.864528];

    function init() {
        let map = new ymaps.Map('contacts__map', {
            center: center,
            zoom: 17
        });

        var placemark = new ymaps.GeoObject( {
            geometry: {
                    type: "Point",
                    coordinates: [55.657088,37.864528]
                },
            properties: {
                    // Контент метки.
                    iconContent: '309',
                }
        },
        {
            preset: 'islands#orangeStretchyIcon'

        });

        map.geoObjects.add(placemark);

            map.controls.remove('geolocationControl'); // удаляем геолокацию
            map.controls.remove('searchControl'); // удаляем поиск
            map.controls.remove('trafficControl'); // удаляем контроль трафика
            map.controls.remove('typeSelector'); // удаляем тип
            map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
            map.controls.remove('zoomControl'); // удаляем контрол зуммирования
            map.controls.remove('rulerControl'); // удаляем контрол правил
            map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    }

    ymaps.ready(init);



    function calculateForm() {
        const btn = document.querySelector('.calculate-btn');
        const contentFirst = document.querySelector('.content__first'),
            contentSecond = document.querySelector('.content__second'),
            contentThird = document.querySelector('.content__third'),
            contentFour = document.querySelector('.content__four'),
            contentFive = document.querySelector('.content__five');

        const p1 = document.querySelector('.p1'),
            p2 = document.querySelector('.p2'),
            p3 = document.querySelector('.p3'),
            p4 = document.querySelector('.p4');
        const sumPack = document.querySelector('.content__first-input');
        const addressInput = document.querySelector('.deliver-input');
        const addressCheckbox = document.querySelector('.deliver-checkbox');

        var step = 1;
        const sumProgress = document.querySelector('.form__progress-text');
        sumProgress.innerHTML = `Вопрос ${step} из 4`

        const btns = document.querySelector('.calculate__form-btns');

        btn.addEventListener('click', (e)=> {
            e.preventDefault();
            // let step = 0;
            // sumProgress.innerHTML = `Вопрос ${step} из 4`;


            if(sumPack.value === '' || (addressInput.value === '' || !addressCheckbox.checked)) {
                sumPack.classList.add('error');
                addressInput.classList.add('error')
            } else {
                sumPack.classList.remove('error');
                addressInput.classList.remove('error')
            }

            console.log(addressCheckbox);

            if(contentFirst.classList.contains('visible') && sumPack.value !== '' && (addressInput.value !== '' || addressCheckbox.checked)) {
                contentFirst.classList.remove('visible');
                contentSecond.classList.add('visible');
                p1.classList.remove('visible');
                p2.classList.add('visible');
                step++;
                sumProgress.innerHTML = `Вопрос ${step} из 4`;
            } else if(contentSecond.classList.contains('visible')) {
                contentSecond.classList.remove('visible');
                contentThird.classList.add('visible');
                p2.classList.remove('visible');
                p3.classList.add('visible')
                step++;
                sumProgress.innerHTML = `Вопрос ${step} из 4`
            } else if(contentThird.classList.contains('visible')) {
                contentThird.classList.remove('visible');
                contentFour.classList.add('visible');
                p3.classList.remove('visible');
                p4.classList.add('visible')
                step++;
                sumProgress.innerHTML = `Вопрос ${step} из 4`
            } else if(contentFour.classList.contains('visible')) {
                contentFour.classList.remove('visible');
                contentFive.classList.add('visible');
                btns.classList.add('delete')

            } else  {

            }

    })
    }

    calculateForm()

    // var $owl = $('.loop');

    // $owl.owlCarousel({
    // autoplay: true,
    // autoplayHoverPause: true,
    // autoplayTimeout: 4000,
    // autoplaySpeed: 800,
    // center: true,
    // items: 3,
    // autoWidth:  true,
    // stagePadding: 15,
    // loop: true,
    // nav: true,
    // animateOut: 'slide-up',
    // animateIn: 'slide-down',

    // responsive: {
    //     // breakpoint from 0 up
    //     0: {
    //         margin: 15,
    //         items: 1.3
    //     },
    //     768: {
    //         margin: 15,
    //         items: 3
    //     },
    //     768: {
    //         margin: 15,
    //         items: 3
    //     }
    // }
    //});



    function checkDeliverAddress() {
        const input = document.querySelector('.deliver-input');
        const checkbox = document.querySelector('#deliver-address-input');

        input.addEventListener('click', ()=> {
            if(!checkbox.hasAttribute("checked")) {
                checkbox.setAttribute("checked", 'checked');
            } else {
                checkbox.setAttribute("checked", 'checked');
            }
            console.log(checkbox);
        })

    }
    checkDeliverAddress()


    function linksClick() {
        const links = document.querySelectorAll('.header__link');
        const menu = document.querySelector('.header__wrapper');
        const burger = document.querySelector('.header__burger');

        for(let i = 0; i < links.length; i++) {
            links[i].addEventListener("click", () => {
                menu.classList.toggle('active');
                burger.classList.toggle('active')
            });
        }
    }

    linksClick();
});


