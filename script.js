(() => {
'use strict';

/* ===== CONFIG : à modifier ===== */
const CONFIG = {
  schoolName: "École Taibatoune"
};

/* ===== TRADUCTIONS ===== */
const T = {
fr: {
 skip:"Aller au contenu", brandSub:"Tous pour un sourire", navAria:"Navigation principale", langAria:"Langue", igAria:"Instagram Club Basma", menuAria:"Menu",
 nav1:"Accueil", nav2:"Activités", nav3:"Le Club", nav4:"Nous rejoindre",
 heroTag:"Association solidaire de jeunes lycéens", heroT1:"Tous pour", heroT2:"un sourire", noteHero:"Un petit geste, un grand sourire", noteAct:"Dessiner, jouer, partager !", noteJoin:"Bienvenue dans la famille !",
 heroLead:"Le Club Basma s’engage à venir en aide aux personnes dans le besoin, notamment aux enfants, pour contribuer à leur bonheur, à leur épanouissement et à leur bien-être.",
 heroBtn1:"Découvrir nos activités", heroBtn2:"Notre Instagram",
 heroAlt:"Un membre du club déguisé en clown porte un enfant, entouré d’enfants souriants dans une cour d’école",
 introT1:"Une famille qui sème le ", introT2:"bonheur",
 introP:"Le Club Basma est une association à vocation sociale et solidaire, portée par des jeunes animés par un esprit de solidarité, de générosité et de responsabilité sociale.",
 actT:"Nos actions en images", actP:"Dessin, peinture, jeux et sport : des moments de joie partagés avec les enfants.",
 alt1:"Des enfants jouent au football entre des plots et des cerceaux dans la cour d’une école", cap1:"Activités ludiques et sportives",
 alt2:"Des enfants colorient des dessins avec des crayons autour d’une table", cap2:"Ateliers de dessin",
 collageNote:"Chaque initiative favorise le partage, la créativité et les liens humains.",
 lettersT1:"Ouvrez nos ", lettersT2:"lettres", lettersP:"Six messages pour découvrir qui nous sommes. Touchez une lettre pour l’ouvrir.",
 alt3:"Table d’atelier avec flacons de peinture, palettes et crayons de couleur préparés pour les enfants", cap3:"Ateliers de peinture",
 s1t:"Présentation et historique du club",
 s1p:"Le Club Basma est une association à vocation sociale et solidaire, fondée en 2013 à Taïba par Samir Talmsani et Khadija Khalfaoui. Porté par des jeunes lycéens animés par un esprit de solidarité, de générosité et de responsabilité sociale, le club s’engage à venir en aide aux personnes dans le besoin, notamment aux enfants, afin de contribuer à leur bonheur, à leur épanouissement et à leur bien-être.",
 s2t:"Nos actions et activités",
 s2p:"À travers différentes initiatives solidaires, le Club Basma cherche à apporter de la joie, de l’espoir et du soutien aux personnes qui en ont le plus besoin. Ses actions comprennent notamment les collectes de dons, les distributions de fournitures scolaires, les ateliers de dessin et de peinture, ainsi que les activités ludiques et sportives destinées aux enfants. Ces initiatives favorisent également le partage, la créativité et les liens humains.",
 s3t:"Nos valeurs et nos objectifs",
 s3p:"Le Club Basma repose sur des valeurs essentielles telles que l’entraide, le partage, la générosité, la positivité et l’engagement. Son objectif est de renforcer l’esprit de solidarité au sein de la société, de sensibiliser les jeunes aux causes sociales et de les encourager à participer activement à des projets collectifs. Le club permet également à ses membres de développer leur esprit d’équipe, leur sens des responsabilités et leur capacité à travailler ensemble.",
 s4t:"Adhésion et recrutement des membres",
 s4p:"Toute personne souhaitant rejoindre la famille Basma peut nous contacter via notre compte Instagram officiel Association Basma. Après la prise de contact, un lien d’inscription lui est envoyé afin de remplir un formulaire contenant les informations nécessaires, notamment le nom, le prénom et le numéro de téléphone. Une fois le formulaire complété et la cotisation réglée, le candidat devient officiellement membre du Club Basma et peut prendre part à ses activités, à ses projets et à ses initiatives solidaires.",
 igCta:"Écrire sur Instagram",
 s5t:"Notre vision et notre mission",
 s5p:"Le Club Basma aspire à contribuer à la construction d’une société plus solidaire, humaine et inclusive, dans laquelle chacun peut bénéficier de soutien et d’attention. À travers l’engagement de ses membres et la réalisation de projets caritatifs, il souhaite multiplier les initiatives positives, renforcer les liens sociaux et montrer que les jeunes peuvent jouer un rôle important dans l’amélioration de leur communauté.",
 s6t:"Notre devise",
 s6pa:"Plus qu’une simple association, le Club Basma représente un espace de générosité, d’engagement et d’humanité, où chaque action, aussi petite soit-elle, peut faire une grande différence.",
 s6pb:"« Tous pour un sourire » est bien plus qu’une devise : c’est l’expression de notre engagement à semer le bonheur, à redonner espoir et à contribuer, ensemble, à construire un avenir meilleur pour tous.",
 alt4:"Un groupe de jeunes marche ensemble dans une ruelle ombragée", cap4:"Esprit d’équipe et de partage",
 joinT1:"Rejoignez la famille ", joinT2:"Basma",
 joinP:"Contactez-nous sur Instagram : un lien d’inscription vous sera envoyé pour devenir membre et participer à nos activités, nos projets et nos initiatives solidaires.",
 joinBtn:"Rejoindre via Instagram",
 followT:"Suivez nos sourires", followP:"Retrouvez le Club Basma sur son compte Instagram officiel.",
 slogan:"« Tous pour un sourire »", footIg:"Instagram officiel", floatIg:"Suivez-nous"
},
en: {
 skip:"Skip to content", brandSub:"Everyone for a smile", navAria:"Main navigation", langAria:"Language", igAria:"Club Basma on Instagram", menuAria:"Menu",
 nav1:"Home", nav2:"Activities", nav3:"The Club", nav4:"Join us",
 heroTag:"A charity association run by high school students", heroT1:"Everyone for", heroT2:"a smile", noteHero:"A small gesture, a big smile", noteAct:"Draw, play, share!", noteJoin:"Welcome to the family!",
 heroLead:"Club Basma is committed to helping people in need, especially children, to contribute to their happiness, personal growth and well-being.",
 heroBtn1:"Discover our activities", heroBtn2:"Our Instagram",
 heroAlt:"A club member dressed as a clown carries a child, surrounded by smiling children in a school yard",
 introT1:"A family that spreads ", introT2:"happiness",
 introP:"Club Basma is a social and charitable association, driven by young people with a spirit of solidarity, generosity and social responsibility.",
 actT:"Our work in pictures", actP:"Drawing, painting, games and sports: moments of joy shared with children.",
 alt1:"Children play football between cones and hoops in a school yard", cap1:"Games and sports activities",
 alt2:"Children colour drawings with crayons around a table", cap2:"Drawing workshops",
 collageNote:"Every initiative encourages sharing, creativity and human connection.",
 lettersT1:"Open our ", lettersT2:"letters", lettersP:"Six messages to discover who we are. Tap a letter to open it.",
 alt3:"Workshop table with paint bottles, palettes and crayons set out for children", cap3:"Painting workshops",
 s1t:"Introduction and history of the club",
 s1p:"Club Basma is a social and charitable association, founded in 2013 in Taïba by Samir Talmsani and Khadija Khalfaoui. Run by high school students driven by a spirit of solidarity, generosity and social responsibility, the club is committed to helping people in need, especially children, to contribute to their happiness, personal growth and well-being.",
 s2t:"Our actions and activities",
 s2p:"Through a range of charitable initiatives, Club Basma seeks to bring joy, hope and support to those who need it most. Its actions include donation drives, distributions of school supplies, drawing and painting workshops, as well as games and sports activities for children. These initiatives also encourage sharing, creativity and human connection.",
 s3t:"Our values and goals",
 s3p:"Club Basma is built on essential values such as mutual aid, sharing, generosity, positivity and commitment. Its goal is to strengthen the spirit of solidarity in society, to raise young people’s awareness of social causes and to encourage them to take an active part in collective projects. The club also helps its members develop teamwork, a sense of responsibility and the ability to work together.",
 s4t:"Membership and recruitment",
 s4p:"Anyone who wishes to join the Basma family can contact us through our official Instagram account, Association Basma. After getting in touch, they receive a registration link to fill in a form with the necessary information, including their last name, first name and phone number. Once the form is completed and the membership fee is paid, the applicant officially becomes a member of Club Basma and can take part in its activities, projects and charitable initiatives.",
 igCta:"Message us on Instagram",
 s5t:"Our vision and mission",
 s5p:"Club Basma aspires to help build a more caring, humane and inclusive society, where everyone can receive support and attention. Through the commitment of its members and the delivery of charitable projects, it hopes to multiply positive initiatives, strengthen social bonds and show that young people can play an important role in improving their community.",
 s6t:"Our motto",
 s6pa:"More than just an association, Club Basma is a space of generosity, commitment and humanity, where every action, however small, can make a big difference.",
 s6pb:"“Everyone for a smile” is far more than a motto: it expresses our commitment to spreading happiness, restoring hope and working together to build a better future for everyone.",
 alt4:"A group of young people walk together along a shaded alley", cap4:"Team spirit and sharing",
 joinT1:"Join the ", joinT2:"Basma family",
 joinP:"Contact us on Instagram: we will send you a registration link so you can become a member and take part in our activities, projects and charitable initiatives.",
 joinBtn:"Join via Instagram",
 followT:"Follow our smiles", followP:"Find Club Basma on its official Instagram account.",
 slogan:"“Everyone for a smile”", footIg:"Official Instagram", floatIg:"Follow us"
}
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
let lang = 'fr';

function applyLang(l) {
  lang = T[l] ? l : 'fr';
  const d = T[lang];
  $$('[data-i18n]').forEach(el => { if (d[el.dataset.i18n] != null) el.textContent = d[el.dataset.i18n]; });
  $$('[data-i18n-alt]').forEach(el => { el.alt = d[el.dataset.i18nAlt] || el.alt; });
  $$('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', d[el.dataset.i18nAria] || ''); });
  $$('.lang__btn').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  document.documentElement.lang = lang;
  document.title = lang === 'fr' ? 'Club Basma — Tous pour un sourire' : 'Club Basma — Everyone for a smile';
}

function initLang() {
  let saved = null;
  try { saved = localStorage.getItem('basma-lang'); } catch (e) {}
  applyLang(saved === 'en' ? 'en' : 'fr');
  $$('.lang__btn').forEach(b => b.addEventListener('click', () => {
    applyLang(b.dataset.lang);
    try { localStorage.setItem('basma-lang', lang); } catch (e) {}
  }));
}

function initBrand() {
  $$('[data-school]').forEach(el => { el.textContent = CONFIG.schoolName; });
  const y = $('#year'); if (y) y.textContent = new Date().getFullYear();
}

function initDoodles() {
  $$('.dd[data-d]').forEach(el => {
    el.innerHTML = '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><use href="#d-' + el.dataset.d + '"/></svg>';
  });
}

function initLetters() {
  $$('.letter').forEach(letter => {
    const pop = document.createElement('i');
    pop.className = 'letter__pop'; pop.setAttribute('aria-hidden', 'true');
    pop.innerHTML = '<svg viewBox="0 0 64 64"><use href="#d-heart"/></svg>';
    letter.appendChild(pop);
    const btn = $('.letter__btn', letter);
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      letter.classList.toggle('is-open', open);
    });
  });
}

function initNav() {
  const burger = $('#burger'), links = $('#navLinks');
  const set = open => { burger.setAttribute('aria-expanded', String(open)); links.classList.toggle('is-open', open); };
  burger.addEventListener('click', () => set(burger.getAttribute('aria-expanded') !== 'true'));
  $$('a', links).forEach(a => a.addEventListener('click', () => set(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { set(false); } });
  document.addEventListener('click', e => { if (!e.target.closest('#nav')) set(false); });
  matchMedia('(min-width:901px)').addEventListener('change', e => { if (e.matches) set(false); });

  const nav = $('#nav');
  let tick = false;
  const onScroll = () => { if (tick) return; tick = true; requestAnimationFrame(() => { nav.classList.toggle('is-scrolled', scrollY > 12); tick = false; }); };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const secs = $$('main section[id]');
  const map = new Map($$('a', links).map(a => [a.getAttribute('href').slice(1), a]));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { map.forEach(a => a.classList.remove('is-active')); const a = map.get(e.target.id); if (a) a.classList.add('is-active'); }
    }), { rootMargin: '-45% 0px -50% 0px' });
    secs.forEach(s => io.observe(s));
  }
}

function initReveal() {
  const els = $$('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  els.forEach(e => io.observe(e));
}

initBrand(); initDoodles(); initLang(); initLetters(); initNav(); initReveal();
requestAnimationFrame(() => requestAnimationFrame(() => $('#heroTitle').classList.add('in')));
})();
