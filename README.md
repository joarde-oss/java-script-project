# Counter Dinamico

Applicazione web in JavaScript puro che offre un contatore interattivo con interfaccia moderna, supporto `localStorage` e metadati pronti per la condivisione social. L’esperienza funziona senza caricamenti aggiuntivi e mantiene l’ultimo valore salvato tra i refresh.

![Anteprima social](assets/img/og-image.png)

## Demo

[👉 Aggiorna questo link con l’URL del deploy (Netlify, Firebase, Vercel, ecc.)](#)

## Caratteristiche principali

- **Persistenza**: il valore è memorizzato su `localStorage` tramite la chiave `counter-value`.
- **Accessibilità**: il markup è presente anche senza JavaScript e include `aria-live` sul valore.
- **Condivisione**: meta tag Open Graph e Twitter Card già configurati con immagine `img/og-image.png`.
- **Stile moderno**: layout responsive con gradienti, blur e controlli tondeggianti.
- **Reset rapido**: pulsante “Azzera” per tornare immediatamente allo stato iniziale.

## Struttura del progetto

```text
.
├── index.html            # Markup principale + meta tag social
├── assets/
│   ├── css/
│   │   └── style.css     # Stili del counter
│   ├── js/
│   │   └── script.js     # Logica dell’app, gestione eventi e storage
│   └── img/
│       └── og-image.png  # Immagine per anteprima social (sostituibile)
└── README.md
```

## Come provarlo in locale

1. Clona il repository dal tuo GitHub.
2. Apri `index.html` in un browser moderno.
3. Interagisci con i pulsanti `+`, `−` e `Azzera`. Il valore rimarrà salvato tra le sessioni.

### Deploy consigliato (es. Netlify)

```bash
netlify deploy --dir=. --prod
```

Una volta ottenuto l’URL pubblico, sostituisci il link nella sezione [Demo](#demo).

## Suggerimenti per il README su GitHub

- Inserisci uno screenshot reale dell’interfaccia (puoi salvarlo in `assets/img/screenshot.png` e referenziarlo qui).

> **GitHub Pages**: seleziona `Deploy from branch`, branch `main` e cartella `/ (root)` in *Settings → Pages*.
- Ricorda di aggiornare il link di deploy e, se necessario, aggiungere eventuali note su dipendenze o passi di build.

## Tecnologie

- HTML5 semantico
- CSS3 (flexbox, gradienti, animazioni)
- JavaScript vanilla (DOM API + `localStorage`)
