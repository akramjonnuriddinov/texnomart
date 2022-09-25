const elRegionLink = document.querySelector('.js-region-link');
const elsRegionInnerLink = document.querySelectorAll('.js-region-inner-link');
const elsLangInnerLink = document.querySelectorAll('.js-lang-inner-link');
const elHeaderTopLangLink = document.querySelector('.header-top-lang-link');

if(elsRegionInnerLink) {
  elsRegionInnerLink.forEach(function(item, index) {
    item.addEventListener('click', function() {
      elRegionLink.textContent = item.textContent;
    });
  });
}

if(elsLangInnerLink) {
  elsLangInnerLink.forEach(function(item, index) {
    item.addEventListener('click', function(){
      elsLangInnerLink.forEach(function(item, index) {
        item.classList.remove('lang-inner__link--none')
      });
      elHeaderTopLangLink.textContent = item.textContent;
      item.classList.add('lang-inner__link--none');
    })
  });
}

// CAROUSEL
const elPrevBtn = document.querySelector('.js-prev-btn');
const elNextBtn = document.querySelector('.js-next-btn');
const elsHeroImg = document.querySelectorAll('.js-hero-img');
const elHeroImgWrapper = document.querySelector('.js-hero-img-wrapper');

let idx = 0;

function changeImg() {
  let count = -idx * 100;
  elHeroImgWrapper.style.transform = `translateX(${count}vw)`;
}

if(elNextBtn) {
  elNextBtn.addEventListener('click', function() {
    idx++;
    if(idx % 9 == 0) {
      idx = 0;
      changeImg();
    } else {
      changeImg();
    }
  });
}

if(elPrevBtn) {
  elPrevBtn.addEventListener('click', function() {
    idx--;
    changeImg();

    // if(count > 0) {

    // }
  });
}