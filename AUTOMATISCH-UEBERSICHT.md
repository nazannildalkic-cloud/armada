# Armada – Was läuft voll automatisch

## ✅ Bereits automatisch

### Sprache (ohne manuelles Umschalten)
- **Erster Besuch:** Browser-Sprache (navigator) → ganze Seite + Widget in DE / TR / AR / EN / FA.
- **Sprach-Buttons (DE/TR/AR/EN/FA):** Ein Klick → alle Texte (Nav, Inhalte, Footer, Voice-Box, Rechtstexte, Kalender) wechseln sofort.
- **Widget-Sprache:** Wird mit der gewählten Sprache gesetzt (beim Erzeugen und beim Öffnen).

### Sprach-Assistent (Ayla)
- **Handy:** Ein Tipp auf „Anruf starten“ → Widget öffnet direkt in der aktuellen Sprache (kein Consent-Popup).
- **PC:** Erster Klick → Consent-Modal in der gewählten Sprache → „Einverstanden“ → Widget öffnet. **Ab dem zweiten Mal in derselben Session:** Klick auf „Anruf starten“ → Widget öffnet direkt (kein erneutes Consent).

### Anzeige
- **Voice-Box:** „Hilfe?“ / „Anruf starten“ immer in der aktuellen Sprache.
- **Footer:** Impressum, Datenschutz, Kündigung, Terminplaner, Besichtigung in der aktuellen Sprache.
- **Rechtstexte (Modal):** Beim Öffnen in der aktuell gewählten Sprache (DE/TR/AR/EN/FA).
- **RTL:** Bei Arabisch/Persisch wird die Seite auf RTL umgestellt.
- **Kalender:** Monatsnamen in der aktuellen Sprache.

### Technisch
- **Widget-Erstellung:** Nach dem Laden des Embed-Scripts, Sprache = `window.currentLang` (Seiten-Sprache) oder sonst Browser-Sprache.
- **Consent:** Einmal „Einverstanden“ pro Session → danach wird `sessionStorage.ayla_consent` gesetzt und das Modal nicht erneut gezeigt.

---

## 🔧 Einmalig manuell (von euch)

- **Google Analytics:** In `index.html` die Platzhalter-ID `G-XXXXXXXXXX` durch eure echte Messungs-ID ersetzen.
- **GitHub:** Nach Änderungen `git push` → GitHub Pages baut automatisch neu (nach 1–2 Min).
- **ElevenLabs:** Agent-ID und ggf. Prompt/Sprachen im ElevenLabs-Dashboard einrichten (nicht im Code).

---

## Kurz

- **Sprache:** automatisch aus Browser, Umschalten über DE/TR/AR/EN/FA.
- **Widget:** automatisch in derselben Sprache wie die Seite, auf dem Handy direkt öffnen, auf dem PC nach einmaligem Consent in der Session ohne erneutes Popup.
