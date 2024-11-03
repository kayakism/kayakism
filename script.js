function sound() {
  let snd = new Audio('https://raw.githubusercontent.com/kayakism/catechism.github.io/main/flowersneverbend.mp3')
  snd.play()
}

let sites = [
  'http://medievalist.net/hourstxt/deadves.htm',
  'https://www.richardscarry.com/games',
  'http://www.windows93.net/',
  'https://95isalive.com/links.htm',
  'https://geocities.restorativland.org/TimesSquare/Realm/9348/',
  'https://history.state.gov/milestones/1989-1992/breakup-yugoslavia',
  'https://www.heavensgate.com/',
  'https://www.madsci.org/~lynn/VH/',
  'https://www.madsci.org/~lynn/VH/tour.html',
  'https://va.com.au/parallel/x1/gallery/suzanne_treister/',
  'https://web.archive.org/web/19961023235157/http://www2.windows95.com/',
  'https://youtu.be/kX-wJ-DfNxA?si=j9N7wKeV0wa91rJc',
  'https://www.cameronsworld.net/',
  'https://web.archive.org/web/20020310002511/http://www.geocities.com:80/SiliconValley/Pines/5016/',
  'http://www.medievalist.net/webgl/paintedchurch/',
  'https://www.bpl.org/blogs/post/medieval-books-hours-bpl/',
  'https://geocities.restorativland.org/Area51/Meteor/5408/',
  'https://geocities.restorativland.org/Area51/Meteor/1117/',
  'https://geocities.restorativland.org/Area51/Meteor/1713/',
  'https://geocities.restorativland.org/Area51/Meteor/2546/',
  'https://geocities.restorativland.org/Area51/Meteor/2671/',
  'https://geocities.restorativland.org/Area51/Meteor/2904/',
  'https://geocities.restorativland.org/Area51/Meteor/4682/',
  'https://geocities.restorativland.org/TimesSquare/Realm/2659/',
  'https://www.eatonhand.com/fun/humor.htm',
  'https://web.archive.org/web/20090830110940/http://geocities.com/Paris/Salon/8611/',
  'https://web.archive.org/web/20070707085309/http://www.geocities.com/TimesSquare/4897/',
  'https://web.archive.org/web/20090830073341/http://geocities.com/SiliconValley/Hills/7282/Image8.gif',
  'https://geocities.restorativland.org/CollegePark/Residence/1896/',
  'https://geocities.restorativland.org/CollegePark/Residence/2140/',
  'https://geocities.restorativland.org/SiliconValley/Drive/1078/',
  'https://geocities.restorativland.org/RainForest/Andes/3939/',
  'https://geocities.restorativland.org/RainForest/Andes/4804/',
  'https://geocities.restorativland.org/SiliconValley/Garage/1841/',
  'https://geocities.restorativland.org/SiliconValley/Drive/4374/',
  'https://geocities.restorativland.org/SouthBeach/Gulf/2050/',
  'https://web.archive.org/web/20000815053052/http://www.startrek.com/',
  'https://web.archive.org/web/20031001172053/http://www.dolekemp96.org/main.htm',
  'https://geocities.restorativland.org/TimesSquare/Labyrinth/1078/',
  'https://geocities.restorativland.org/TimesSquare/Labyrinth/4663/',
  'https://web.archive.org/web/19961220075514/http://linkmag.com/',
  'https://web.archive.org/web/19961221020103/http://inngames.com/',
  'https://geocities.restorativland.org/TimesSquare/Labyrinth/8271/',
  'https://web.archive.org/web/19980627023840/http://www.megsplace.com/Beanies/'
];

function randomSite() {
  let i = parseInt(Math.random() * sites.length);
  location.href = sites[i];
}

const currentMonth = new Date(Date.now()).getMonth();

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}