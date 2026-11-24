// =============================================================================
//  SubpageHeader.js – bara de sus a subpaginilor (Revista, Evenimente)
// =============================================================================
//  În mockup, același antet (logo mic + „← Înapoi acasă”) era copiat în
//  fiecare fișier HTML. În React îl scriem O SINGURĂ DATĂ, ca o componentă,
//  și îl folosim pe fiecare pagină cu <SubpageHeader />.
//  Dacă vrei să-l schimbi, îl modifici doar aici.
// =============================================================================

import Link from "next/link";

export default function SubpageHeader() {
  return (
    <header className="subpage-top">
      {/* Logo-ul mic care duce înapoi la pagina de start ("/") */}
      <Link className="mini-brand" href="/" aria-label="Vox Feminae – acasă">
        <img src="/logo-revista.png" alt="Vox Feminae" />
      </Link>

      <Link className="home-link" href="/">
        ← Înapoi acasă
      </Link>
    </header>
  );
}
