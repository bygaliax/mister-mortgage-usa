import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // Astro 7 cambió el valor por defecto a 'jsx' (borra espacios entre etiquetas y pega textos del nav). true = comportamiento de Astro 5.
  compressHTML: true,
  trailingSlash: 'never',
  build: {
    // Genera archivos planos (loan-options.html) en vez de carpetas
    // (loan-options/index.html). Simplifica las URLs limpias en Apache/IONOS.
    format: 'file',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
