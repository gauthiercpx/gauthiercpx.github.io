import {useCallback, useEffect, useMemo, useState, type ReactNode} from 'react';
import type {Locale} from '../content/types';
import {content, isLocale} from '../content';
import {LanguageContext} from './LanguageContext';

const STORAGE_KEY = 'gc-locale';

/** Choix persisté, sinon langue du navigateur, sinon français. */
function readInitialLocale(): Locale {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (isLocale(stored)) return stored;
    } catch {
        // localStorage indisponible (navigation privée, cookies bloqués) : on ignore.
    }
    return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr';
}

export function LanguageProvider({children}: {children: ReactNode}) {
    const [locale, setLocale] = useState<Locale>(readInitialLocale);

    useEffect(() => {
        const t = content[locale];
        // `lang` correct = lecteurs d'écran et moteurs de recherche interprètent la bonne langue.
        document.documentElement.lang = t.meta.htmlLang;
        document.title = t.meta.title;
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute('content', t.meta.description);

        try {
            localStorage.setItem(STORAGE_KEY, locale);
        } catch {
            // Persistance optionnelle : l'absence de stockage ne doit pas casser la page.
        }
    }, [locale]);

    const toggleLocale = useCallback(() => {
        setLocale((current) => (current === 'fr' ? 'en' : 'fr'));
    }, []);

    const value = useMemo(
        () => ({locale, t: content[locale], setLocale, toggleLocale}),
        [locale, toggleLocale],
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
