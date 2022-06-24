function initAnimate() {
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        const targetDelay = change.target.getAttribute('data-delay')
        setTimeout(() => {
          change.target.classList.add('animated');
        }, targetDelay)


        setTimeout(() => {
          change.target.classList.remove('animated')
          change.target.classList.remove('animate')
        }, +targetDelay + 1200)

      }
    });
  }

  let options = {
    threshold: [0.25]
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.animate');

  for (let elm of elements) {
    observer.observe(elm);
  }
}

function moveLettersInit() {
  document.querySelector('body').onmousemove = function (event) {
    event = event || window.event; // кроссбраузерность

    console.log(event); // вывод в консоль
    let x = event.pageX
    let y = event.pageY

    $('.letter').each(function (e) {
      console.log()
      // console.log('22',$(this))
      let multiplier
      const rev = $(this).data('revers')
      let speed = $(this).data('speed')

      switch (speed) {
        case '2':
          multiplier = 10
          break
        case '3':
          multiplier = 35
          break
        case '4':
          multiplier = 50
          break
        default:
          multiplier = 25
      }

      if (rev == 1) {
        $(this).find('img').css({"-webkit-transform": `translate(${-x / multiplier}px,${-y / multiplier}px)`});
      } else if (rev == 2) {
        $(this).find('img').css({"-webkit-transform": `translate(${x / multiplier}px,${y / multiplier}px)`});
      } else if (rev == 3) {
        $(this).find('img').css({"-webkit-transform": `translate(${-x / multiplier}px,${y / multiplier}px)`});
      } else if (rev == 4) {
        $(this).find('img').css({"-webkit-transform": `translate(${x / multiplier}px,${-y / multiplier}px)`});
      }

      // console.log($(this).offsetHeight)
    })
    // console.log($('.letter').css('--m'));
  }
}

function mobileNav() {
  $('.burger').click(function () {
    $('.popupNav').toggleClass('active')
  })


  $('.header__nav, .header__nav-close').click((e) => {
    console.log(e.target)

    if (e.target.classList.contains('close-nav')) {
      $('.header__nav').removeClass('active')
    }
  })
}

function initDots() {
  (() => {
    const imgs = $('.letters img')

    const config = {
      dotMinRad: 6,
      dotMaxRad: 20,
      sphereRad: innerHeight / 1.25,
      bigDotRad: 35,
      mouseSize: 60,
      massFactor: 0.04,
      defColor: `rgba(250, 10, 30, 0.0)`,
      smooth: 0.5,
    }

    const TWO_PI = 2 * Math.PI;
    const canvas = document.querySelector(`canvas`);
    const ctx = canvas.getContext(`2d`);

    let w, h, mouse, dots;

    class Dot {
      constructor(img) {
        this.pos = {
          x: (+img.getAttribute('data-x') / 1920) * innerWidth,
          y: (+img.getAttribute('data-y') / 850) * innerHeight
        }
        // this.pos   = {x: innerWidth / 2, y: innerHeight / 2}
        this.initPos = {x: +img.getAttribute('data-x'), y: +img.getAttribute('data-y')}
        this.vel = {x: 0, y: 0}
        this.w = +img.getAttribute('data-w')
        this.h = +img.getAttribute('data-h')
        this.rad = 20;
        this.img = img || null;
        this.mass = img.getAttribute('data-mass') == 'block' ? 0 : config.massFactor;
        this.color = config.defColor;
      }

      draw(x, y, img, first) {
        this.pos.x = x || this.pos.x + this.vel.x;
        this.pos.y = y || this.pos.y + this.vel.y;
        createCircle(this.pos.x, this.pos.y, img || this.img, first, this.w, this.h);
      }
    }

    function updateDots() {
      for (let i = 1; i < dots.length; i++) {
        let acc = {x: 0, y: 0}

        for (let j = 0; j < dots.length; j++) {
          if (i == j) continue;

          let [a, b] = [dots[i], dots[j]];
          let delta;
          delta = {x: b.pos.x - a.pos.x, y: b.pos.y - a.pos.y}

          if (j != 0) {
            delta = {x: b.pos.x - a.pos.x, y: b.pos.y - a.pos.y}
          } else {
            // delta  = {x: b.pos.x - a.pos.x, y: b.pos.y - a.pos.y}
            delta = {x: (b.pos.x - a.pos.x) / 5, y: (b.pos.y - a.pos.y) / 5}
            // b.mass = config.massFactor / 10
          }

          // let delta  = {x: b.pos.x - a.pos.x, y: b.pos.y - a.pos.y}
          let dist = Math.sqrt(delta.x * delta.x + delta.y * delta.y) || 1;
          let force = (dist - config.sphereRad) / dist * b.mass;

          if (j == 0) {
            let alpha = config.mouseSize / dist;
            a.color = `rgba(250, 10, 30, ${alpha})`;

            dist < config.mouseSize ? force = (dist - config.mouseSize) * b.mass : force = a.mass;
          }

          acc.x += delta.x * force;
          acc.y += delta.y * force;
        }

        dots[i].vel.x = dots[i].vel.x * config.smooth + acc.x * dots[i].mass;
        dots[i].vel.y = dots[i].vel.y * config.smooth + acc.y * dots[i].mass;
      }

      dots.map((e, index) => {
        if (index === 0) {
          return e.draw(mouse.x, mouse.y, null, true)
        } else {
          return e.draw()
        }
      });
    }

    function createCircle(x, y, img, first, w, h) {
      ctx.beginPath();

      if (first) {
        ctx.arc(x, y, 20, 0, TWO_PI);
      } else {
        ctx.drawImage(img, x, y, w || 100, h || 64);
      }
      ctx.closePath();
    }


    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    function init() {
      w = canvas.width = innerWidth;
      h = canvas.height = innerHeight;


      mouse = {x: w / 2, y: h / 2, down: false}
      dots = [];

      for (let i = 0; i < imgs.length; i++) {
        dots.push(new Dot(imgs[i]));
      }
    }

    function loop() {
      ctx.clearRect(0, 0, w, h);


      // if (mouse.down) {
      //   const inx = Math.floor(random(0, imgs.length))
      //   dots.push(new Dot(imgs[inx]));
      // }
      updateDots();

      window.requestAnimationFrame(loop);
    }

    init();
    loop();
    setTimeout(() => {
      dots.forEach(item => {
        item.goToPosition()
      })
    }, 500)

    function setPos({layerX, layerY}) {
      [mouse.x, mouse.y] = [layerX, layerY];
    }

    function isDown() {
      mouse.down = !mouse.down;
    }

    canvas.addEventListener(`mousemove`, setPos);
    window.addEventListener(`mousedown`, isDown);
    window.addEventListener(`mouseup`, isDown);
  })();
}

function imageMouse() {
  if (window.innerWidth < 1000){
    $('.hoverImages').remove()
    return null
  }

  let oldX = 0
  let oldY = 0
  let indexImage = 0
  let zIndex = 2001

  for (let i = 0; i < 4; i++) {
    $('.hoverImages div').clone().appendTo($('.hoverImages'))
  }
  const images = $('.hoverImages img')

  function render(el, x, y, oldX, oldY){
    $(el).css('top',     y + 'px')
    $(el).css('left', x + 'px')
    $(el).css('z-index', zIndex)
    // $(el).addClass('trans')
    // $(el).css('top',     y - (oldY - y) + 'px')
    // $(el).css('left', x - (oldX - x) + 'px')

    $(el).addClass('show')
    setTimeout(() => {
      $(el).removeClass('show')
    }, 1000)
  }

  document.querySelector('.blockLetters').onmousemove = function (event) {
    event = event || window.event; // кроссбраузерность

    if (window.innerWidth < 1000){
      return null
    }

    let x = event.pageX
    let y = event.pageY

    let resX = oldX - x
    let resY = oldY - y

    if(resX < 0){
      resX = -resX
    }
    if(resY < 0){
      resY = -resY
    }

    if(resX >= 75 || resY >= 75){
      oldX = x
      oldY = y
      indexImage++
      zIndex++
      if (indexImage >= images.length){
        indexImage = 0
      }
      render(images[indexImage], x, y, oldX, oldY)
    }else{
      console.log('bad res')
    }
  }
}

function init() {
  mobileNav()
  initAnimate()
  // moveLettersInit()
  initDots()

  setTimeout(() => {
    imageMouse()
  }, 2000)

  function closeLettersBlock() {
    $('.blockLetters').addClass('active')
    $('.afterLetters').addClass('active')
    $('.afterLetters-offset').remove()
    setTimeout(() => {
      $('.blockLetters').remove()
      $('.blockLetters').off()
    }, 1000)
  }

  $('.blockLetters').click(closeLettersBlock)
  $('.blockLetters').scroll(closeLettersBlock);

}

$(document).ready(function () {
  init()
})

