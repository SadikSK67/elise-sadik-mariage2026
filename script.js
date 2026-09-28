/* =====================================
   ÉLÉMENTS
===================================== */

const intro =
  document.getElementById("intro");

const website =
  document.getElementById("website");

const coupleButton =
  document.getElementById("coupleButton");

const couple =
  document.getElementById("couple");

const languageButtons =
  document.querySelectorAll(
    "[data-lang]"
  );


/* =====================================
   TRADUCTIONS
===================================== */

const translations = {

  fr: {

    welcome:
      "Bienvenue dans notre histoire",

    enter:
      "Touchez les mariés pour entrer",

    navHome:
      "Accueil",

    navProgramme:
      "Programme",

    navAddress:
      "Adresse",

    navGuestbook:
      "Livre d'or",

    weMarry:
      "Nous nous marions",

    weddingDate:
      "19 décembre 2026",

    days:
      "Jours",

    hours:
      "Heures",

    minutes:
      "Minutes",

    seconds:
      "Secondes",

    ourDay:
      "Notre journée",

    programmeTitle:
      "Programme",

    gelinText:
      "La traditionnelle sortie de la mariée entourée de nos familles.",

    guestArrival:
      "Accueil des invités",

    guestArrivalText:
      "Nous aurons le plaisir de vous accueillir pour célébrer cette journée.",

    celebration:
      "Célébration",

    celebrationText:
      "Entrée des mariés, repas, musique et fête.",

    kinaText:
      "La traditionnelle cérémonie du henné.",

    meetHere:
      "Rendez-vous",

    route:
      "Voir l'itinéraire",

    fewWords:
      "Quelques mots pour nous",

    guestbookTitle:
      "Livre d'or",

    guestbookDescription:
      "Glissez votre message dans notre enveloppe.",

    send:
      "Envoyer mon message"

  },


  tr: {

    welcome:
      "Hikâyemize hoş geldiniz",

    enter:
      "Girmek için çifte dokunun",

    navHome:
      "Ana Sayfa",

    navProgramme:
      "Program",

    navAddress:
      "Adres",

    navGuestbook:
      "Anı Defteri",

    weMarry:
      "Evleniyoruz",

    weddingDate:
      "19 Aralık 2026",

    days:
      "Gün",

    hours:
      "Saat",

    minutes:
      "Dakika",

    seconds:
      "Saniye",

    ourDay:
      "Günümüz",

    programmeTitle:
      "Program",

    gelinText:
      "Ailelerimizle birlikte geleneksel gelin çıkarma.",

    guestArrival:
      "Misafirlerin karşılanması",

    guestArrivalText:
      "Bu özel günü birlikte kutlamak için sizleri karşılayacağız.",

    celebration:
      "Düğün",

    celebrationText:
      "Gelin ve damadın girişi, yemek, müzik ve eğlence.",

    kinaText:
      "Geleneksel kına töreni.",

    meetHere:
      "Buluşma noktası",

    route:
      "Yol tarifi",

    fewWords:
      "Bizim için birkaç söz",

    guestbookTitle:
      "Anı Defteri",

    guestbookDescription:
      "Mesajınızı zarfımıza bırakın.",

    send:
      "Mesajımı gönder"

  },


  ku: {

    welcome:
      "Bi xêr hatin çîroka me",

    enter:
      "Ji bo ketinê li ser zewaciyan bitikînin",

    navHome:
      "Destpêk",

    navProgramme:
      "Bername",

    navAddress:
      "Navnîşan",

    navGuestbook:
      "Pirtûka mêvanan",

    weMarry:
      "Em dizewicin",

    weddingDate:
      "19 Kanûna Pêşîn 2026",

    days:
      "Roj",

    hours:
      "Saet",

    minutes:
      "Deqîqe",

    seconds:
      "Saniye",

    ourDay:
      "Roja me",

    programmeTitle:
      "Bername",

    gelinText:
      "Derketina kevneşopî ya bûkê bi malbatên me re.",

    guestArrival:
      "Pêşwaziya mêvanan",

    guestArrivalText:
      "Em ê ji bo pîrozkirina vê rojê bi hev re pêşwaziya we bikin.",

    celebration:
      "Dawet",

    celebrationText:
      "Hatina bûk û zavê, xwarin, muzîk û şahî.",

    kinaText:
      "Merasyma kevneşopî ya henayê.",

    meetHere:
      "Cihê me",

    route:
      "Rê nîşan bide",

    fewWords:
      "Çend peyv ji bo me",

    guestbookTitle:
      "Pirtûka mêvanan",

    guestbookDescription:
      "Peyama xwe têxin nav zerfa me.",

    send:
      "Peyama min bişîne"

  },


  de: {

    welcome:
      "Willkommen in unserer Geschichte",

    enter:
      "Berührt das Brautpaar, um einzutreten",

    navHome:
      "Startseite",

    navProgramme:
      "Programm",

    navAddress:
      "Adresse",

    navGuestbook:
      "Gästebuch",

    weMarry:
      "Wir heiraten",

    weddingDate:
      "19. Dezember 2026",

    days:
      "Tage",

    hours:
      "Stunden",

    minutes:
      "Minuten",

    seconds:
      "Sekunden",

    ourDay:
      "Unser Tag",

    programmeTitle:
      "Programm",

    gelinText:
      "Der traditionelle Auszug der Braut im Kreise unserer Familien.",

    guestArrival:
      "Empfang der Gäste",

    guestArrivalText:
      "Wir freuen uns, euch zu diesem besonderen Tag begrüßen zu dürfen.",

    celebration:
      "Hochzeitsfeier",

    celebrationText:
      "Einzug des Brautpaares, Essen, Musik und Feier.",

    kinaText:
      "Die traditionelle Henna-Zeremonie.",

    meetHere:
      "Treffpunkt",

    route:
      "Route anzeigen",

    fewWords:
      "Ein paar Worte für uns",

    guestbookTitle:
      "Gästebuch",

    guestbookDescription:
      "Legt eure Nachricht in unseren Umschlag.",

    send:
      "Nachricht senden"

  },


  en: {

    welcome:
      "Welcome to our story",

    enter:
      "Touch the newlyweds to enter",

    navHome:
      "Home",

    navProgramme:
      "Schedule",

    navAddress:
      "Address",

    navGuestbook:
      "Guestbook",

    weMarry:
      "We're getting married",

    weddingDate:
      "December 19, 2026",

    days:
      "Days",

    hours:
      "Hours",

    minutes:
      "Minutes",

    seconds:
      "Seconds",

    ourDay:
      "Our day",

    programmeTitle:
      "Schedule",

    gelinText:
      "The traditional bridal departure surrounded by our families.",

    guestArrival:
      "Guest arrival",

    guestArrivalText:
      "We look forward to welcoming you to celebrate this special day.",

    celebration:
      "Celebration",

    celebrationText:
      "Bride and groom entrance, dinner, music and celebration.",

    kinaText:
      "The traditional henna ceremony.",

    meetHere:
      "Meet us here",

    route:
      "Get directions",

    fewWords:
      "A few words for us",

    guestbookTitle:
      "Guestbook",

    guestbookDescription:
      "Place your message inside our envelope.",

    send:
      "Send my message"

  }

};


/* =====================================
   CHANGER LANGUE
===================================== */

function changeLanguage(lang) {

  const t =
    translations[lang];

  if (!t) return;


  document.documentElement.lang =
    lang;


  document.getElementById(
    "introWelcome"
  ).textContent =
    t.welcome;


  document.getElementById(
    "enterText"
  ).textContent =
    t.enter;


  document
    .querySelectorAll(
      "[data-i18n]"
    )
    .forEach(element => {

      const key =
        element.dataset.i18n;

      if (t[key]) {
        element.textContent =
          t[key];
      }

    });


  document
    .querySelectorAll(
      ".language"
    )
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.lang === lang
      );

    });


  localStorage.setItem(
    "weddingLanguage",
    lang
  );

}


/* boutons langue */

languageButtons.forEach(button => {

  button.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      changeLanguage(
        button.dataset.lang
      );

    }
  );

});


const savedLanguage =
  localStorage.getItem(
    "weddingLanguage"
  ) || "fr";

changeLanguage(savedLanguage);


/* =====================================
   COUPLE QUI DANSE
===================================== */

coupleButton.addEventListener(
  "click",
  () => {

    couple.classList.add(
      "dancing"
    );


    setTimeout(() => {

      intro.classList.add(
        "fade-away"
      );

    }, 1050);


    setTimeout(() => {

      intro.style.display =
        "none";

      website.classList.remove(
        "hidden"
      );

      website.classList.add(
        "visible"
      );

      window.scrollTo(
        0,
        0
      );

    }, 1850);

  }
);


/* =====================================
   COMPTE À REBOURS
===================================== */

const weddingDate =
  new Date(
    "2026-12-19T17:00:00+01:00"
  );


function updateCountdown() {

  const now =
    new Date();

  const difference =
    weddingDate - now;


  if (difference <= 0) {

    document.getElementById(
      "days"
    ).textContent = "00";

    document.getElementById(
      "hours"
    ).textContent = "00";

    document.getElementById(
      "minutes"
    ).textContent = "00";

    document.getElementById(
      "seconds"
    ).textContent = "00";

    return;

  }


  const days =
    Math.floor(
      difference /
      86400000
    );


  const hours =
    Math.floor(
      difference /
      3600000
    ) % 24;


  const minutes =
    Math.floor(
      difference /
      60000
    ) % 60;


  const seconds =
    Math.floor(
      difference /
      1000
    ) % 60;


  document.getElementById(
    "days"
  ).textContent =
    days;


  document.getElementById(
    "hours"
  ).textContent =
    String(hours)
      .padStart(2, "0");


  document.getElementById(
    "minutes"
  ).textContent =
    String(minutes)
      .padStart(2, "0");


  document.getElementById(
    "seconds"
  ).textContent =
    String(seconds)
      .padStart(2, "0");

}


updateCountdown();

setInterval(
  updateCountdown,
  1000
);


/* =====================================
   LIVRE D'OR / ENVELOPPE
===================================== */

const guestbookForm =
  document.getElementById(
    "guestbookForm"
  );

const envelope =
  document.getElementById(
    "envelope"
  );

const confirmation =
  document.getElementById(
    "sendConfirmation"
  );


guestbookForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();


    envelope.classList.add(
      "sending"
    );


    setTimeout(() => {

      confirmation.classList.add(
        "visible"
      );

    }, 1200);


    /*
      On attend que l'animation
      de l'enveloppe soit terminée
      avant d'envoyer réellement
      le formulaire.
    */

    setTimeout(() => {

      guestbookForm.submit();

    }, 2200);

  }
);
