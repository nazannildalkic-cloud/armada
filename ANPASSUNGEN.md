# Was an der Wedding-/Event-Seite noch angepasst werden sollte

## 1. Platzhalter ersetzen (du musst echte Werte eintragen)

| Wo | Was | Aktion |
|----|-----|--------|
| **index.html** (Zeile 17–19) | Google Analytics: `G-XXXXXXXXXX` | Durch echte GA4-Messungs-ID ersetzen (z.B. `G-ABC123XY`) |
| **besichtigung.html** (Zeile 249–251) | Google Analytics: `G-XXXXXXXXXX` | Wie oben |
| **besichtigung.html** (Zeile 274–281) | Calendly: `YOUR_CALENDLY_LINK` | Durch deinen echten Calendly-Link ersetzen (z.B. `armada-besichtigung`) |
| **script.js** (Zeile 356) | WhatsApp/CallMeBot: `HIER_DER_WHATSAPP_CODE` | Falls du Formular-Anfragen per WhatsApp bekommen willst: Code von callmebot.com eintragen; sonst Formular nur lokal nutzen oder anderen Versand einbauen |

---

## 2. Favicon ✅ erledigt

- Es gibt jetzt ein **SVG-Favicon** (`favicon.svg`) mit „A“ für Armada (Gold auf dunkel). In `index.html` und `besichtigung.html` ist es eingebunden; `favicon.ico` bleibt als Fallback, falls du später eine .ico-Datei anlegst.

---

## 3. Formular „Termin“ – mehrsprachig ✅ erledigt

- Die **Placeholder** (Name, Telefon, Gäste, Nachricht, „Art des Events wählen“) werden beim Sprachwechsel schon übersetzt.
- Die **Optionen** der Event-Dropdown-Liste (Hochzeit, Abiball, Firmenevent, Sonstiges) sind jetzt in allen fünf Sprachen (DE/TR/AR/EN/FA) hinterlegt und wechseln mit der Sprache.
- **Erfolgs- und Fehlermeldungen** („Erfolgreich gesendet! …“, „Fehler beim Senden …“, „Sende Anfrage…“) sind ebenfalls mehrsprachig.

---

## 4. Footer / Rechtliches ✅ erledigt

- **Impressum**, **Datenschutz** und **Kündigungsvereinbarung** werden je nach gewählter Sprache (DE, EN, TR, AR, FA) im Modal angezeigt. Die Texte liegen in `script.js` im Objekt `legalModalTexts`.

---

## 5. Galerie-Bild Dateiname ✅ angepasst

- Der Pfad wurde von `assets/slite6.jpg.jpeg` auf `assets/slide6.jpg.jpeg` geändert. Bitte lege die Bilddatei unter diesem Namen im Ordner `assets` ab (falls sie anders heißt, den Pfad in `index.html` wieder anpassen).

---

## 6. Erfolgs-/Fehlermeldung Formular ✅ erledigt

- Erfolgs-, Fehler- und „Sende Anfrage…“-Texte sind in `script.js` in allen fünf Sprachen hinterlegt und werden je nach aktiver Sprache angezeigt.

---

## 7. Optional / später

- **Vapi-Button** („Frag Ayla“): Ist derzeit per CSS ausgeblendet (`display: none`). Wenn du ihn wieder nutzen willst, diese Regel in `style.css` entfernen oder anpassen.
- **Terminplaner** (`termin-planer.html`): Eigene Seite; wenn du sie nutzt, dort ggf. Platzhalter und Texte prüfen.

---

## Kurz-Checkliste

- [ ] GA4-ID in index.html und besichtigung.html eintragen  
- [ ] Calendly-Link in besichtigung.html eintragen  
- [ ] WA/CallMeBot-Code in script.js eintragen (oder bewusst weglassen)  
- [x] Favicon (SVG angelegt und eingebunden)
- [x] Event-Dropdown-Optionen mehrsprachig (erledigt)
- [x] Galerie-Pfad auf `slide6.jpg.jpeg` geändert (Datei ggf. anlegen)
- [x] Formular-Erfolgs-/Fehlermeldungen mehrsprachig (erledigt)
- [x] Impressum/Datenschutz/Kündigung mehrsprachig (DE, EN, TR, AR, FA)
