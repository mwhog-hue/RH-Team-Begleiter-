# Änderungen in Version 2.29.0 (09.10.2026)

- **Filter „Wo?“** im Übungsrad: Egal · 🌧 Drinnen (Schlechtwetter) · Draußen. „Drinnen“ zeigt nur Übungen, die drinnen gehen (356 von 420). Übungen mit Hund oder als Helfer haben einen grünen Kasten „Drinnen üben“ mit Hinweisen, z. B. zu rutschfestem Boden, Raumgröße oder Lautstärke.
- **Ausbilder-Regel neu:** Aus „Nur mit Ausbilder“ wird bei 70 Übungen „Erst mit Ausbilder“. Neue Übungen werden zuerst im Training geübt. Aus dem Training bekannte oder mit dem Ausbilder abgesprochene Übungen dürfen privat wiederholt werden, ggf. mit einem erfahrenen Helfer. Dafür gibt es einen eigenen Schalter. „Nur mit Ausbilder“ gilt noch für 11 Übungen (Trümmergelände, freigegebene Gebäude, Mantrailing). Diese erscheinen nur mit dem Schalter „Ausbilderin oder Ausbilder ist heute dabei“.
- Das Übungsrad steht in der Du-Form (Bedienung und alle 420 Übungen).
- **Neu: Schalter „Ein Helfer bzw. eine Versteckperson ist dabei“.** Ohne Haken erscheinen nur Übungen mit Hund, die allein mit dem eigenen Hund möglich sind (55 von 126). Die übrigen 71 tragen das Kennzeichen „mit Helfer/Versteckperson“.
- **Neu: Anzeigeart aus dem Profil.** Übungen für eine andere Anzeigeart werden ausgeblendet (z. B. Bringsel-Gewöhnung beim Verbeller). Bringsel-Material entfällt, und ein Hinweis zeigt, dass Angaben zu anderen Anzeigearten nicht gelten.
- Beim Veröffentlichen den Cache-Namen in `sw.js` hochzählen.

---

# Team-Begleiter Rettungshund – Version 2.28.0

Stand: 09.10.2026 · Vorgängerversion: 2.27.2

## Was ist neu?

**Neuer Bereich „Übungsrad“** mit 420 Übungen zu 32 Themen (Kynologie, Rettungshundearbeit, Erste Hilfe).

- **Glücksrad:** Das Rad zieht Übungen passend zu „Wer übt?“ (allein, mit Hund, als Helfer, in der Gruppe), verfügbarer Zeit und Bereich.
- **Meine Themen:** Unter „Mein Stand“ legt jedes Team selbst fest, aus welchen Themen das Rad zieht.
- **Ausbilder erforderlich:** Solche Übungen erscheinen nur, wenn der Schalter „Ausbilderin oder Ausbilder ist heute dabei“ gesetzt ist.
- **Tagesform-Check:** Vor jeder Übung mit Hund sind drei Punkte zu bestätigen. Alternativ lassen sich Übungen mit Hund für den Tag ausblenden.
- **Lösungen** werden erst nach einer ausdrücklichen Bestätigung angezeigt. Die Ausbildungsunterlagen selbst sind in der App nicht enthalten.
- **Trainingstagebuch:** Wird eine Übung als erledigt markiert, fragt die App direkt in der Übungskarte, ob ein Tagebucheintrag angelegt werden soll. Der Eintrag enthält Datum, Übungskennung, Titel und die eigene Notiz. Im Tagebuch gibt es dafür den neuen Bereich „Übungsrad“.
- **Hinweise am bisherigen Bestand:** Wo eine bisherige Übung eine neue Fassung im Übungsrad hat, steht der Hinweis „Neue Fassung im Übungsrad: …“. Ein Antippen öffnet die neue Übung direkt. Die Hinweise erscheinen in der Übungsbibliothek (auch in „Lernen & Alltag“, „Bonus“ und „Gerätearbeit“), in den Hundeführer-Aufgaben unter „Anzeigeaufbau“, in der „Helferschulung“, unter „Trümmer & mentale Stärke“ und bei „Erste Hilfe am Hund“. Alle bisherigen Übungen bleiben erhalten.

## Wo finde ich es?

- Hauptnavigation: Reiter **„Übungsrad“**, direkt neben „Start“.
- Startseite: Kachel **„Neu · Übungsrad“** unter „Alle Ausbildungsbereiche“.

## Datenhaltung und Sicherung

- Der Stand des Übungsrads (erledigte Übungen, Notizen, gewählte Themen) wird **je Team** gespeichert. Gespeichert wird im bisherigen Speicher der App (`tbrh:state:v1` mit Spiegelung in IndexedDB), und zwar im neuen Feld `uebungsrad` des jeweiligen Teams.
- Die **Vollsicherung** enthält diesen Stand automatisch. Format und Schema-Version der Sicherung bleiben unverändert (`rhs-teambegleiter-backup`, Version 1).
- **Ältere Sicherungen** ohne dieses Feld lassen sich weiterhin einlesen. Das Übungsrad beginnt dann mit leerem Stand.
- Das **RHS-Exchange-Teampaket** bleibt unverändert und enthält den Stand des Übungsrads bewusst nicht.
- Vorhandene Daten, Speicherschlüssel, Exporte und Importe wurden weder entfernt noch umbenannt.

## Zusätzlich behobener Fehler

In Version 2.27.2 brach der Bereich **„Profil“** beim Öffnen mit einem Skriptfehler ab. Ursache: Zwei aufklappbare Abschnitte („Rassetypische Hinweise“, „Lebensphase & Lernfähigkeit“) hatten ihre interne Kennung verloren. Deshalb wurden Lebensphase, Entwicklungsthemen, Schwachstellen-Check und Sparten-Fortschritt im Profil nicht aufgebaut. Beide Abschnitte haben ihre Kennung wieder erhalten; sonst wurde nichts geändert. Hinweis: Ist keine Rassegruppe beziehungsweise kein Alter eingetragen, blendet die App diese beiden Abschnitte wie ursprünglich vorgesehen aus.

## Was ist beim Veröffentlichen zu tun?

1. `index.html` aus diesem Ordner in das GitHub-Pages-Verzeichnis des Team-Begleiters übernehmen.
2. **Den Cache-Namen in `sw.js` hochzählen** (zum Beispiel Versionsangabe auf 2.28.0 setzen). Sonst zeigen bereits installierte Geräte weiterhin die alte Fassung aus dem Zwischenspeicher. Die Datei `sw.js` lag für diese Änderung nicht vor und wurde deshalb nicht angepasst.
3. Nach dem Hochladen die App auf einem Gerät einmal neu laden und prüfen, ob im Titel „v2.28.0“ erscheint.
4. Empfehlung: Vor der Aktualisierung auf den Geräten der Teams jeweils eine Vollsicherung anlegen lassen.

## Hinweise

- Die Datei ist durch den eingebetteten Übungsbestand von etwa 1,4 MB auf etwa 2,6 MB gewachsen. Sie funktioniert weiterhin vollständig offline.
- Die Texte des Übungsrads sprechen die Nutzenden mit „Sie“ an, der übrige Team-Begleiter mit „du“. Die Texte des Übungsbestands wurden nicht verändert.
