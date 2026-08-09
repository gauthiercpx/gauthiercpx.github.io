import type {SiteContent} from './types';

/**
 * Contenu français — repris fidèlement du CV (Gauthier_Coppeaux_CV.pdf).
 * Aucune information n'est ajoutée par rapport au CV : seule la formulation est adaptée au web.
 */
export const fr: SiteContent = {
    meta: {
        title: 'Gauthier Coppeaux — Développeur · Ingénieur logiciel',
        description:
            'Étudiant en Master Ingénierie Logicielle à l’Université de Rennes. Deux stages à la Société Générale en développement backend, Kubernetes et CI/CD. Recherche une alternance en développement backend Java à partir de septembre 2026.',
        htmlLang: 'fr',
    },

    nav: {
        about: 'Profil',
        experience: 'Expérience',
        projects: 'Projets',
        skills: 'Compétences',
        education: 'Formation',
        contact: 'Contact',
    },

    a11y: {
        skipToContent: 'Aller au contenu principal',
        toggleTheme: 'Changer de thème',
        toggleLanguage: 'Switch to English',
        mainNavigation: 'Navigation principale',
    },

    hero: {
        eyebrow: 'Disponible en alternance — septembre 2026',
        name: 'Gauthier Coppeaux',
        role: 'Développeur · Ingénieur logiciel',
        objective: 'Recherche une alternance en développement backend Java à partir de septembre 2026.',
        intro:
            'Étudiant en Master Ingénierie Logicielle à l’Université de Rennes, avec une première expérience en développement backend et déploiement Kubernetes acquise lors de deux stages à la Société Générale.',
        ctaContact: 'Me contacter',
        ctaResume: 'Télécharger le CV',
        ctaResumeFile: 'PDF · 117 Ko',
        facts: [
            {label: 'Recherche', value: 'Alternance backend Java'},
            {label: 'Formation', value: 'Master Ingénierie Logicielle'},
            {label: 'Langues', value: 'FR · EN C1 · ES B1 · HU B1'},
        ],
    },

    sections: {
        about: {
            index: '01',
            title: 'Profil',
            lead: 'Ce que je fais, et ce que je cherche.',
        },
        experience: {
            index: '02',
            title: 'Expérience',
            lead: 'Deux stages à la Société Générale, en 2025 puis en 2026.',
        },
        projects: {
            index: '03',
            title: 'Projets',
            lead: 'Deux projets menés de la conception au déploiement.',
        },
        skills: {
            index: '04',
            title: 'Compétences',
            lead: 'Les outils et langages que j’utilise au quotidien.',
        },
        education: {
            index: '05',
            title: 'Formation',
            lead: 'Université de Rennes, informatique.',
        },
        contact: {
            index: '06',
            title: 'Contact',
            lead: 'Une opportunité d’alternance, une question ? Écrivez-moi.',
        },
    },

    about: {
        paragraphs: [
            'Je suis étudiant en Master Informatique — Ingénierie Logicielle à l’Université de Rennes. J’ai découvert le développement backend et le déploiement Kubernetes lors de deux stages à la Société Générale, où j’ai contribué à la SG Engineering Platform.',
            'Je cherche une alternance en développement backend Java à partir de septembre 2026, dans une équipe où la qualité du code et l’automatisation du déploiement comptent autant que la fonctionnalité livrée.',
        ],
        focus: [
            {
                title: 'Backend & APIs',
                text: 'Conception d’APIs REST et des modèles de données PostgreSQL qui les alimentent.',
            },
            {
                title: 'Cloud & déploiement',
                text: 'Automatisation du déploiement, du chart Helm Kubernetes au pipeline CI/CD sur Azure.',
            },
            {
                title: 'Observabilité & données',
                text: 'Centralisation des logs avec la stack Elastic et exploitation des données produites par la plateforme.',
            },
        ],
    },

    experience: [
        {
            company: 'Société Générale',
            role: 'Développeur stagiaire',
            location: 'Val-de-Fontenay / La Défense',
            periods: ['Mai 2025 — Juillet 2025', 'Mai 2026 — Août 2026'],
            summary:
                'Deux stages autour de la SG Engineering Platform : automatisation du déploiement des APIs internes, traitement asynchrone des flux, observabilité et exploitation des données de la plateforme.',
            bullets: [
                'Participation au développement de la SG Engineering Platform.',
                'Intégration d’Azure Service Bus pour la gestion des flux de données et le traitement asynchrone des tâches.',
                'Refactoring d’un template d’API interne et de son chart Helm Kubernetes afin d’automatiser le déploiement de nouvelles APIs.',
                'Intégration de la stack Elastic pour améliorer la centralisation et l’analyse des logs applicatifs.',
                'Conception d’un modèle de données PostgreSQL pour exploiter les résultats de GitHub Secret Scanning.',
                'Développement d’APIs REST permettant d’exposer les closure reasons associés aux applications.',
            ],
            tags: ['Kubernetes', 'Helm', 'Azure Service Bus', 'Elastic', 'PostgreSQL', 'REST', 'CI/CD'],
        },
    ],

    projects: [
        {
            name: 'Stakr',
            tagline: 'Dashboard de patrimoine hybride — bourse & crypto',
            highlights: [
                {
                    label: 'Cloud & DevOps',
                    text: 'Déploiement automatisé (CI/CD) via GitHub Actions vers Azure Container Apps. Gestion des secrets, scaling automatique et sécurisation des APIs via OAuth2/JWT.',
                },
                {
                    label: 'Data Intelligence',
                    text: 'Conception d’un schéma PostgreSQL optimisé pour le suivi temps réel et l’historisation multi-actifs (time-series).',
                },
                {
                    label: 'Pipeline Data',
                    text: 'Intégration d’APIs financières et automatisation du cycle de vie de la base de données via Alembic.',
                },
            ],
            stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Azure', 'GitHub Actions'],
            links: [
                {label: 'Voir le site', href: 'https://stakr.me'},
                {label: 'Code source', href: 'https://github.com/gauthiercpx/stakr'},
            ],
        },
        {
            name: 'CorrectExam',
            tagline: 'Plateforme d’assistance à la correction — projet M1',
            highlights: [
                {
                    label: 'Intelligence artificielle',
                    text: 'Optimisation d’un moteur d’OCR manuscrit via le modèle MLT et intégration de DBNet pour la segmentation de lignes complexes.',
                },
                {
                    label: 'Intégration IA',
                    text: 'Implémentation de modules d’OCR et de clustering de réponses au sein de l’application existante (edge computing via WebAssembly).',
                },
            ],
            stack: ['Angular', 'Java', 'Python', 'OpenCV.js', 'WebAssembly', 'DBNet'],
            links: [],
        },
    ],

    skills: [
        {title: 'Langages', items: ['Java', 'C', 'Scala', 'Shell', 'Python', 'Angular', 'React', 'Vue.js']},
        {title: 'DevOps / Infrastructure', items: ['Kubernetes', 'Azure', 'Docker', 'Git', 'CI/CD']},
        {title: 'Développement logiciel', items: ['Git', 'SQL', 'SCRUM']},
        {title: 'Backend / Data', items: ['REST APIs', 'PostgreSQL']},
        {title: 'Systèmes', items: ['Linux']},
    ],

    education: [
        {
            degree: 'Master Informatique — Ingénierie Logicielle',
            school: 'Université de Rennes',
            period: '2025 — 2027',
        },
        {
            degree: 'Licence Informatique',
            school: 'Université de Rennes',
            period: '2021 — 2025',
        },
        {
            degree: 'Baccalauréat Mathématiques — Physique',
            school: 'Lycée Henri Bergson, Paris',
            period: '2019',
        },
    ],

    languagesTitle: 'Langues',
    languages: [
        {name: 'Français', level: 'Langue maternelle', value: 100},
        {name: 'Anglais', level: 'C1', value: 83},
        {name: 'Espagnol', level: 'B1', value: 50},
        {name: 'Hongrois', level: 'B1', value: 50},
    ],

    contact: {
        lead: 'Je réponds à tous les messages. Le formulaire arrive directement dans ma boîte mail.',
        links: [
            {
                icon: 'mail',
                label: 'Email',
                value: 'gauthier.coppeaux@gmail.com',
                href: 'mailto:gauthier.coppeaux@gmail.com',
            },
            {
                icon: 'phone',
                label: 'Téléphone',
                value: '+33 6 82 93 85 02',
                href: 'tel:+33682938502',
            },
            {
                icon: 'linkedin',
                label: 'LinkedIn',
                value: 'in/gauthier-coppeaux',
                href: 'https://www.linkedin.com/in/gauthier-coppeaux/',
            },
            {
                icon: 'github',
                label: 'GitHub',
                value: 'gauthiercpx',
                href: 'https://github.com/gauthiercpx',
            },
        ],
        form: {
            title: 'Envoyer un message',
            name: 'Nom',
            namePlaceholder: 'Votre nom',
            email: 'Email',
            emailPlaceholder: 'vous@entreprise.com',
            message: 'Message',
            messagePlaceholder: 'Votre message…',
            submit: 'Envoyer',
            sending: 'Envoi en cours…',
            success: 'Message envoyé. Merci, je vous réponds rapidement.',
            error: 'L’envoi a échoué. Vous pouvez me joindre directement par email.',
            disabled: 'Le formulaire n’est pas encore configuré. Utilisez les coordonnées ci-contre.',
        },
    },

    footer: {
        builtWith: 'Conçu et développé avec React, TypeScript et Vite.',
        rights: 'Gauthier Coppeaux',
        backToTop: 'Haut de page',
    },
};
