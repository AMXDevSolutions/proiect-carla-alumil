// =============================================================================
//  app/page.js – PAGINA DE START (adresa „/”)
// =============================================================================
//  Echivalentul fișierului `index.html` din mockup.
//
//  Diferențe față de HTML-ul obișnuit (reguli JSX/React):
//    • `class`  se scrie `className`
//    • comentariile se scriu {/* așa */}
//    • orice etichetă fără conținut se închide cu „/>”, ex: <img ... />
//    • imaginile din folderul `public/` se scriu cu „/” în față: "/folder.png"
// =============================================================================

// Importăm componenta interactivă a folderului (vezi app/components/FolderMenu.js)
import FolderMenu from "./components/FolderMenu";

// Datele fondatoarelor, ținute separat de HTML.
// Ca să adaugi/modifici o fondatoare, schimbi doar lista aceasta –
// cardurile se generează automat mai jos cu `.map(...)`.
const fondatoare = [
  {
    nume: "Balașcă Theodora- Carla",
    scoala: "Colegiul Național “Sfântul Sava”",
    poza: "/fondatoare-theodora.jpg",
    alt: "Balașcă Theodora-Carla, fondatoare Vox Feminae",
  },
  {
    nume: "Achim Sara- Maria",
    scoala: "Colegiul Național “Sfântul Sava”",
    poza: "/fondatoare-sara.jpg",
    alt: "Achim Sara-Maria, fondatoare Vox Feminae",
  },
];

// Linkul către formularul Google pentru înscrieri (butonul „Alătură-te”)
const LINK_FORMULAR = "https://forms.gle/Vcw6ENVdadi7HVfH9";

// Fiecare pagină exportă o funcție care returnează conținutul ei.
export default function Home() {
  return (
    <main className="site-frame">
      {/* ============================================================
          FOAIA DE HÂRTIE COMUNĂ (din mockup-ul v29)
          Un singur chenar cu margine festonată care cuprinde AMBELE
          secțiuni de mai jos: colajul și fondatoarele. Așa arată ca o
          singură pagină lungă, fără festoane la mijloc.
          ============================================================ */}
      <section className="paper-panel home-long-frame">
        {/* ------------------------------------------------------------
          SECȚIUNEA 1: colajul principal (logo, fotografii, ilustrații)
          ------------------------------------------------------------ */}
        <section className="home-panel">
          <p className="collab">în colaborare cu asociația CARIESTA și ANES</p>

          {/* Folderul „Find out more” + meniul cu Revista / Evenimente */}
          <FolderMenu />

          {/* Logo-ul mare din centru */}
          <div className="hero-paper" aria-label="Logo Vox Feminae">
            <img
              className="center-logo"
              src="/logo-vox-feminae.png"
              alt="Vox Feminae"
            />
          </div>

          {/* Textul de prezentare. <br /> = rând nou, ca în mockup. */}
          <p className="intro">
            Un proiect educațional care dă vizibilitate
            <br />
            vocilor femeilor din literatură, cultură și
            <br />
            societate, prin conferințe, discuții și o
            <br />
            revistă digitală.
          </p>

          {/* Butonul „Alătură-te”.
            target="_blank" deschide formularul într-un tab nou;
            rel="noopener noreferrer" este o măsură de siguranță pentru asta. */}
          <a
            className="join-cta"
            href={LINK_FORMULAR}
            target="_blank"
            rel="noopener noreferrer"
          >
            Alătură-te
            {/* Fundița albă desenată în SVG (desen vectorial, scris ca și cod).
              aria-hidden="true" = e doar decor, cititoarele de ecran o ignoră.
              Atributele cu cratimă din SVG se scriu în JSX „camelCase”:
              stroke-width → strokeWidth etc. */}
            <span className="button-bow" aria-hidden="true">
              <svg viewBox="0 0 100 58" xmlns="http://www.w3.org/2000/svg">
                <g
                  fill="none"
                  stroke="#fffaf7"
                  strokeWidth="4.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M48 29C28 4 7 5 8 21c1 13 22 15 40 8M52 29C72 4 93 5 92 21c-1 13-22 15-40 8M49 30C40 43 31 54 29 55M51 30c9 13 18 24 20 25" />
                  <path
                    d="M43 29c4-8 10-8 14 0-4 8-10 8-14 0z"
                    fill="#fffaf7"
                  />
                </g>
              </svg>
            </span>
          </a>

          {/* Fotografiile de arhivă „lipite cu bandă” (banda e desenată din CSS) */}
          <div className="scrap scrap-left">
            <img
              src="/fotografie-stanga.png"
              alt="Fotografie de arhivă: femeie vorbind la megafon la un protest"
            />
          </div>
          <div className="scrap scrap-right">
            <img
              src="/fotografie-dreapta.png"
              alt="Fotografie de arhivă de la un marș pentru drepturile reproductive"
            />
          </div>

          {/* Ilustrațiile desenate de mână din colțurile de jos */}
          <img
            className="doodle doodle-left"
            src="/illustratie-stanga.png"
            alt="Ilustrație desenată manual cu trei femei care susțin drepturile femeilor"
          />
          <img
            className="doodle doodle-right"
            src="/illustratie-dreapta.png"
            alt="Ilustrație desenată manual cu femei participante la protest"
          />
        </section>

        {/* ------------------------------------------------------------
          SECȚIUNEA 2: Fondatoarele
          id="founders" permite linkul „/#founders” din pagina Revista
          să sară direct aici.
          ------------------------------------------------------------ */}
        <section
          className="founders-section"
          id="founders"
          aria-labelledby="founders-title"
        >
          <div className="founders-heading">
            <h2 id="founders-title">
              Fondatoare <span className="founders-script">Vox Feminae</span>
            </h2>
            <p>
              Două voci, aceeași dorință de a face loc ideilor care merită
              auzite.
            </p>
          </div>

          <div className="founders-grid">
            {/* `.map` parcurge lista `fondatoare` de mai sus și creează câte
              un card pentru fiecare persoană. `key` este obligatoriu în
              React – un identificator unic pentru fiecare element din listă. */}
            {fondatoare.map((persoana) => (
              <article className="founder-card" key={persoana.nume}>
                {/* loading="lazy" = poza se încarcă doar când ajungi cu
                  scroll-ul la ea (pagina se deschide mai repede) */}
                <img src={persoana.poza} alt={persoana.alt} loading="lazy" />
                <div className="founder-info">
                  <h3>{persoana.nume}</h3>
                  <p>{persoana.scoala}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* Aici se închide foaia de hârtie comună (.home-long-frame) */}
      </section>
    </main>
  );
}
