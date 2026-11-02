/*
 * Textes en français. Toute clé absente ici retombe automatiquement sur
 * l'anglais (voir en.js), la page reste donc toujours complète.
 *
 * Registre : vouvoiement ("vous"). Les espaces avant « ! ? : » sont des
 * espaces insécables (\u00A0), comme le veut la typographie française.
 */
export default {
    meta: {
        title: 'Binam Nepal — Développeur React',
        description:
            'Binam Nepal est un développeur web basé à Katmandou, au Népal. Il crée des applications web rapides, responsives et prêtes pour la production avec React, Tailwind CSS et des outils frontend modernes.',
    },

    locale: 'fr-FR',

    nav: {
        skipToContent: 'Aller au contenu',
        mainLabel: 'Navigation principale',
        backToTop: 'Binam Nepal — retour en haut',
        about: 'À propos',
        skills: 'Compétences',
        work: 'Projets',
        services: 'Services',
        notes: 'Notes',
        contact: 'Contact',
        switchToLight: 'Passer en mode clair',
        switchToDark: 'Passer en mode sombre',
        openMenu: 'Ouvrir le menu de navigation',
        closeMenu: 'Fermer le menu de navigation',
        language: 'Langue',
    },

    header: {
        portraitAlt: 'Portrait de Binam Nepal',
        available: 'Disponible pour de nouveaux projets',
        greeting: 'Bonjour, je suis',
        titleLine1: 'Je conçois des',
        titleHighlight: 'expériences web modernes',
        intro:
            "Je conçois et développe des applications web rapides, évolutives et centrées sur l'utilisateur avec React et des technologies modernes. Basé à Katmandou, je travaille avec des clients du monde entier.",
        hireMe: 'Travaillons ensemble',
        downloadCv: 'Télécharger mon CV',
        // Le CV n'existe pour l'instant qu'en anglais. Dès qu'une version française
        // est disponible, placez le PDF dans /public/assets et indiquez-le ici.
        cvFile: '/assets/Binam%20nepal%20CV.pdf',
        cvFilename: 'Binam-Nepal-CV.pdf',
    },

    about: {
        eyebrow: 'Introduction',
        title: 'À propos de moi',
        photoAlt: 'Binam Nepal à son bureau',
        intro:
            "Je suis développeur web basé à Katmandou, spécialisé dans la création d'applications évolutives et performantes avec React et les technologies frontend modernes. Je tiens particulièrement à un code propre, à une bonne UI/UX et à une exécution de niveau production.",
        highlights: {
            languages: {
                name: 'Technologies',
                description: 'HTML, CSS, JavaScript, React, Tailwind CSS',
            },
            education: {
                name: 'Formation',
                description: "Bachelor en technologies de l'information",
            },
            projects: {
                name: 'Projets',
                description: 'Frontends React et API REST Django',
            },
        },
        toolsTitle: 'Mes outils',
    },

    skills: {
        eyebrow: 'Avec quoi je travaille',
        title: 'Compétences & outils',
        categories: {
            frontend: 'Frontend',
            backend: 'Backend & données',
            tools: 'Outils',
        },
    },

    work: {
        eyebrow: 'Mon portfolio',
        title: 'Projets sélectionnés',
        intro:
            "Une sélection de projets qui illustrent mon expérience dans la création d'applications responsives, centrées sur l'utilisateur et performantes.",
        screenshotAlt: "Capture d'écran de {name}",
        liveDemo: 'Démo en ligne',
        code: 'Code',
        caseStudy: 'Étude de cas',
        seeMore: 'Voir plus sur GitHub',
    },

    services: {
        eyebrow: 'Ce que je propose',
        title: 'Mes services',
        intro:
            "Depuis Katmandou, je crée des interfaces rapides, responsives et esthétiques qui offrent d'excellentes expériences utilisateur.",
        items: {
            development: {
                name: 'Développement web',
                description:
                    "Applications React prêtes pour la production — architecture de composants, routage, intégration d'API et optimisation des performances.",
            },
            webDesign: {
                name: 'Design web',
                description:
                    "Des interfaces visuellement fortes et responsives, qui privilégient la facilité d'utilisation et portent une identité de marque cohérente.",
            },
            uiux: {
                name: 'Design UI/UX',
                description:
                    "Cartographie du parcours utilisateur et des schémas d'interaction pour résoudre des problèmes complexes avec des parcours simples et évidents.",
            },
        },
    },

    testimonials: {
        eyebrow: 'Ils en parlent',
        title: 'Témoignages',
        quoteOpen: '\u00AB\u202F',
        quoteClose: '\u202F\u00BB',
    },

    notes: {
        eyebrow: 'Écrits',
        title: 'Notes',
        readNote: 'Lire la note',
        backToNotes: 'Retour aux notes',
    },

    contact: {
        eyebrow: 'Entrons en contact',
        title: 'Contactez-moi',
        intro:
            "Je suis actuellement ouvert à de nouvelles opportunités. Que vous ayez une question ou simplement envie de dire bonjour, je vous répondrai dans les meilleurs délais.",
        sideTitle: 'Parlons de tout\u00A0!',
        sideText:
            'Pas fan des formulaires\u00A0? Écrivez-moi directement par e-mail ou retrouvez-moi sur mes réseaux sociaux.',
        location: 'Katmandou, Népal',
        nameLabel: 'Nom',
        namePlaceholder: 'Nom',
        emailLabel: 'E-mail',
        emailPlaceholder: 'E-mail',
        messageLabel: 'Votre message',
        messagePlaceholder: 'Votre message',
        send: 'Envoyer le message',
        sending: 'Envoi en cours…',
        errors: {
            nameShort: 'Ce nom semble trop court',
            nameRequired: 'Le nom est requis',
            emailInvalid: 'Veuillez saisir une adresse e-mail valide',
            emailRequired: "L'adresse e-mail est requise",
            messageShort: 'Le message doit contenir au moins 10 caractères',
            messageRequired: 'Le message est requis',
        },
        status: {
            notConfigured:
                "Le formulaire n'est pas encore configuré. Écrivez-moi directement à binamnepal173@gmail.com.",
            success: 'Merci\u00A0! Votre message est en route — je vous répondrai rapidement.',
            failed: "Une erreur s'est produite. Veuillez réessayer.",
            network:
                'Envoi impossible pour le moment. Veuillez plutôt écrire à binamnepal173@gmail.com.',
        },
    },

    footer: {
        backToTop: 'Retour en haut',
        rights: 'Tous droits réservés.',
    },

    project: {
        backToWork: 'Retour aux projets',
        screenshotAlt: "Capture d'écran de {name}",
        liveDemo: 'Démo en ligne',
        viewCode: 'Voir le code',
        role: 'Rôle',
        problem: 'Le problème',
        approach: 'Mon approche',
        result: 'Résultat',
    },

    notFound: {
        title: 'Page introuvable',
        text: "La page que vous recherchez n'existe pas ou a été déplacée.",
        backHome: "Retour à l'accueil",
    },

    /*
     * Textes de projets traduits. La clé est le `slug` de src/data/projects.js.
     * Seuls les champs texte sont remplacés — images, liens et stack restent
     * dans projects.js. Un champ absent ici s'affiche en anglais (par exemple
     * les TODO encore ouverts de "pasupati-planners").
     */
    projects: {
        'pasupati-planners': {
            description:
                "Une plateforme de réservation d'événements où les clients parcourent les formules, vérifient les disponibilités et réservent leurs événements en ligne.",
        },
        'yoyo-home-service': {
            description:
                "Une plateforme backend qui met en relation des clients et des prestataires pour des tâches du quotidien — plombiers, électriciens, agents de ménage, pet-sitters — avec réservations, paiements et avis.",
            role: 'Développeur backend',
            problem:
                "Faire appel à un prestataire à la journée pour une tâche domestique (plomberie, ménage, garde d'animaux) se fait généralement de façon informelle — par le bouche-à-oreille ou par téléphone — sans trace de la mission, sans moyen de comparer les prestataires et sans responsabilité en cas de problème.",
            approach:
                "Conçu comme une API Django REST Framework répartie en six applications ciblées (accounts, categories, workers, bookings, payments, reviews), chacune avec son propre service.py contenant la logique métier, afin que les vues restent légères et n'accèdent jamais directement aux modèles. Le cœur du système est une machine à états des réservations — pending → accepted → in_progress → completed, avec des chemins de refus et d'annulation à chaque étape — entièrement appliquée dans la couche de service, de sorte qu'une réservation ne peut jamais sauter un état ni être modifiée vers un état invalide. La recherche de prestataires filtre par catégorie et par ville, et un avis n'est accepté que pour une réservation terminée, ce qui garantit la fiabilité de la note moyenne d'un prestataire au lieu de la laisser ouverte aux avis sans réelle mission.",
            result:
                "Une API fonctionnelle et testable, avec authentification par jeton, migrations et une liste documentée des points d'accès — le genre de backend sur lequel une vraie application de réservation pourrait s'appuyer. Le README indique clairement ce qui manque encore (intégration d'une passerelle de paiement, recherche par distance géographique, notifications en temps réel), ce qui correspond à l'état honnête d'un projet backend en cours.",
        },
        'furever-home': {
            description:
                "Une plateforme d'adoption d'animaux pour parcourir les chiens, chats et autres animaux adoptables par race, avec des parcours de don et d'inscription des adoptants.",
            role: 'Développeur frontend',
            problem:
                "L'adoption d'animaux au niveau local passe souvent par des publications Facebook dispersées, sans moyen cohérent de parcourir les animaux disponibles, de filtrer par type d'animal ou de s'informer sur les besoins de soins avant d'adopter.",
            approach:
                "Une application React multipages (React Router) avec des parcours d'adoption dédiés par type d'animal — chiens, chats et autres (lapins, hamsters, cochons d'Inde, perroquets) — chacun avec ses propres fiches de races et un formulaire d'adoption. Des pages de connexion et d'inscription distinctes, ainsi qu'une route de tableau de bord protégée par jeton, posent les bases pour permettre aux adoptants de suivre leurs demandes ; une page sur la santé animale et une page de dons complètent le site au-delà des simples annonces.",
            result:
                "Un catalogue d'adoption structuré et navigable plutôt qu'un simple fil défilant. Le projet reste uniquement frontend — le parcours de connexion, d'inscription et de tableau de bord lit actuellement les données depuis le localStorage plutôt que depuis un vrai backend, ce qui est la prochaine étape naturelle (l'associer à un schéma d'authentification comme celui déjà construit pour Yoyo Home Service).",
        },
    },

    /*
     * Notes traduites. La clé est le `slug` de src/data/posts.js.
     * Les articles non traduits restent affichés en anglais.
     */
    posts: {
        'rebuilding-this-portfolio': {
            title: 'Refonte de ce portfolio : ce qui était vraiment cassé',
            excerpt:
                "Une liste des défauts de la première version de ce site — des polices qui ne se chargeaient jamais, un faux CAPTCHA, des liens morts — et comment j'ai corrigé chacun d'eux.",
            body: [
                "Quand j'ai publié ce site pour la première fois, il me semblait correct, mais il contenait plusieurs bugs que je ne pouvais pas voir en cliquant distraitement.",
                "Les polices personnalisées déclarées dans la configuration Tailwind n'étaient jamais réellement chargées depuis Google Fonts : tous les titres retombaient donc silencieusement sur la police par défaut du navigateur. La navigation utilisait de simples balises d'ancre au lieu de liens React Router, si bien que chaque clic rechargeait toute la page et cassait la bibliothèque de défilement fluide. Le formulaire de contact avait l'air réel, mais utilisait une clé de test CAPTCHA publique qui réussit toujours, et les envois étaient seulement enregistrés dans le localStorage — jamais transmis nulle part.",
                "La solution a consisté à traiter le site comme une seule page continue plutôt que cinq routes séparées, à brancher le formulaire de contact sur un vrai service d'envoi d'e-mails, à charger correctement les polices, et à supprimer une bonne quantité de code inutilisé (un slice d'authentification Redux entier qui n'était jamais utilisé) ainsi que des dépendances inutiles qui alourdissaient le build.",
                "La plus grande leçon : une chose peut sembler correcte tout en étant fonctionnellement cassée. Un bouton qui ne fait rien, ou une police qui ne se charge pas en silence, ne déclenche aucune erreur — il dégrade simplement le site discrètement. Cela vaut la peine de cliquer réellement sur chaque lien et de tester chaque formulaire avant de considérer un projet comme terminé.",
            ],
        },
    },
};
