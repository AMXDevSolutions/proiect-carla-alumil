// =============================================================================
//  FolderMenu.js – folderul „Find out more” care deschide meniul
// =============================================================================
//  Aceasta este o „componentă” React: o bucată de interfață reutilizabilă,
//  scrisă ca o funcție care returnează HTML (sintaxa se numește JSX).
//
//  De ce e într-un fișier separat? În mockup, meniul era deschis de fișierul
//  `js/script.js` (care lipsea din arhivă). În Next.js, orice element care
//  reacționează la click trebuie să ruleze în BROWSER, nu pe server.
//  Linia "use client" de mai jos îi spune asta lui Next.js.
//  Restul paginilor rămân „componente de server” (mai rapide), iar doar
//  această mică parte devine interactivă.
// =============================================================================

"use client";

// `useState`  – reține o valoare care se poate schimba (meniu deschis/închis).
// `useEffect` – rulează cod după ce componenta apare pe ecran.
// `useRef`    – ține minte un element HTML, ca să verificăm unde s-a dat click.
import { useEffect, useRef, useState } from "react";

// `Link` este varianta Next.js a etichetei <a> pentru legături interne.
// Schimbă pagina instant, fără reîncărcarea completă a site-ului.
import Link from "next/link";

export default function FolderMenu() {
  // `open` = true când meniul e deschis. Pornim cu meniul închis (false).
  // `setOpen` este funcția cu care schimbăm valoarea.
  const [open, setOpen] = useState(false);

  // Referință către zona folderului + meniului.
  const wrapperRef = useRef(null);

  // Închidem meniul când utilizatorul dă click în afara lui sau apasă Escape.
  useEffect(() => {
    // Dacă meniul e închis, nu avem nimic de urmărit.
    if (!open) return;

    function handleClickOutside(event) {
      // `contains` verifică dacă elementul apăsat e în interiorul folderului.
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    function handleEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    // Funcția returnată „face curat” când meniul se închide,
    // ca să nu rămână ascultători de evenimente inutili.
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]); // [open] = rulează din nou de fiecare dată când `open` se schimbă

  return (
    // `display: contents` face ca acest <div> să nu afecteze deloc
    // așezarea din pagină – butonul și meniul se poziționează exact ca în
    // mockup, ca și cum <div>-ul nu ar exista.
    <div ref={wrapperRef} style={{ display: "contents" }}>
      {/* Butonul-folder. La click, inversăm starea: deschis ↔ închis. */}
      <button
        type="button"
        className="folder-trigger"
        aria-expanded={open} // spune cititoarelor de ecran dacă meniul e deschis
        aria-controls="folder-menu"
        onClick={() => setOpen(!open)}
      >
        {/* Imaginile din `public/` se accesează cu „/” + numele fișierului. */}
        <img src="/folder.png" alt="Folder decorativ cu buline și dantelă" />
        <span>Find out more</span>
      </button>

      {/* Meniul. Clasa `open` (din CSS) îl face vizibil; fără ea e ascuns. */}
      <nav
        id="folder-menu"
        className={open ? "folder-menu open" : "folder-menu"}
        aria-label="Navigare principală"
      >
        <Link href="/revista">Revista</Link>
        <Link href="/evenimente">Evenimente</Link>
      </nav>
    </div>
  );
}
