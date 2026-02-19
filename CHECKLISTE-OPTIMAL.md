# Checkliste: Website optimal machen

Zeile für Zeile durchgegangen – was noch fehlt oder angepasst werden sollte.

**Bereits umgesetzt:** Meta/OG/Favicon, GA4-Platzhalter, Review-Tippfehler, html lang, komplette Mehrsprachigkeit (Anfahrt, Scroll, Features, Versprechen, Videos, Konzepte, Formular-Platzhalter, Kalender-Wochentage + Monatsanzeige).

---

## 🔴 Muss erledigt werden (für vollen Betrieb)

### 1. WhatsApp-Benachrichtigung beim Anfrage-Formular
- **Wo:** `script.js`, Zeile mit `WA_API_KEY`
- **Aktuell:** `"HIER_DER_WHATSAPP_CODE"`
- **Was tun:** Bei [callmebot.com](https://www.callmebot.com/blog/free-api-whatsapp-messages/) anmelden, WhatsApp-Code holen und in `script.js` eintragen. Dann kommen neue Anfragen (Name, Telefon, Datum, etc.) per WhatsApp auf die Armada-Nummer.

### 2. Calendly für Besichtigung
- **Wo:** `besichtigung.html`, iframe mit `YOUR_CALENDLY_LINK`
- **Aktuell:** Platzhalter-URL
- **Was tun:** Calendly-Account anlegen, Event „Besichtigung“ (z.B. 30 Min) erstellen, Einbindungslink kopieren (z.B. `armada-events/besichtigung`) und in der URL ersetzen. Optional: Zapier einrichten, damit nach Buchung eine WhatsApp-Nachricht an den Inhaber geht.

### 3. Google Maps (falls Karte nicht lädt)
- **Wo:** `index.html`, Sektion „Anfahrt“, iframe mit `src="https://www.google.com/maps?q=..."`
- **Was tun:** Wenn die Karte nicht angezeigt wird: Auf Google Maps „Gründgensstrasse 26, 22309 Hamburg“ suchen → Teilen → Karte einbetten → iframe-Code kopieren und den bestehenden iframe ersetzen.

---

## 🟡 Sollte erledigt werden (Premium / Professionell)

### 4. Google Analytics (Besucherzahlen)
- **Wo:** Bereits eingebaut in `index.html` und `besichtigung.html` mit Platzhalter **G-XXXXXXXXXX**
- **Was tun:** GA4-Property anlegen (mit der ID des Kunden), echte Messungs-ID (z. B. G-ABC123XY) holen. In beiden Dateien **G-XXXXXXXXXX** durch diese ID ersetzen (je 2× pro Datei). Dann siehst du Besucher, Seitenaufrufe, Geräte, Herkunft im Google-Analytics-Dashboard.

### 5. SEO & Vorschau (Meta, Favicon)
- **Wo:** `index.html` und `besichtigung.html` – im `<head>` fehlen:
  - `meta name="description" content="..."`
  - Optional: Open-Graph-Tags (`og:title`, `og:description`, `og:image`) für schöne Vorschau bei WhatsApp/Facebook
  - Favicon: `link rel="icon" href="favicon.ico"` (oder .png)
- **Was tun:** Kurze Beschreibung (1–2 Sätze) für Armada eintragen, ein Vorschaubild (z.B. 1200x630 px) anlegen und verlinken, Favicon (z.B. Logo) erstellen und einbinden.

### 6. Kleine Korrekturen
- **Review-Text:** Erledigt – „für“ wurde in „ve“ geändert.
- **Video-Dateiname:** Es wird `assets/interwiev.mp4` geladen. Wenn die Datei „interview.mp4“ heißt, im HTML anpassen oder Datei umbenennen.
- **Galerie-Bild:** `assets/slite6.jpg.jpeg` – prüfen, ob Dateiname stimmt oder z. B. `slide6.jpg.jpeg` heißen sollte.

---

## 🟢 Optional (noch mehr Qualität)

### 7. Weitere Mehrsprachigkeit
- **Erledigt:** Anfahrt (Titel + Button), Feature-Boxen (4 Titel + 4 Texte), „Das Armada Versprechen“, Video-Beschriftungen (3), Konzept-Karten (alle Listen + Links), Formular-Platzhalter (Name, Telefon, Gäste, Event, Nachricht), Scroll-Indikator, Kalender-Wochentage (Mo–So) und Monatsanzeige – alles in DE, TR, AR, EN, FA.

### 8. Barrierefreiheit
- **Erledigt:** Beim Sprachwechsel wird `document.documentElement.lang` auf die gewählte Sprache gesetzt (de, tr, ar, en, fa).

### 9. Cookie-Hinweis (DSGVO)
- Wenn Google Analytics oder andere Tracking-Tools eingebaut werden: In vielen Fällen wird ein Cookie-Hinweis/Banner (mit Link zur Datenschutzerklärung und „Akzeptieren“) empfohlen. Erst relevant, sobald GA o.ä. aktiv ist.

### 10. Favicon & App-Icon
- Favicon für Browser-Tab (siehe Punkt 5).
- Optional: größeres Icon für „Zum Startbildschirm hinzufügen“ auf dem Handy (z.B. 192x192 px).

---

## Kurzüberblick

| Priorität | Thema                    | Wo / Aktion                                      |
|----------|---------------------------|--------------------------------------------------|
| 🔴 Muss  | WhatsApp Formular         | script.js: WA_API_KEY ersetzen                   |
| 🔴 Muss  | Calendly Besichtigung     | besichtigung.html: YOUR_CALENDLY_LINK ersetzen   |
| 🔴 Prüfen| Google Maps Embed         | Bei Bedarf iframe von Google übernehmen          |
| 🟡 Sollte| Google Analytics          | GA4-Snippet mit Kunden-ID einbauen               |
| 🟡 Sollte| Meta, OG, Favicon         | index.html (und besichtigung.html) head erweitern|
| 🟡 Sollte| Tippfehler Review/Video/Galerie | Einzelne Zeilen in index.html/Assets anpassen |
| 🟢 Optional | Mehr Sprache (Anfahrt, Features, Formular) | data-i18n + script.js |
| 🟢 Optional | html lang beim Sprachwechsel | script.js in switchLang erweitern          |
| 🟢 Optional | Cookie-Banner            | Wenn GA/Tracking aktiv                           |

Wenn du willst, können wir als Nächstes einen der Punkte konkret umsetzen (z.B. GA4 einbauen, Meta/Favicon, oder die fehlenden Übersetzungen für Anfahrt/Features).
