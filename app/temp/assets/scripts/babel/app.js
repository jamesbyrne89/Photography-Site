'use strict';

var slide = function slide() {

  var urls = ['../../assets/images/content/barcelona/35813360365_e87e752a18_o.jpg', 'https://farm5.staticflickr.com/4253/35681172231_8a97190212_k.jpg', 'https://farm1.staticflickr.com/768/22718261258_6ecd122356_k.jpg', 'https://unsplash.it/1600/500'];

  var images = document.getElementsByClassName('slider__image');
  var slider = document.getElementById('js-slider');
  var imageWrapper = document.getElementById('js-image-wrapper');
  var btnWrapper = document.getElementById('js-btn-wrapper');
  var index = 0;
  var imageOffset = void 0;

  (function () {

    for (var i = 0; i < images.length; i++) {
      images[i].childNodes[0].setAttribute('src', urls[i]);
    }

    imageOffset = index * 1600;
    index++;
    imageWrapper.style.left = '-' + imageOffset + 'px';
    if (index >= images.length) {
      index = 0;
    }
  })();

  function moveLeft() {
    index--;
    imageOffset = index * 1600;
    imageWrapper.style.left = '-' + imageOffset + 'px';
  };

  function moveRight() {
    index++;
    imageOffset = index * 1600;
    imageWrapper.style.left = '-' + imageOffset + 'px';
  };

  document.getElementById('js-left-btn').addEventListener('click', function () {
    if (index > 0) {
      moveLeft();
    } else {
      index = images.length - 1;
      imageOffset = index * 1600;
      imageWrapper.style.left = '-' + imageOffset + 'px';
    }
  });

  document.getElementById('js-right-btn').addEventListener('click', function () {
    if (index === images.length - 1) {
      index = 0;
      imageOffset = index * 1600;
      imageWrapper.style.left = '-' + imageOffset + 'px';
    } else {
      moveRight();
    }
  });

  slider.addEventListener('mouseover', function () {
    btnWrapper.style.opacity = 0;
  });

  slider.addEventListener('mouseleave', function () {
    btnWrapper.style.opacity = 0;
  });
}();