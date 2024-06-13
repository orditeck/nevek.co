export type Route = {
  [key: string]: {
    [route: string]: string;
  };
};

export const routes: Route = {
  en: {
    "about-me": "about-me",
    services: "services",
    "services/for-entrepreneurs": "services/for-entrepreneurs",
    "services/for-developers": "services/for-developers",
    "services/for-organizations": "services/for-organizations",
  },
  fr: {
    "about-me": "a-propos",
    services: "services",
    "services/for-entrepreneurs": "services/pour-les-entrepreneurs",
    "services/for-developers": "services/pour-les-developpeurs",
    "services/for-organizations": "services/pour-les-organisations",
  },
};
