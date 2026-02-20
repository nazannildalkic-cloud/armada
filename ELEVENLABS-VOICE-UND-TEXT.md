# ElevenLabs: Voice wiederherstellen / Voice + Text

**Wichtig:** Die Website schaltet nirgendwo auf „nur Text“. Ob Anruf (Voice) oder nur Chat geht, wird **ausschließlich im ElevenLabs-Dashboard** unter Widget → Interface eingestellt.

---

## Wenn keine Anrufe mehr gehen (nur noch Text)

**Schnellfix im Dashboard:**

1. **https://elevenlabs.io** → einloggen  
2. **Conversational AI** / **Agents** → Agent (Ayla) öffnen  
3. Tab **„Widget“**  
4. Bereich **„Interface“** / **„Schnittstelle“**:  
   - **„Chat mode (text only)“** / **„Chatmodus (nur Text)“** → **AUS**  
   - Stattdessen **„Voice only“** (Standard) oder **„Voice + text“** wählen  
5. **Save** → Seite neu laden und „Anruf starten“ testen  

Siehe auch **VOICE-WIEDERHERSTELLEN.txt** im gleichen Ordner.

---

**Voice in allen Sprachen:** Die Website übergibt die gewählte Sprache (DE, TR, AR, EN, FA) an das Widget. Im ElevenLabs-Dashboard den Agent so einstellen, dass er in allen diesen Sprachen spricht (z. B. mehrsprachige Stimme / Language Settings).

Wenn der Sprach-Assistent **nur Text** zeigt und **keine Stimme** spricht:

## Im ElevenLabs-Dashboard einstellen

1. **https://elevenlabs.io** → einloggen  
2. **Conversational AI** (oder **Agents**) → deinen Agent (Ayla) öffnen  
3. Tab **„Widget“** (oder **„Customization“** / **„Appearance“**)  
4. Bereich **„Schnittstelle“** / **„Interface“**:
   - **„Chatmodus (nur Text)“** / **„Chat mode (text only)“** → **AUS** schalten  
     → Dann ist **Voice** wieder aktiv.
   - Wenn es eine Option **„Text während des Anrufs“** / **„Text during call“** gibt → **AN** lassen, wenn du **beides** (Stimme + Text/Transkript) willst.

5. **Speichern** (Save)

## Ergebnis

- **Voice:** Assistent spricht (Mikrofon + Lautsprecher).
- **Text:** Du kannst weiterhin Text sehen/tippen, wenn die Option im Dashboard aktiv ist.

Die Einstellung liegt **nur im ElevenLabs-Dashboard**, nicht im Website-Code. Unser Embed enthält keine „nur Text“-Option.
