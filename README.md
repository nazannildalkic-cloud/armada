# Armada

Website für den **Armada Eventsaal** Hamburg mit Voice-Assistentin **Ayla** (VAPI), mehrsprachig (DE, TR, AR, EN, FA), Terminplaner und Galerie.

## Lokal starten

- **Python:** Im Ordner `Server-starten.bat` doppelklicken oder:
  ```bash
  py -m http.server 8000
  ```
- Dann im Browser: **http://localhost:8000**

Hinweis: Ayla (Mikrofon) funktioniert nur über einen Server (localhost oder GitHub Pages), nicht bei Doppelklick auf `index.html`.

## Ayla (Voice)

- Im VAPI Dashboard: weibliche Stimme wählen (z. B. Rachel, Bella) und System-Prompt aus `AYLA-PROMPT-FUER-DASHBOARD.txt` übernehmen.
- Kontakt/Keys: siehe `script.js` (PUBLIC_KEY, ASSISTANT_ID).

## Struktur

- `index.html` – Startseite
- `script.js` – Ayla (VAPI), Sprachen, Formular
- `style.css` – Layout
- `termin-planer.html` – Terminplaner
- `AYLA-PROMPT-FUER-DASHBOARD.txt` – Prompt für VAPI Dashboard
- `Server-starten.bat` – Lokaler Server (Python)
