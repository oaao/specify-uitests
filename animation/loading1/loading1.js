const wrapperEl = document.querySelector('.loading');
const numberOfEls = 90;
const duration = 4500;
const delay = duration / numberOfEls;

let tl = anime.timeline({
  duration: delay,
  complete: function() { tl.restart(); }
});

function createEl(i) {
  let el = document.createElement('div');
  const rotate = 180 + (360 / numberOfEls) * i;
  const translateY = -50;
  const hue = 143 //Math.round(360 / numberOfEls * i);
  el.classList.add('el');
  // change hsl to 40%,60% for original hue gradient
  el.style.backgroundColor = 'hsl( 143, 43%, 38%)';
  el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
  tl.add({
    begin: function() {
      anime({
        targets: el,
        // change HSL to [40%,60%, 60%,80%] for original hue gradient
        backgroundColor: ['hsl(' + hue + ', 43%, 31%)', 'hsl(' + hue + ', 0%, 17%)'],
        rotate: [rotate + 'deg', rotate + 10 +'deg'],
        translateY: [translateY + '%', translateY + 10 + '%'],
        scale: [1, 1.25],
        easing: 'easeInOutSine',
        direction: 'alternate',
        duration: duration * .15
      });
    }
  });
  wrapperEl.appendChild(el);
};

for (let i = 0; i < numberOfEls; i++) createEl(i);