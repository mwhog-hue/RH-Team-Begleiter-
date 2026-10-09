# Änderungen in Version 2.54 (09.10.2026)

- **Qualifikationen neu erfassen** in drei Schritten, auch am Handy: Bereich wählen, Qualifikation suchen und wählen, Angaben eintragen („gültig bis“ wird vorbelegt). Zu finden unter Mein Stand → „Nachweis eintragen“, im Personen-Dialog und unter Verwaltung → Qualifikationen.
- **Listen** nach Bereich gruppiert, alphabetisch oder nach Fälligkeit, mit Suche und Filtern. Abgelaufene Nachweise sind rot, bald fällige gelb markiert.
- **DRK-Lerncampus:** „UVV-Unterweisung online“ und „freier Kurs“ mit Kurstitel als Freitext.
- Ein Fehler ist behoben: Verschiedene Lerncampus-Module vom selben Tag wurden bei einer Katalogumstellung als Dubletten gelöscht.
- Die beiliegende `sw.js` ist bereits angepasst (Cache `Barry-2.54`).

---

# Änderungen in Version 2.53 (09.10.2026)

- Übung „Verbellen am stärksten Geruchsaustritt“ (früher „Bellen mit Scharren“, TB-TS-01) an die Staffelfestlegung angepasst; Übungsrad: R13-H3 dauert 30 Min., R21-G2 nur mit Ausbilder, Hinweis zum Heben bei Schmerzen (R31-G2).
- Beim Veröffentlichen den Cache-Namen in `sw.js` hochzählen (z. B. `…-v2-53`).

---

# Änderungen in Version 2.52 (09.10.2026)

- **Filter „Wo?“** im Übungsrad: Egal · 🌧 Drinnen (Schlechtwetter) · Draußen. „Drinnen“ zeigt nur Übungen, die drinnen gehen (356 von 420). Übungen mit Hund oder als Helfer haben einen grünen Kasten „Drinnen üben“ mit Hinweisen, z. B. zu rutschfestem Boden, Raumgröße oder Lautstärke.
- **Ausbilder-Regel neu:** Aus „Nur mit Ausbilder“ wird bei 70 Übungen „Erst mit Ausbilder“. Neue Übungen werden zuerst im Training geübt. Aus dem Training bekannte oder mit dem Ausbilder abgesprochene Übungen dürfen privat wiederholt werden, ggf. mit einem erfahrenen Helfer. Dafür gibt es einen eigenen Schalter. „Nur mit Ausbilder“ gilt noch für 11 Übungen (Trümmergelände, freigegebene Gebäude, Mantrailing). Diese erscheinen nur mit dem Schalter „Ausbilderin oder Ausbilder ist heute dabei“.
- Das Übungsrad steht weiterhin in der Sie-Form.
- **Neu: Schalter „Ein Helfer bzw. eine Versteckperson ist dabei“.** Ohne Haken erscheinen nur Übungen mit Hund, die allein mit dem eigenen Hund möglich sind (55 von 126). Die übrigen 71 tragen das Kennzeichen „mit Helfer/Versteckperson“.
- **Neu: Anzeigeart aus dem Profil.** Übungen für eine andere Anzeigeart werden ausgeblendet (z. B. Bringsel-Gewöhnung beim Verbeller). Bringsel-Material entfällt, und ein Hinweis zeigt, dass Angaben zu anderen Anzeigearten nicht gelten.
- Beim Veröffentlichen den Cache-Namen in `sw.js` hochzählen.

---

# BARRY – Der Rettungshundekompass · Version 2.51 (Stand 09.10.2026)

## Was ist neu?

**Übungsrad** – ein neuer, eigener Bereich mit 420 Übungen zu 32 Themen (Kynologie, Rettungshundearbeit, Erste Hilfe am Hund), die ohne Ausbildungsunterlagen lösbar sind. Die Ausbildungsunterlagen selbst sind nicht enthalten.

- **Glücksrad:** Auswahl „Wer übt?“ (allein, mit Hund, als Helfer, in der Gruppe), Zeitrahmen und Bereich; danach drehen.
- Übungen mit dem Vermerk „Nur mit Ausbilder“ werden nur gezogen, wenn der Schalter „Ausbilderin oder Ausbilder ist heute dabei“ gesetzt ist.
- Vor jeder Übung mit Hund erscheint ein kurzer **Tagesform-Check**.
- **Lösungen** werden erst angezeigt, nachdem bestätigt wurde, dass die Aufgabe selbst bearbeitet worden ist. Hinweise lassen sich schrittweise aufdecken.
- **Themen** (Nachschlagen und Suche) und **Mein Stand** (erledigte Übungen, „Meine Themen“ für das Rad).
- **Trainingstagebuch:** Wird eine Übung als erledigt markiert und führt die angemeldete Person einen eigenen Hund, bietet BARRY im Übungsrad an, einen Tagebucheintrag (Datum, Übungs-ID und Titel, Notiz) anzulegen. Der Eintrag erscheint unter *Ausbildung & Team → Trainingstagebücher*. Personen ohne eigenen Hund erhalten dieses Angebot nicht, weil das Trainingstagebuch Teams aus Person und Hund führt; der Vermerk bleibt dann im Übungsrad erhalten.
- **Hinweise an bisherigen Übungen:** Wo es zu einer vorhandenen Übung eine neue Fassung gibt, steht dort „Neue Fassung im Übungsrad: <ID> <Titel>“. Ein Tipp auf den Verweis öffnet die Übung im Übungsrad. Betroffen sind die Übungsbibliothek (Alltag & Zuhause sowie Vorschläge unter Ausbildung & Team), die Fitnessübungen, die Erste Hilfe am Hund, die Aufgaben für den Hundeführer sowie die mentalen Übungen der Trümmersuche. Die bisherigen Übungen bleiben vollständig erhalten.
- Unter *Hilfe & Anleitung* finden Sie den Artikel „Neu in BARRY 2.51: Übungsrad“.

## Wo finde ich es?

Im Menü direkt unter **Start**: „🎡 Übungsrad“. Der Bereich steht allen Rollen offen und kann wie andere Bereiche über „⚙️ Bereiche auswählen“ ausgeblendet werden.

## Wie werden die Daten gespeichert?

- Der Stand des Übungsrads (erledigte Übungen, Notizen, „Meine Themen“) wird **je angemeldeter Person** im bisherigen BARRY-Bestand dieses Geräts abgelegt (neue Liste `uebungsrad`). Mehrere Personen auf einem Gerät haben damit jeweils einen eigenen Stand; andere Personen sehen ihn nicht. Eine Übersicht der Ausbilderin über den Stand der Mitglieder ist bewusst nicht vorgesehen.
- Der Stand ist in jeder **Datensicherung** (mit und ohne Passwort) enthalten und wird beim Import wiederhergestellt.
- Sicherungen älterer Versionen ohne diese Angaben lassen sich weiterhin einlesen; das Übungsrad beginnt dann mit leerem Stand. Die Schema-Version bleibt bei 1, damit auch BARRY 2.50 neue Sicherungen weiterhin lesen kann.
- Ein Stand-Update der Leitung überschreibt den Übungsrad-Stand auf dem Gerät eines Mitglieds nicht.
- Wird eine Person endgültig gelöscht, wird auch ihr Übungsrad-Stand entfernt.
- Bestehende Daten, Speicherschlüssel, Exporte und Importe sind unverändert.

## Was ist beim Veröffentlichen zu tun?

1. Die Datei `index.html` aus diesem Ordner anstelle der bisherigen BARRY-Datei auf GitHub Pages hochladen.
2. **Bitte unbedingt den Cache-Namen in `sw.js` hochzählen** (z. B. Versionsangabe auf 2.51 ändern). Andernfalls erhalten die Geräte die neue Fassung nicht oder erst verzögert. Die Datei `sw.js` lag uns nicht vor und wurde daher nicht geändert.
3. Die Datei ist größer geworden (rund 4,1 MB statt 2,9 MB), weil Übungsbestand und Übungsmodul für den Offline-Betrieb eingebettet sind. Beim ersten Öffnen nach dem Update kann das Laden daher etwas länger dauern.

## Hinweis zur Darstellung

BARRY hat keinen eigenen Dunkelmodus. Das Übungsrad erscheint dunkel nur dann, wenn im Trainingstagebuch unter „Darstellung“ ausdrücklich „Dunkel“ gewählt ist, und verhält sich damit wie das eingebettete Trainingstagebuch.
