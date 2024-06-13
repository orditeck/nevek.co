import { defineConfig, passthroughImageService } from "astro/config";
import react from "@astrojs/react";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc({ allowHTML: true })],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
  build: {
    assets: "_assets",
    format: "preserve",
  },
  image: {
    service: passthroughImageService(),
  },
});
