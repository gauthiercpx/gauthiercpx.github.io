/**
 * Forme du contenu du site.
 *
 * `fr.ts` et `en.ts` implémentent tous les deux `SiteContent` : si une clé manque ou change
 * d'un côté, le build TypeScript échoue. Les deux langues ne peuvent donc pas se désynchroniser.
 */

export type Locale = 'fr' | 'en';

/** Identifiants d'ancre — volontairement en anglais et identiques dans les deux langues. */
export type SectionId = 'about' | 'experience' | 'projects' | 'skills' | 'education' | 'contact';

export const SECTION_IDS: readonly SectionId[] = [
    'about',
    'experience',
    'projects',
    'skills',
    'education',
    'contact',
] as const;

export interface SectionHeading {
    /** Numéro éditorial affiché avant le titre, ex. « 01 ». */
    index: string;
    title: string;
    lead?: string;
}

export interface ExperienceItem {
    company: string;
    role: string;
    location: string;
    /** Une entrée par période — Société Générale compte deux stages. */
    periods: string[];
    summary: string;
    bullets: string[];
    tags: string[];
}

export interface ProjectHighlight {
    label: string;
    text: string;
}

export interface ProjectLink {
    label: string;
    href: string;
}

export interface ProjectItem {
    name: string;
    tagline: string;
    highlights: ProjectHighlight[];
    stack: string[];
    links: ProjectLink[];
}

export interface SkillGroup {
    title: string;
    items: string[];
}

export interface EducationItem {
    degree: string;
    school: string;
    period: string;
}

export interface LanguageSkill {
    name: string;
    level: string;
    /** Niveau exprimé en pourcentage, pour la barre de progression (natif = 100). */
    value: number;
}

export interface ContactLink {
    /** Clé d'icône résolue par le composant, pas une valeur libre. */
    icon: 'mail' | 'phone' | 'linkedin' | 'github';
    label: string;
    value: string;
    href: string;
}

export interface SiteContent {
    meta: {
        title: string;
        description: string;
        /** Valeur de l'attribut `lang` sur <html>. */
        htmlLang: string;
    };
    nav: Record<SectionId, string>;
    a11y: {
        skipToContent: string;
        toggleTheme: string;
        toggleLanguage: string;
        mainNavigation: string;
    };
    hero: {
        eyebrow: string;
        name: string;
        role: string;
        objective: string;
        intro: string;
        ctaContact: string;
        ctaResume: string;
        ctaResumeFile: string;
        facts: {label: string; value: string}[];
    };
    sections: Record<SectionId, SectionHeading>;
    about: {
        paragraphs: string[];
        focus: {title: string; text: string}[];
    };
    experience: ExperienceItem[];
    projects: ProjectItem[];
    skills: SkillGroup[];
    education: EducationItem[];
    languagesTitle: string;
    languages: LanguageSkill[];
    contact: {
        lead: string;
        links: ContactLink[];
        form: {
            title: string;
            name: string;
            namePlaceholder: string;
            email: string;
            emailPlaceholder: string;
            message: string;
            messagePlaceholder: string;
            submit: string;
            sending: string;
            success: string;
            error: string;
            /** Affiché à la place du formulaire quand aucune clé Web3Forms n'est configurée. */
            disabled: string;
        };
    };
    footer: {
        builtWith: string;
        rights: string;
        backToTop: string;
    };
}
