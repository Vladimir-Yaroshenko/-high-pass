const headerInput = document.querySelector('.header__top-input');
const close = document.querySelector('.header__top-close');
const headerSearch = document.querySelector('.header__top-icon');

headerSearch.addEventListener('click', () => {

  headerInput.classList.add('header__top-input--activ');
  close.classList.add('header__top-close--activ');
  headerSearch.classList.add('header__top-icon-activ');
});

close.addEventListener('click', () => {

  headerInput.classList.remove('header__top-input--activ');
  close.classList.remove('header__top-close--activ');
  headerSearch.classList.remove('header__top-icon-activ');
});


const headerNav = document.querySelector('.header__bottom-nav');
const headerClose = document.querySelector('.header__botom-close');
const burger = document.querySelector('.header__burger');
const headerLink = headerNav.querySelectorAll('.header__bottom-link');

burger.addEventListener('click', () => {
  headerNav.classList.add('header__bottom-nav--activ');
  document.body.classList.toggle('stop__scroll');
});

headerLink.forEach((el) => {
  el.addEventListener('click', () => {
    headerNav.classList.remove('header__bottom-nav--activ');
    document.body.classList.remove('stop__scroll');
  });

});

headerClose.addEventListener('click', () => {
  headerNav.classList.remove('header__bottom-nav--activ');
  document.body.classList.remove('stop__scroll');
});


const contactsBlock = document.querySelector('.contacts__block');
const contactsClear = document.querySelector('.contacts__block-svg');

contactsClear.addEventListener('click', () => {
  contactsBlock.classList.toggle('contacts__block-active');
});


new window.JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    email: {
      required: true,
      email: true
    },

  },
  colorWrong: '#FF3030',
  messages: {
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Имя должно содержать не менее двух символов'
    },

    email: {
      required: 'Вы не ввели e-mail',
      email: 'Введите корректный email'
    }

  }
});


new window.JustValidate('.studio__grup-form ', {
  rules: {
    email: {
      required: true,
      email: true
    },

  },
  colorWrong: '#F06666',
  messages: {
    email: {
      required: 'Вы не ввели e-mail',
      email: 'Введите корректный email'
    }

  }
});

ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.76947106400084,37.63897162499236],
            zoom: 14
        });

        var myPlacemark = new ymaps.Placemark([55.76947106400084,37.63897162499236], {}, {
          iconLayout: 'default#image',
          iconImageHref: './img/location.svg',
          iconImageSize: [12, 12]
        });

        myMap.geoObjects.add(myPlacemark);
    }

