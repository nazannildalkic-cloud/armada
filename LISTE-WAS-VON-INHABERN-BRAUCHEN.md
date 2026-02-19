# Genaue Liste: Was wir von den Inhabern brauchen

Damit die Website voll automatisch läuft – von Besucher-Zahlen über Kalender bis WhatsApp. Alles, was nur die Inhaber liefern können, in einer Liste.

---

## 1. Besucher-Zahlen (Google Analytics)

| Was | Details |
|-----|--------|
| **Brauchen wir** | Die **GA4-Mess-ID** (sieht aus wie `G-ABC123XY` oder `G-XXXXXXXXXX`). |
| **Wo wir es eintragen** | `index.html` (Zeile 18–20) und `besichtigung.html` (Zeile 250–252). Überall `G-XXXXXXXXXX` durch die echte ID ersetzen. |
| **Was der Inhaber liefert** | Entweder: „Wir haben schon Google Analytics“ → dann die **Mess-ID** schicken (steht in Google Analytics unter Admin → Datenstrom → Web → Mess-ID). Oder: „Brauchen wir nicht“ → dann lassen wir die Blöcke auskommentieren oder raus. |
| **Ohne Inhaber** | Geht nicht – entweder sie haben eine ID oder wir schalten es aus. |

---

## 2. Kalender / Besichtigung buchen (Calendly)

| Was | Details |
|-----|--------|
| **Brauchen wir** | Den **Calendly-Link** für Besichtigungstermine. Z. B. `https://calendly.com/armada-besichtigung` oder nur der Teil `armada-besichtigung`. |
| **Wo wir es eintragen** | `besichtigung.html` (Zeile 275–282). `YOUR_CALENDLY_LINK` durch den echten Link/Subdomain-Namen ersetzen (z. B. in der URL `src="https://calendly.com/armada-besichtigung?..."`). |
| **Was der Inhaber liefert** | Entweder: Calendly-Account anlegen (calendly.com), Event „Besichtigung“ erstellen, **Link kopieren** und uns schicken. Oder: „Wir wollen keinen Online-Kalender“ → dann bauen wir die Seite so um, dass nur Kontakt/Telefon/Formular steht. |
| **Ohne Inhaber** | Geht nicht – nur sie können den Calendly-Account haben und den Link vergeben. |

---

## 3. WhatsApp

### 3a) WhatsApp-Button („Schreib uns“)

| Was | Details |
|-----|--------|
| **Brauchen wir** | Die **Handynummer** für WhatsApp (mit Ländervorwahl, ohne +). Im Projekt steht schon: `491207117110` (+49 120 711 7110). |
| **Wo es steht** | `script.js` (WA_PHONE) und `index.html` (Link beim WhatsApp-Button: `wa.me/491207117110`). |
| **Was der Inhaber liefert** | Bestätigung: „Das ist unsere WhatsApp-Nummer“ oder eine andere Nummer nennen → wir ersetzen sie überall. |
| **Ohne Inhaber** | Nummer ist schon drin – nur bei Änderung nötig. |

### 3b) Formular → sofort WhatsApp-Nachricht an Inhaber (CallMeBot)

| Was | Details |
|-----|--------|
| **Brauchen wir** | Den **CallMeBot-API-Code** (eine Zeichenkette von callmebot.com). |
| **Wo wir es eintragen** | `script.js` (Zeile 525): `WA_API_KEY = "HIER_DER_WHATSAPP_CODE"` durch den echten Code ersetzen. |
| **Was der Inhaber liefert** | Einmal bei https://www.callmebot.com/blog/free-api-whatsapp-messages/ mit der **WhatsApp-Nummer des Inhabers** anmelden, die Bestätigung per WhatsApp ausführen, danach den **API-Key** kopieren und uns schicken. Oder: „Wir brauchen das nicht“ → dann kommt bei Formular-Absendung keine WhatsApp-Nachricht (Formular zeigt nur „Gesendet“). |
| **Ohne Inhaber** | Geht nicht – nur ihre Nummer kann bei CallMeBot registriert werden, nur sie bekommen den Code. |

---

## 4. Sprach-Assistentin Eila (VAPI)

| Was | Details |
|-----|--------|
| **Brauchen wir** | Entweder **Zugang** zum VAPI-Dashboard (dashboard.vapi.ai) ODER die Bestätigung, dass wir eine **Mini-Anleitung** (nur Copy-Paste) schicken. |
| **Wo wir es eintragen** | Im VAPI-Dashboard: Assistent auswählen → Stimme (weiblich) → Transcriber (multilingual) → System-Prompt/Instructions: Text aus `EILA-STIMME-UND-PROMPT-IM-DASHBOARD.txt` (zwischen den ---) einfügen. Die Website selbst ist schon fertig (Button, Eila-Texte in allen Sprachen). |
| **Was der Inhaber liefert** | Entweder: Login (E-Mail/Passwort) zu dashboard.vapi.ai geben → wir richten alles ein. Oder: „Macht ihr ohne Login“ → wir schicken eine 3–4-Schritte-Anleitung (nur Text kopieren und im Dashboard einfügen). |
| **Ohne Inhaber** | Wenn wir den Zugang haben oder sie die Anleitung ausführen, geht es. Sonst bleibt Eila evtl. auf Standard-Sprache/Verhalten. |

---

## 5. Galerie-Bilder

| Was | Details |
|-----|--------|
| **Brauchen wir** | Die **Bilddateien** für die Galerie (und ggf. Hero/Slideshow), z. B. in guter Auflösung. Im Code erwartet werden u. a.: `slide1.jpg.jpeg`, `slide2.jpg.jpeg`, `slide5.jpg.jpeg`, `slide6.jpg.jpeg`, `slide14.jpg.jpeg`, `slide15.jpg.jpeg`, `tischdeko.jpg.jpeg` sowie ggf. WhatsApp-Fotos (die genannten Dateinamen in `index.html`). |
| **Wo wir es eintragen** | Dateien in den Ordner `assets` legen. Wenn Namen abweichen, passen wir in `index.html` die Pfade an. |
| **Was der Inhaber liefert** | Fotos schicken (WeTransfer, E-Mail, Cloud-Link). Wir benennen sie passend und legen sie in `assets` ab. Oder sie legen die Dateien selbst in `assets` und nennen uns die exakten Dateinamen → wir passen nur die Pfade an. |
| **Ohne Inhaber** | Platzhalter-Pfade sind drin – ohne echte Bilder bleiben Kacheln/Plätze leer oder mit Fehler. |

---

## 6. E-Mail (info@armada-events.de)

| Was | Details |
|-----|--------|
| **Brauchen wir** | Nichts im Code – die Adresse **info@armada-events.de** steht schon überall (Impressum, Kontakt, Eila-Prompt). |
| **Was der Inhaber liefert** | Das E-Mail-Postfach beim E-Mail-/Domain-Anbieter einrichten (z. B. IONOS, Strato). Das ist unabhängig von der Website. |
| **Ohne Inhaber** | Keine Code-Änderung nötig – nur sie können das Postfach anlegen. |

---

## 7. Website-Link / Domain

| Was | Details |
|-----|--------|
| **Brauchen wir** | Nichts vom Inhaber – Website läuft über GitHub Pages (Link: `https://nazannildalkic-cloud.github.io/armada/`) oder Netlify. |
| **Was der Inhaber liefert** | Nur wenn sie eine **eigene Domain** (z. B. www.armada-events.de) nutzen wollen: Entweder Zugang zum Domain-Anbieter ODER wir nutzen nur den GitHub-/Netlify-Link (siehe WEBSITE-LINK-UND-DOMAIN.md). |
| **Ohne Inhaber** | Website ist auch so erreichbar – Domain optional. |

---

## Kurz-Checkliste (zum Abhaken)

| Nr | Thema | Was genau vom Inhaber | Wo wir es eintragen |
|----|--------|------------------------|----------------------|
| 1 | **Besucher (GA)** | GA4-Mess-ID (z. B. G-ABC123XY) oder „nicht nötig“ | index.html, besichtigung.html |
| 2 | **Kalender (Calendly)** | Calendly-Link für Besichtigung oder „nur Kontakt“ | besichtigung.html (YOUR_CALENDLY_LINK) |
| 3a | **WhatsApp-Button** | Bestätigung der Nummer (oder neue Nummer) | script.js, index.html (wa.me/…) |
| 3b | **WhatsApp bei Formular** | CallMeBot-API-Code oder „nicht nötig“ | script.js (WA_API_KEY) |
| 4 | **Eila (Sprache)** | VAPI-Dashboard-Zugang ODER Anleitung ausführen | VAPI-Dashboard (Prompt/Stimme/Transcriber) |
| 5 | **Galerie** | Fotos schicken oder Dateinamen nennen | Ordner assets + ggf. index.html Pfade |
| 6 | **E-Mail** | Postfach info@… beim Anbieter einrichten | – (nur bei ihnen) |
| 7 | **Domain** | Optional: nur wenn eigene Domain gewünscht | Siehe WEBSITE-LINK-UND-DOMAIN.md |

Damit hast du eine genaue Liste von WhatsApp über Kalender bis Besucher – und siehst für jeden Punkt, was die Inhaber liefern müssen und wo du es einträgst.
