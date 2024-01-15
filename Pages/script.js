// partie Menu responsive ********************************************************
const hamburgerToggler = document.querySelector(".hamburger")
const navLinkscontainer = document.querySelector(".navlinks-container");
const contactToggler = document.querySelector(".btn")

const toggleNav = () => {
  hamburgerToggler.classList.toggle("open")

  const ariaToggle = hamburgerToggler.getAttribute
    ("aria-expanded") === "true" ? "false" : "true"
  hamburgerToggler.setAttribute("aria-epanded", ariaToggle)
  navLinkscontainer.classList.toggle("open")
}

hamburgerToggler.addEventListener("click", toggleNav)

contactToggler.addEventListener("click", toggleNav)

new ResizeObserver(entries => {
  if (entries[0].contentRect.width <= 950) {
    navLinkscontainer.style.transition = "transform .3s ease-out"
  } else {
    navLinkscontainer.style.transition = "none"
  }
}).observe(document.body)

//Partie menu qui devient opaque en scrollant *************************************
// window.onscroll = () => { scrollFunction() };

// function scrollFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

//     document.getElementById("navbar").style.background = "#2B456C";
//   } else {

//     document.getElementById("navbar").style.background = "none";
//   }
// }

//************************* CARROUSEL SLICK***************************/
//-------------------------------------------------------------------*/
// ******* ça, c'est lié au carousel Slick (doit être ici et pas dans le Html, sinon ça fout la merde)*******************
$(document).on('ready', function () {
  $(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true
  });
});
//Pour faire défiler le carousel en Auto
function carouselAuto() {
  let counter = 1;
  console.log("carousel defile en auto")
  setInterval(function () {
    document.getElementById('slick-slide' + counter).checked = true;
    // document.getElementById('carousel-' + counter).checked = true;
    counter++;
    if (counter > 3) { counter = 1; }
  }, 5000);
}

// Pour faire du texte qui apparait lettre après lettre ********************************

// let words = ['L\'Ecole de parapente du parc Naturel Régional du massif des Bauges',
//    'Entre lac et montagnes\, un endroit idéal pour découvrir et apprendre le parapente'],
//   part,
//   i = 0,
//   offset = 0,
//   len = words.length,
//   forwards = true,
//   skip_count = 0,
//   skip_delay = 40,
//   speed = 60;
// const wordflick = function () {
//   setInterval(function () {
//     if (forwards) {
//       if (offset >= words[i].length) {
//         ++skip_count;
//         if (skip_count == skip_delay) {
//           forwards = false;
//           skip_count = 0;
//         }
//       }
//     }
//     else {
//       if (offset == 0) {
//         forwards = true;
//         i++;
//         offset = 0;
//         if (i >= len) {
//           i = 0;
//         }
//       }
//     }
//     part = words[i].substr(0, offset);
//     if (skip_count == 0) {
//       if (forwards) {
//         offset++;
//       }
//       else {
//         offset--;
//       }
//     }
//     $('.home-title').text(part); // Classe CSS sur laquelle appliquer l'animation
//   }, speed);
// };

// $(document).ready(function () {
//   wordflick();
// });


// *** essais pour demarrage auto de la video ****************************
// setInterval(function () {
//   $('video[playonscroll]').each(function () {
//     var videoElement = $(this)[0];
//     var eTop = $(this).offset().top;
//     var elementOffestY = (eTop - $(window).scrollTop());
//     var videoOffset = [elementOffestY, elementOffestY + $(this).height()];

//     if (($(this).height()) > 120 && ($(this).height()) < 290) {
//       console.log('version mobile');
//       if ((videoOffset[0] < 500) && (videoOffset[1] > 430)) {
//         if (!videoElement.playing) {
//           videoElement.play();
//         }
//       } else {
//         if (videoElement.playing) {
//           videoElement.pause();
//         }
//       }
//     } else if
//       (($(this).height()) > 420 && ($(this).height()) < 480) {
//       console.log('version moyenne');
//       if ((videoOffset[0] < 450) && (videoOffset[1] > 550)) {
//         if (!videoElement.playing) {
//           videoElement.play();
//         }
//       } else {
//         if (videoElement.playing) {
//           videoElement.pause();
//         }
//       }
//     } else if
//       (($(this).height()) > 600) {
//       console.log('version large');
//       if ((videoOffset[0] < 400) && (videoOffset[1] > 600)) {
//         if (!videoElement.playing) {
//           videoElement.play();
//         }
//       } else {
//         if (videoElement.playing) {
//           videoElement.pause();
//         }
//       }
//     }
//   });
// }, 300);

// Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
//   get: function () {
//     return (this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
//   }
// })
