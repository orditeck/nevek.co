export type Language = keyof typeof languages
export const languages = {
  en: "English",
  fr: "Français",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",

    "home.documentTitle": "Welcome!",
    "home.welcome.p1": "Bonjour, I'm Keven!",
    "home.welcome.p2":
      "With 15+ years in the tech industry, I excel in delivering outstanding results for high-stakes projects!",
    "home.animatedText.p1": "I've heard that",
    "home.animatedText.p2": "you're in need of",
    "home.links.letsChat": "Let's chat",
    "home.links.learnMore": "Learn more",

    "sidebar.scheduleVirtualCall.title": "Schedule a Virtual Call",
    "sidebar.scheduleVirtualCall.content": "Book a 15-minute call to discuss how I can help you succeed.",
    "sidebar.contact.or": "or, you can also:",
    "sidebar.contact.ctaEmail": "Contact me by email",
    "sidebar.contact.ctaCall": "Give me a call:",

    "toc.onThisPage": "On this page",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.about": "À propos",

    "home.documentTitle": "Bienvenue!",
    "home.welcome.p1": "Bonjour, je suis Keven!",
    "home.welcome.p2":
      "Avec plus de 15 ans d'expérience en développement logiciel, j'excelle à livrer des résultats exceptionnels pour des projets à hauts enjeux.",
    "home.animatedText.p1": "J'ai entendu dire que",
    "home.animatedText.p2": "vous avez besoin d'un",
    "home.links.letsChat": "Discutons",
    "home.links.learnMore": "Voir mes services",

    "sidebar.scheduleVirtualCall.title": "Planifier un appel virtuel",
    "sidebar.scheduleVirtualCall.content": "Prenez rendez-vous pour un appel de 15 minutes afin de discuter de quelle manière je peux contribuer à votre succès.",
    "sidebar.contact.or": "ou, vous pouvez également :",
    "sidebar.contact.ctaEmail": "Communiquer avec moi par courriel",
    "sidebar.contact.ctaCall": "Par téléphone :",

    "toc.onThisPage": "Sur cette page",
  },
};
