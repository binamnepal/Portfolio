/*
 * Deutsche Texte. Fehlt hier ein Schlüssel, wird automatisch auf Englisch
 * zurückgegriffen (siehe en.js), die Seite bleibt also immer vollständig.
 *
 * Ansprache: "Sie" (formell). Wenn du lieber "du" verwendest, passe die
 * Abschnitte `contact` und ggf. `header.hireMe` an.
 */
export default {
    meta: {
        title: 'Binam Nepal — React-Entwickler',
        description:
            'Binam Nepal ist Webentwickler mit Sitz in Kathmandu, Nepal, und entwickelt schnelle, responsive und produktionsreife Webanwendungen mit React, Tailwind CSS und modernem Frontend-Tooling.',
    },

    locale: 'de-DE',

    nav: {
        skipToContent: 'Zum Inhalt springen',
        mainLabel: 'Hauptnavigation',
        backToTop: 'Binam Nepal — zurück nach oben',
        about: 'Über mich',
        skills: 'Skills',
        work: 'Projekte',
        services: 'Leistungen',
        notes: 'Notizen',
        contact: 'Kontakt',
        switchToLight: 'Zum hellen Modus wechseln',
        switchToDark: 'Zum dunklen Modus wechseln',
        openMenu: 'Navigationsmenü öffnen',
        closeMenu: 'Navigationsmenü schließen',
        language: 'Sprache',
    },

    header: {
        portraitAlt: 'Porträt von Binam Nepal',
        available: 'Für Projekte verfügbar',
        greeting: 'Hallo, ich bin',
        titleLine1: 'Ich entwickle moderne',
        titleHighlight: 'Weberlebnisse',
        intro:
            'Ich konzipiere und entwickle schnelle, skalierbare und nutzerorientierte Webanwendungen mit React und modernen Technologien. Ich arbeite von Kathmandu aus mit Kunden weltweit.',
        hireMe: 'Mich engagieren',
        downloadCv: 'Lebenslauf herunterladen',
        // Der Lebenslauf ist derzeit nur auf Englisch vorhanden. Sobald es eine
        // deutsche PDF gibt, lege sie in /public/assets ab und trage sie hier ein.
        cvFile: '/assets/Binam%20nepal%20CV.pdf',
        cvFilename: 'Binam-Nepal-CV.pdf',
    },

    about: {
        eyebrow: 'Einführung',
        title: 'Über mich',
        photoAlt: 'Binam Nepal an seinem Schreibtisch',
        intro:
            'Ich bin Webentwickler mit Sitz in Kathmandu und konzentriere mich auf skalierbare, leistungsstarke Anwendungen mit React und modernen Frontend-Technologien. Mir sind sauberer Code, gutes UI/UX und eine professionelle, produktionsreife Umsetzung besonders wichtig.',
        highlights: {
            languages: {
                name: 'Technologien',
                description: 'HTML, CSS, JavaScript, React, Tailwind CSS',
            },
            education: {
                name: 'Ausbildung',
                description: 'Bachelor in Informationstechnologie',
            },
            projects: {
                name: 'Projekte',
                description: 'React-Frontends und Django-REST-APIs',
            },
        },
        toolsTitle: 'Meine Tools',
    },

    skills: {
        eyebrow: 'Womit ich arbeite',
        title: 'Skills & Tools',
        categories: {
            frontend: 'Frontend',
            backend: 'Backend & Daten',
            tools: 'Tools',
        },
    },

    work: {
        eyebrow: 'Mein Portfolio',
        title: 'Ausgewählte Projekte',
        intro:
            'Eine Auswahl an Projekten, die meine Erfahrung mit responsiven, nutzerorientierten und performanten Anwendungen zeigt.',
        screenshotAlt: 'Screenshot von {name}',
        liveDemo: 'Live-Demo',
        code: 'Code',
        caseStudy: 'Fallstudie',
        seeMore: 'Mehr auf GitHub ansehen',
    },

    services: {
        eyebrow: 'Mein Angebot',
        title: 'Meine Leistungen',
        intro:
            'Von Kathmandu aus entwickle ich schnelle, responsive und ansprechend gestaltete Oberflächen, die ein großartiges Nutzererlebnis bieten.',
        items: {
            development: {
                name: 'Webentwicklung',
                description:
                    'Produktionsreife React-Anwendungen – Komponentenarchitektur, Routing, API-Anbindung und Performance-Optimierung.',
            },
            webDesign: {
                name: 'Webdesign',
                description:
                    'Visuell überzeugende, responsive Oberflächen, die Benutzerfreundlichkeit in den Mittelpunkt stellen und eine einheitliche Markenidentität transportieren.',
            },
            uiux: {
                name: 'UI/UX-Design',
                description:
                    'Ich analysiere die User Journey und Interaktionsmuster, um komplexe Probleme mit einfachen, selbsterklärenden Abläufen zu lösen.',
            },
        },
    },

    testimonials: {
        eyebrow: 'Freundliche Worte',
        title: 'Empfehlungen',
        quoteOpen: '\u201E',
        quoteClose: '\u201C',
    },

    notes: {
        eyebrow: 'Texte',
        title: 'Notizen',
        readNote: 'Notiz lesen',
        backToNotes: 'Zurück zu den Notizen',
    },

    contact: {
        eyebrow: 'Lassen Sie uns vernetzen',
        title: 'Kontakt aufnehmen',
        intro:
            'Ich bin aktuell offen für neue Möglichkeiten. Ob Sie eine Frage haben oder einfach nur Hallo sagen möchten – ich antworte Ihnen so bald wie möglich.',
        sideTitle: 'Lassen Sie uns über alles sprechen!',
        sideText:
            'Keine Lust auf Formulare? Schreiben Sie mir direkt eine E-Mail oder finden Sie mich in den sozialen Netzwerken.',
        location: 'Kathmandu, Nepal',
        nameLabel: 'Name',
        namePlaceholder: 'Name',
        emailLabel: 'E-Mail',
        emailPlaceholder: 'E-Mail',
        messageLabel: 'Ihre Nachricht',
        messagePlaceholder: 'Ihre Nachricht',
        send: 'Nachricht senden',
        sending: 'Wird gesendet…',
        errors: {
            nameShort: 'Dieser Name ist zu kurz',
            nameRequired: 'Bitte geben Sie Ihren Namen ein',
            emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
            emailRequired: 'Bitte geben Sie Ihre E-Mail-Adresse ein',
            messageShort: 'Die Nachricht muss mindestens 10 Zeichen lang sein',
            messageRequired: 'Bitte geben Sie eine Nachricht ein',
        },
        status: {
            notConfigured:
                'Das Formular ist noch nicht eingerichtet. Schreiben Sie mir bitte direkt an binamnepal173@gmail.com.',
            success: 'Vielen Dank! Ihre Nachricht ist unterwegs – ich melde mich bald.',
            failed: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
            network:
                'Senden ist gerade nicht möglich. Bitte schreiben Sie stattdessen eine E-Mail an binamnepal173@gmail.com.',
        },
    },

    footer: {
        backToTop: 'Nach oben',
        rights: 'Alle Rechte vorbehalten.',
    },

    project: {
        backToWork: 'Zurück zu den Projekten',
        screenshotAlt: 'Screenshot von {name}',
        liveDemo: 'Live-Demo',
        viewCode: 'Code ansehen',
        role: 'Rolle',
        problem: 'Das Problem',
        approach: 'Mein Ansatz',
        result: 'Ergebnis',
    },

    notFound: {
        title: 'Seite nicht gefunden',
        text: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
        backHome: 'Zur Startseite',
    },

    /*
     * Übersetzte Projekttexte. Der Schlüssel ist der `slug` aus
     * src/data/projects.js. Nur Textfelder überschreiben — Bilder, Links und
     * Tech-Stack bleiben in projects.js. Felder, die hier fehlen, erscheinen
     * auf Englisch (z. B. die noch offenen TODO-Platzhalter von
     * "pasupati-planners").
     */
    projects: {
        'pasupati-planners': {
            description:
                'Eine Plattform für Eventreservierungen, auf der Kunden Pakete durchsuchen, die Verfügbarkeit prüfen und Events online buchen können.',
        },
        'yoyo-home-service': {
            description:
                'Eine Backend-Plattform, die Kunden mit Servicekräften für Alltagsaufgaben zusammenbringt – Klempner, Elektriker, Reinigungskräfte, Tiersitter – inklusive Buchungen, Zahlungen und Bewertungen.',
            role: 'Backend-Entwickler',
            problem:
                'Die Beauftragung einer Hilfskraft für Haushaltsaufgaben (Sanitär, Reinigung, Tierbetreuung) läuft meist informell ab – per Mundpropaganda oder Anruf –, ohne Nachweis über den Auftrag, ohne Möglichkeit, Anbieter zu vergleichen, und ohne Verantwortlichkeit, wenn etwas schiefgeht.',
            approach:
                'Umgesetzt als Django-REST-Framework-API, aufgeteilt in sechs fokussierte Apps (accounts, categories, workers, bookings, payments, reviews), jeweils mit einer eigenen service.py für die Geschäftslogik, sodass die Views schlank bleiben und nie direkt auf Modelle zugreifen. Kern des Systems ist ein Buchungs-Statusautomat – pending → accepted → in_progress → completed, mit Ablehnungs- und Stornierungspfaden in jeder Phase –, der vollständig in der Service-Schicht durchgesetzt wird, sodass eine Buchung nie einen Zustand überspringen oder in einen ungültigen Zustand geraten kann. Die Suche nach Anbietern filtert nach Kategorie und Stadt, und eine Bewertung wird nur für eine abgeschlossene Buchung akzeptiert – so bleibt die Durchschnittsbewertung eines Anbieters vertrauenswürdig und ist nicht für Bewertungen ohne echten Auftrag offen.',
            result:
                'Eine funktionierende, testbare API mit Token-Authentifizierung, Migrationen und einer dokumentierten Endpunktliste – die Art von Backend, auf der eine echte Buchungs-App aufbauen könnte. Das README benennt klar, was noch fehlt (Anbindung eines Zahlungsanbieters, Umkreissuche, Echtzeit-Benachrichtigungen) – der ehrliche Stand eines Backend-Projekts in Entwicklung.',
        },
        'furever-home': {
            description:
                'Eine Tiervermittlungsplattform, auf der man vermittelbare Hunde, Katzen und andere Tiere nach Rasse durchsuchen kann – mit Spendenfunktion und Registrierung für Adoptierende.',
            role: 'Frontend-Entwickler',
            problem:
                'Die Tiervermittlung vor Ort läuft oft über verstreute Facebook-Beiträge, ohne einheitliche Möglichkeit, das Angebot zu durchsuchen, nach Tierart zu filtern oder sich vor einer Adoption über den Pflegebedarf zu informieren.',
            approach:
                'Eine mehrseitige React-App (React Router) mit eigenen Adoptionsabläufen je Tierart – Hunde, Katzen und weitere (Kaninchen, Hamster, Meerschweinchen, Papageien) –, jeweils mit eigenen Rassekarten und einem Adoptionsformular. Separate Login- und Registrierungsseiten sowie eine tokengeschützte Dashboard-Route legen die Grundlage dafür, dass Adoptierende ihre Anträge verfolgen können; eine Seite zur Tiergesundheit und eine Spendenseite runden die Website über reine Inserate hinaus ab.',
            result:
                'Ein strukturierter, durchsuchbarer Adoptionskatalog statt eines einzelnen endlosen Feeds. Das Projekt ist noch reines Frontend – der Ablauf aus Login, Registrierung und Dashboard liest derzeit aus dem localStorage statt aus einem echten Backend. Der nächste logische Schritt wäre, es mit einem Authentifizierungsmuster wie dem von Yoyo Home Service zu koppeln.',
        },
    },

    /*
     * Übersetzte Notizen. Schlüssel ist der `slug` aus src/data/posts.js.
     * Nicht übersetzte Beiträge werden weiterhin auf Englisch angezeigt.
     */
    posts: {
        'rebuilding-this-portfolio': {
            title: 'Dieses Portfolio neu aufgebaut: Was wirklich kaputt war',
            excerpt:
                'Eine Mängelliste der ersten Version dieser Website – Schriften, die nie geladen wurden, ein falsches CAPTCHA, tote Links – und wie ich jeden Punkt behoben habe.',
            body: [
                'Als ich diese Website zum ersten Mal veröffentlicht habe, sah sie für mich gut aus – hatte aber mehrere Fehler, die ich beim beiläufigen Herumklicken nicht bemerken konnte.',
                'Die in der Tailwind-Konfiguration deklarierten Schriften wurden nie von Google Fonts geladen, sodass jede Überschrift stillschweigend auf die Standardschrift des Browsers zurückfiel. Die Navigation verwendete einfache Anchor-Tags statt React-Router-Links, sodass jeder Klick die ganze Seite neu lud und die Smooth-Scroll-Bibliothek lahmlegte. Das Kontaktformular sah echt aus, nutzte aber einen öffentlichen CAPTCHA-Testschlüssel, der immer besteht, und Einsendungen wurden nur im localStorage gespeichert – nie irgendwohin gesendet.',
                'Die Lösung: die Website als eine durchgehende Seite statt als fünf getrennte Routen zu behandeln, das Kontaktformular an einen echten E-Mail-Zustelldienst anzubinden, die Schriften korrekt zu laden und eine ganze Menge ungenutzten Codes (einen kompletten Redux-Auth-Slice, der nie verwendet wurde) sowie ungenutzte Abhängigkeiten zu entfernen, die den Build aufgebläht haben.',
                'Die wichtigste Lektion: Dinge können richtig aussehen und trotzdem funktional kaputt sein. Ein Button, der nichts tut, oder eine Schrift, die stillschweigend nicht lädt, wirft keinen Fehler – sie verschlechtert die Website einfach unbemerkt. Es lohnt sich, wirklich jeden Link anzuklicken und jedes Formular zu testen, bevor man ein Projekt als fertig bezeichnet.',
            ],
        },
    },
};
