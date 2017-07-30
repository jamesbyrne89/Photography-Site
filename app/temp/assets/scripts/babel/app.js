'use strict';

var mobileBtn = document.getElementById('js-mobile-menu-btn');
var mobileDrawer = document.getElementById('js-mobile-menu-drawer');

mobileBtn.addEventListener('click', function () {
  mobileDrawer.classList.toggle('active');
});

// Close menu on click away
document.addEventListener('click', function (e) {
  e.stopPropagation();
  if (mobileDrawer.classList.contains('active') && e.target !== mobileBtn) {
    // if the target of the click isn't the container nor a descendant of the container
    if (mobileDrawer !== e.target && e.target.parentNode !== mobileDrawer) {
      mobileDrawer.classList.remove('active');
    }
  }
}, false);

$('.photo-square').featherlight($content, configuration);