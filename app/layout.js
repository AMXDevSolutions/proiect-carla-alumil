// =============================================================================
//  app/layout.js – „rama” comună a tuturor paginilor
// =============================================================================
//  În Next.js (varianta „App Router”), fiecare folder din `app/` devine o
//  pagină a site-ului:
//      app/page.js             →  /            (pagina de start)
//      app/revista/page.js     →  /revista
//      app/evenimente/page.js  →  /evenimente
//
//  Fișierul `layout.js` din rădăcina lui `app/` „îmbracă” toate paginile:
//  conține etichetele <html> și <body>, care altfel s-ar repeta în fiecare
//  fișier HTML (cum era în mockup).
// =============================================================================

// Importăm stilurile o singură dată aici → se aplică pe tot site-ul.
import "./globals.css";

// `metadata` înlocuiește etichetele <title> și <meta name="description">
// din <head>. Next.js le scrie automat în HTML-ul fiecărei pagini.
// `template` înseamnă: pe subpagini, titlul devine „Revista – Vox Feminae”.
export const metadata = {
  title: {
    default: "Vox Feminae",
    template: "%s – Vox Feminae",
  },
  description:
    "Vox Feminae – un proiect educațional dedicat vocilor femeilor din literatură, cultură și societate.",
  // Iconița din tab-ul browserului
  icons: { icon: "/logo-revista.png" },
};

// `viewport` înlocuiește <meta name="viewport"> – face site-ul să se
// afișeze corect pe telefon.
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// `children` = conținutul paginii curente (Acasă, Revista sau Evenimente).
// Next.js îl pune automat aici, în interiorul <body>.
export default function RootLayout({ children }) {
  return (
    // lang="ro" spune browserului (și cititoarelor de ecran) că textul e în română
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
