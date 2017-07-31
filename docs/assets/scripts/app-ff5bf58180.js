const mobileBtn = document.getElementById('js-mobile-menu-btn');
const mobileCloseBtn = document.getElementById('js-menu-close-btn');
const mobileDrawer = document.getElementById('js-mobile-menu-drawer');
const darken = document.getElementById('js-darken');

mobileBtn.addEventListener('click', function(){
  mobileDrawer.classList.toggle('active');
  darken.classList.toggle('hidden');
});

mobileCloseBtn.addEventListener('click', function(){
  mobileDrawer.classList.toggle('active');
  darken.classList.toggle('hidden');
});

// Close menu on click away
document.addEventListener('click', function(e) {
	e.stopPropagation();
if (mobileDrawer.classList.contains('active') && e.target !== mobileBtn) {
    // if the target of the click isn't the container nor a descendant of the container
    if (mobileDrawer !== e.target && e.target.parentNode !== mobileDrawer) {
        mobileDrawer.classList.remove('active');
        darken.classList.add('hidden');
    }
  }  
}, false);

$('.photo-square').featherlight($content, configuration);
