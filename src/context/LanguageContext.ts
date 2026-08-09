import {createContext} from 'react';
import type {Locale, SiteContent} from '../content/types';

export interface LanguageContextValue {
    locale: Locale;
    /** Contenu du site dans la langue active. */
    t: SiteContent;
    setLocale: (locale: Locale) => void;
    toggleLocale: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
