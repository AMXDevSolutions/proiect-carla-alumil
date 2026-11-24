// =============================================================================
//  app/evenimente/page.js – pagina EVENIMENTE (adresa „/evenimente”)
// =============================================================================
//  Echivalentul fișierului `evenimente.html` din mockup.
// =============================================================================

import SubpageHeader from "../components/SubpageHeader";

export const metadata = {
  title: "Evenimente",
};

// Detaliile evenimentului, separate de HTML ca să fie ușor de actualizat.
// Când stabiliți data exactă, schimbi doar aici.
const eveniment = {
  luna: "DECEMBRIE",
  data: "Decembrie",
  locatia: "Colegiul Național „Sfântul Sava”",
};

export default function Evenimente() {
  return (
    <main className="site-frame">
      <section className="paper-panel subpage-panel">
        <SubpageHeader />

        <div className="page-heading">
          <h1>EVENIMENTE</h1>
          <p>
            Ideile prind viață atunci când ne întâlnim. Descoperă evenimentele,
            conversațiile și întâlnirile organizate în cadrul Vox Feminae.
          </p>
        </div>

        <section className="events-feature">
          {/* „Afișul” din stânga, pe fundal de hârtie (hartie-logo.png din CSS) */}
          <div className="poster">
            <span className="poster-month-label">Luna</span>
            {/* {eveniment.luna} afișează valoarea din obiectul de mai sus */}
            <div className="month">{eveniment.luna}</div>
          </div>

          {/* Descrierea evenimentului, în dreapta */}
          <div className="event-copy">
            <h2>
              <span>Primul eveniment</span>
              <span>Vox Feminae</span>
            </h2>

            <div className="event-meta">
              <div>
                <b>Data</b>
                <span>{eveniment.data}</span>
              </div>
              <div>
                <b>Locația</b>
                <span>{eveniment.locatia}</span>
              </div>
            </div>

            <p>
              Vox Feminae își începe parcursul printr-o întâlnire dedicată
              dialogului, culturii și vizibilității vocilor femeilor. Ne dorim
              să creăm un spațiu în care ideile, perspectivele și experiențele
              să fie împărtășite și discutate.
            </p>
          </div>
        </section>

        <section className="coming-soon">
          <span className="eyebrow">Alte evenimente</span>
          <h2>Ce urmează?</h2>
          <p>
            Pregătim noi întâlniri și conversații. Revino curând pentru
            detalii.
          </p>
        </section>
      </section>
    </main>
  );
}
