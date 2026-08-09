import type {SiteContent} from './types';

/**
 * English content — a translation of `fr.ts`, which is the source of truth.
 * Any structural change must be made in both files or the TypeScript build fails.
 */
export const en: SiteContent = {
    meta: {
        title: 'Gauthier Coppeaux — Software Developer & Engineer',
        description:
            'Software Engineering master’s student at Université de Rennes. Two internships at Société Générale in backend development, Kubernetes and CI/CD. Looking for a Java backend apprenticeship starting September 2026.',
        htmlLang: 'en',
    },

    nav: {
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        education: 'Education',
        contact: 'Contact',
    },

    a11y: {
        skipToContent: 'Skip to main content',
        toggleTheme: 'Toggle theme',
        toggleLanguage: 'Passer en français',
        mainNavigation: 'Main navigation',
    },

    hero: {
        eyebrow: 'Available for an apprenticeship — September 2026',
        name: 'Gauthier Coppeaux',
        role: 'Software Developer & Engineer',
        objective: 'Looking for a Java backend apprenticeship starting September 2026.',
        intro:
            'Software Engineering master’s student at Université de Rennes, with early experience in backend development and Kubernetes deployment gained through two internships at Société Générale.',
        ctaContact: 'Get in touch',
        ctaResume: 'Download résumé',
        ctaResumeFile: 'PDF · 117 KB',
        facts: [
            {label: 'Looking for', value: 'Java backend apprenticeship'},
            {label: 'Studying', value: 'MSc Software Engineering'},
            {label: 'Languages', value: 'FR · EN C1 · ES B1 · HU B1'},
        ],
    },

    sections: {
        about: {
            index: '01',
            title: 'About',
            lead: 'What I do, and what I am looking for.',
        },
        experience: {
            index: '02',
            title: 'Experience',
            lead: 'Two internships at Société Générale, in 2025 and 2026.',
        },
        projects: {
            index: '03',
            title: 'Projects',
            lead: 'Two projects taken from design to deployment.',
        },
        skills: {
            index: '04',
            title: 'Skills',
            lead: 'The tools and languages I work with.',
        },
        education: {
            index: '05',
            title: 'Education',
            lead: 'Computer science at Université de Rennes.',
        },
        contact: {
            index: '06',
            title: 'Contact',
            lead: 'An apprenticeship opportunity, or a question? Drop me a line.',
        },
    },

    about: {
        paragraphs: [
            'I am a Computer Science master’s student specialising in Software Engineering at Université de Rennes. I got into backend development and Kubernetes deployment through two internships at Société Générale, where I contributed to the SG Engineering Platform.',
            'I am looking for a Java backend apprenticeship starting September 2026, in a team where code quality and deployment automation matter as much as the feature being shipped.',
        ],
        focus: [
            {
                title: 'Backend & APIs',
                text: 'Designing REST APIs and the PostgreSQL data models behind them.',
            },
            {
                title: 'Cloud & deployment',
                text: 'Automating deployment, from the Kubernetes Helm chart to the CI/CD pipeline on Azure.',
            },
            {
                title: 'Observability & data',
                text: 'Centralising logs with the Elastic stack and making platform data usable.',
            },
        ],
    },

    experience: [
        {
            company: 'Société Générale',
            role: 'Software Engineering Intern',
            location: 'Val-de-Fontenay / La Défense, France',
            periods: ['May 2025 — July 2025', 'May 2026 — August 2026'],
            summary:
                'Two internships centred on the SG Engineering Platform: automating internal API deployment, asynchronous data flows, observability and making platform data usable.',
            bullets: [
                'Contributed to the development of the SG Engineering Platform.',
                'Integrated Azure Service Bus for data flow management and asynchronous task processing.',
                'Refactored an internal API template and its Kubernetes Helm chart to automate the deployment of new APIs.',
                'Integrated the Elastic stack to improve centralisation and analysis of application logs.',
                'Designed a PostgreSQL data model to make GitHub Secret Scanning results usable.',
                'Built REST APIs exposing the closure reasons associated with applications.',
            ],
            tags: ['Kubernetes', 'Helm', 'Azure Service Bus', 'Elastic', 'PostgreSQL', 'REST', 'CI/CD'],
        },
    ],

    projects: [
        {
            name: 'Stakr',
            tagline: 'Hybrid wealth dashboard — stocks & crypto',
            highlights: [
                {
                    label: 'Cloud & DevOps',
                    text: 'Automated CI/CD deployment through GitHub Actions to Azure Container Apps. Secret management, auto-scaling and API security via OAuth2/JWT.',
                },
                {
                    label: 'Data intelligence',
                    text: 'PostgreSQL schema optimised for real-time tracking and multi-asset historisation (time-series).',
                },
                {
                    label: 'Data pipeline',
                    text: 'Financial API integration and automated database lifecycle management via Alembic.',
                },
            ],
            stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Azure', 'GitHub Actions'],
            links: [
                {label: 'Visit the site', href: 'https://stakr.me'},
                {label: 'Source code', href: 'https://github.com/gauthiercpx/stakr'},
            ],
        },
        {
            name: 'CorrectExam',
            tagline: 'Exam grading assistance platform — first-year master’s project',
            highlights: [
                {
                    label: 'Artificial intelligence',
                    text: 'Optimised a handwriting OCR engine using the MLT model and integrated DBNet for complex line segmentation.',
                },
                {
                    label: 'AI integration',
                    text: 'Implemented OCR and answer-clustering modules inside the existing application (edge computing via WebAssembly).',
                },
            ],
            stack: ['Angular', 'Java', 'Python', 'OpenCV.js', 'WebAssembly', 'DBNet'],
            links: [],
        },
    ],

    skills: [
        {title: 'Languages', items: ['Java', 'C', 'Scala', 'Shell', 'Python', 'Angular', 'React', 'Vue.js']},
        {title: 'DevOps / Infrastructure', items: ['Kubernetes', 'Azure', 'Docker', 'Git', 'CI/CD']},
        {title: 'Software development', items: ['Git', 'SQL', 'SCRUM']},
        {title: 'Backend / Data', items: ['REST APIs', 'PostgreSQL']},
        {title: 'Systems', items: ['Linux']},
    ],

    education: [
        {
            degree: 'MSc Computer Science — Software Engineering',
            school: 'Université de Rennes',
            period: '2025 — 2027',
        },
        {
            degree: 'BSc Computer Science',
            school: 'Université de Rennes',
            period: '2021 — 2025',
        },
        {
            degree: 'French Baccalauréat — Mathematics & Physics',
            school: 'Lycée Henri Bergson, Paris',
            period: '2019',
        },
    ],

    languagesTitle: 'Languages',
    languages: [
        {name: 'French', level: 'Native', value: 100},
        {name: 'English', level: 'C1', value: 83},
        {name: 'Spanish', level: 'B1', value: 50},
        {name: 'Hungarian', level: 'B1', value: 50},
    ],

    contact: {
        lead: 'I read and answer every message. The form lands straight in my inbox.',
        links: [
            {
                icon: 'mail',
                label: 'Email',
                value: 'gauthier.coppeaux@gmail.com',
                href: 'mailto:gauthier.coppeaux@gmail.com',
            },
            {
                icon: 'phone',
                label: 'Phone',
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
            title: 'Send a message',
            name: 'Name',
            namePlaceholder: 'Your name',
            email: 'Email',
            emailPlaceholder: 'you@company.com',
            message: 'Message',
            messagePlaceholder: 'Your message…',
            submit: 'Send',
            sending: 'Sending…',
            success: 'Message sent. Thanks — I will get back to you shortly.',
            error: 'Sending failed. You can reach me directly by email.',
            disabled: 'The form is not configured yet. Please use the details opposite.',
        },
    },

    footer: {
        builtWith: 'Designed and built with React, TypeScript and Vite.',
        rights: 'Gauthier Coppeaux',
        backToTop: 'Back to top',
    },
};
