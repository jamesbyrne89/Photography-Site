const mobileBtn = document.getElementById('js-mobile-menu-btn');
const mobileCloseBtn = document.getElementById('js-menu-close-btn');
const mobileDrawer = document.getElementById('js-mobile-menu-drawer');
const darken = document.getElementById('js-darken');
const container = document.getElementById('js-container');

// Slide out menu on click
mobileBtn.addEventListener('click', function(){
  mobileDrawer.classList.toggle('active');
  mobileDrawer.classList.toggle('menu--active');
  darken.classList.remove('hidden');
  container.classList.toggle('active');
});

// Close button on click
mobileCloseBtn.addEventListener('click', function(){
  mobileDrawer.classList.toggle('active');
  mobileDrawer.classList.toggle('menu--active');
  container.classList.toggle('active');
  darken.classList.add('hidden');
});

// Close menu on click away
document.addEventListener('click', function(e) {
	e.stopPropagation();
if (mobileDrawer.classList.contains('active') && e.target !== mobileBtn) {
    // if the target of the click isn't the container nor a descendant of the container
    if (mobileDrawer !== e.target && e.target.parentNode !== mobileDrawer) {
        mobileDrawer.classList.remove('active');
        mobileDrawer.classList.remove('menu--active');
        darken.classList.add('hidden');
    }
  }  
}, false);


// Lightbox
$('.photo-square').featherlight($content, configuration);
