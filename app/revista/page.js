// =============================================================================
//  app/revista/page.js – pagina REVISTA (adresa „/revista”)
// =============================================================================
//  Echivalentul fișierului `revista.html` din mockup.
//  Next.js creează automat adresa „/revista” pentru că fișierul se află
//  în folderul `app/revista/`.
// =============================================================================

import Link from "next/link";
import SubpageHeader from "../components/SubpageHeader";

// Titlul din tab-ul browserului. Datorită „template”-ului din layout.js,
// va apărea ca „Revista – Vox Feminae”.
export const metadata = {
  title: "Revista",
};

export default function Revista() {
  return (
    <main className="site-frame">
      <section className="paper-panel subpage-panel">
        {/* Antetul comun: logo mic + „← Înapoi acasă” */}
        <SubpageHeader />

        <div className="page-heading">
          <h1>REVISTA</h1>
          <p>
            Povești, idei și perspective care merită citite. Un spațiu dedicat
            vocilor feminine din literatură, cultură și societate.
          </p>
        </div>

        {/* În JSX, stilurile scrise direct pe element (style="...") devin
            un obiect JavaScript: style={{ marginTop: 8 }} = margin-top:8px */}
        <section className="latest article-section" style={{ marginTop: 8 }}>
          {/* ---------------- ARTICOLUL ----------------
              Pentru un articol nou, copiază tot blocul <article>…</article>
              și schimbă data, titlul și paragrafele. */}
          <article className="article-entry">
            <header className="article-header">
              <p className="article-meta">24 noiembrie 2026</p>
              <h2 className="article-title">Vox Feminae</h2>
            </header>

            <div className="article-body">
              <p>
                Vox Feminae este un proiect care își dorește să inspire și
                pornește de la o simplă idee: scopul omului, precum spune și
                Humboldt, este de a dezvolta într-un mod cât mai armonios și
                frumos toate capacitățile sale (rațiunea, simțirea,
                imaginația, voința), nefiind vorba despre acumularea de
                cunoștințe, ci despre cultivarea propriei gândiri.
              </p>
              <p>
                În 1892, scriitoarea și filosoafa afro-americană Anna Julia
                Cooper scrie:{" "}
                {/* {" "} = un spațiu păstrat explicit; JSX elimină spațiile
                    de la capăt de rând, așa că îl adăugăm manual. */}
                <span className="article-quote-inline">
                  “Education, then, is the safest and richest investment
                  possible to man.”
                </span>{" "}
                Multe s-au schimbat de atunci, însă aceleași întrebări rămân:
                ce citim, ce învățăm, ce uităm să întrebăm?
              </p>
              <p>
                Vox Feminae își propune să scoată la lumină vocile înghițite de
                istorie și să ofere, prin fiecare conferință și prin fiecare
                articol, o piesă în construirea unei culturi academice și umane
                în care femeile au același loc.
              </p>
              <p className="article-motto">
                Vox feminae fortitudinem et communitatem inspirat.
              </p>

              <h3>Cine are dreptul să fie auzit?</h3>
              <p>
                Istoria, literatura și cultura s-au scris multă vreme dintr-o
                singură perspectivă, iar tăcerea impusă unor voci a fost luată
                drept absență. Vox Feminae se opune acestei iluzii. A da
                vizibilitate femeilor înseamnă recunoașterea faptului că
                adevărul se vede mai bine din mai multe unghiuri și că o
                societate care ascultă doar pe jumătate rămâne, în fond,
                incompletă.
              </p>

              {/* Citatul evidențiat, cu bara roz în stânga */}
              <blockquote className="article-pullquote">
                Stereotipurile de gen sunt asemenea unor umbre moștenite care
                se află înăuntrul fiecăruia dintre noi.
              </blockquote>

              <p>
                Nu poți alege cine vrei să fii dacă nu ai pus mai întâi sub
                semnul întrebării ce ți s-a spus că trebuie să fii.
              </p>
            </div>

            {/* Semnătura autoarelor + link către secțiunea Fondatoare
                de pe pagina de start („/#founders”) */}
            <footer className="article-byline">
              {/* &amp; din HTML se scrie simplu „&” în JSX */}
              <span>Balașcă Theodora-Carla & Achim Sara</span>
              <Link className="founders-home-link" href="/#founders">
                founders ↗
              </Link>
            </footer>
          </article>
        </section>
      </section>
    </main>
  );
}
