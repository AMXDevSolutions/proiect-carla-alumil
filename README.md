# Vox Feminae – site de prezentare (Next.js)

Site-ul proiectului educațional **Vox Feminae**, construit cu [Next.js](https://nextjs.org) pe baza mockup-ului `vox-feminae-website-v25`.

## Structura proiectului

```
proiect-carla-alumil/
├── app/                        ← tot codul site-ului
│   ├── layout.js               ← „rama” comună: <html>, <body>, titlu, descriere
│   ├── globals.css             ← stilurile (copiate din mockup: css/style.css)
│   ├── page.js                 ← pagina de start           →  /
│   ├── revista/page.js         ← pagina Revista            →  /revista
│   ├── evenimente/page.js      ← pagina Evenimente         →  /evenimente
│   └── components/
│       ├── FolderMenu.js       ← folderul „Find out more” + meniul lui
│       └── SubpageHeader.js    ← antetul subpaginilor (logo + „Înapoi acasă”)
├── public/                     ← imaginile (accesibile la „/nume-imagine.png”)
├── package.json                ← lista pachetelor și comenzile proiectului
└── next.config.mjs             ← setările Next.js
```

**Regula de aur în Next.js:** fiecare folder din `app/` care conține un `page.js` devine o pagină. De exemplu, ca să adaugi pagina `/despre`, creezi fișierul `app/despre/page.js`.

Fiecare fișier are comentarii care explică pas cu pas ce face codul.

## Cum rulezi site-ul pe calculatorul tău

1. Instalează **Node.js** (versiunea LTS) de pe https://nodejs.org
2. Descarcă proiectul (butonul verde **Code → Download ZIP** de pe GitHub, sau `git clone`).
3. Deschide un terminal în folderul proiectului și instalează pachetele (o singură dată):

   ```bash
   npm install
   ```

4. Pornește site-ul în modul de dezvoltare:

   ```bash
   npm run dev
   ```

5. Deschide în browser http://localhost:3000. Orice modificare salvată în cod apare imediat în pagină.

Ca să verifici că site-ul se construiește fără erori înainte de publicare: `npm run build`.

## Cum publici site-ul online, gratuit (Vercel)

[Vercel](https://vercel.com) este compania care a creat Next.js și oferă găzduire gratuită, cu o adresă gratuită de forma `numele-tau.vercel.app`.

1. Intră pe https://vercel.com/signup și alege **Continue with GitHub** (planul **Hobby**, gratuit).
2. Apasă **Add New… → Project**.
3. La **Import Git Repository**, alege `proiect-carla-alumil` și apasă **Import**.
   (Dacă nu apare, apasă **Adjust GitHub App Permissions** și dă acces la acest repository.)
4. Vercel detectează singur că e un proiect Next.js. Nu schimba nimic și apasă **Deploy**.
5. După ~1 minut primești adresa site-ului, de exemplu `https://proiect-carla-alumil.vercel.app`.

### Schimbarea adresei (opțional)

În Vercel: **Project → Settings → Domains → Edit** și scrie de exemplu `vox-feminae.vercel.app` (dacă nu e deja luată).

### Actualizări automate

De fiecare dată când se urcă o modificare pe ramura `main` din GitHub, Vercel republică automat site-ul în ~1 minut. Nu trebuie să mai faci nimic manual.
