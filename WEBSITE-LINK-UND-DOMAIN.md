# Website-Link – ohne Domain-Anbieter

Du willst **keine Einstellungen beim Domain-Anbieter** machen? Hier sind Lösungen, die **nur mit GitHub** (und optional Netlify) funktionieren.

---

## Lösung 1: Nur GitHub Pages (empfohlen – alles bei GitHub)

**Kein Domain-Anbieter nötig.** Du bekommst einen festen Link, den du überall als „unsere Website“ angeben kannst.

### Schritte

1. **GitHub öffnen:** https://github.com/nazannildalkic-cloud/armada  
2. **Settings** (Einstellungen) → links **Pages**  
3. Unter **Build and deployment**:  
   - **Source:** **Deploy from a branch**  
   - **Branch:** **main** , Ordner **/ (root)**  
   - **Save**

Nach 1–2 Minuten ist die Seite online. Dein **Website-Link**:

**https://nazannildalkic-cloud.github.io/armada/**

Diesen Link überall nutzen (Visitenkarte, E-Mail-Signatur, Google, Social Media). Es ist eine normale, sichere Webadresse (https). **Nichts** beim Domain-Anbieter einstellen.

---

## Lösung 2: Netlify (kostenlose Adresse, z. B. armada.netlify.app)

Falls du eine **eigene Adresse** wie **armada.netlify.app** oder **armada-events.netlify.app** willst – **ohne** beim Domain-Anbieter etwas zu ändern:

1. **Netlify:** https://app.netlify.com (kostenlos anmelden)  
2. **Add new site** → **Import an existing project** → **GitHub** verbinden  
3. Repo **armada** auswählen, Branch **main**  
4. **Build command** leer lassen, **Publish directory** leer oder **/** (Root)  
5. **Deploy** – Netlify baut die Seite und gibt dir eine URL wie:  
   **https://armada.netlify.app** oder **https://irgendein-name.netlify.app**  
   Den Namen kannst du unter **Site settings** → **Change site name** anpassen (z. B. **armada-events**).

Auch hier: **Kein Zugriff auf den Domain-Anbieter nötig.** Alles läuft über Netlify + GitHub.

---

## E-Mail info@armada-events.de

Die **E-Mail-Adresse** richtest du weiterhin beim **E-Mail-Anbieter** ein (z. B. wo die Domain armada-events.de verwaltet wird – nur für E-Mail, nicht für die Website). Der **Link zur Website** ist einer der obigen (GitHub oder Netlify).

---

## Kurz

| Ziel | Lösung | Domain-Anbieter nötig? |
|------|--------|------------------------|
| **Website-Link, schnell & einfach** | GitHub Pages → Link: **https://nazannildalkic-cloud.github.io/armada/** | **Nein** |
| **Eigene Subdomain (z. B. armada.netlify.app)** | Netlify mit GitHub verbinden | **Nein** |
| **E-Mail info@…** | Beim E-Mail-/Domain-Anbieter Postfach einrichten | Nur für E-Mail, nicht für die Website |
