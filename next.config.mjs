// =============================================================================
//  next.config.mjs – configurarea Next.js
// =============================================================================
//  Aici se pun setările speciale ale proiectului. Pentru un site de
//  prezentare ca acesta, setările implicite sunt suficiente, așa că
//  obiectul de configurare este aproape gol.
// =============================================================================

/** @type {import('next').NextConfig} */
const nextConfig = {
  // `reactStrictMode` activează verificări suplimentare în timpul dezvoltării
  // (te avertizează în consolă dacă ceva din cod nu e scris corect).
  // Nu afectează site-ul publicat.
  reactStrictMode: true,
};

export default nextConfig;
