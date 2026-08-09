import {useCallback, useEffect, useMemo, useState, type ReactNode} from 'react';
import {ThemeContext, type Theme} from './ThemeContext';

const STORAGE_KEY = 'gc-theme';

/** Couleur de la barre d'adresse mobile, alignée sur `--bg` de chaque thème. */
const THEME_COLOR: Record<Theme, string> = {
    dark: '#0b0d10',
    light: '#fbfbf9',
};

/** Choix persisté, sinon préférence système, sinon sombre (le design est pensé sombre d'abord). */
function readInitialTheme(): Theme {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'dark' || stored === 'light') return stored;
    } catch {
        // localStorage indisponible : on retombe sur la préférence système.
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function ThemeProvider({children}: {children: ReactNode}) {
    const [theme, setTheme] = useState<Theme>(readInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute('content', THEME_COLOR[theme]);

        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // Persistance optionnelle.
        }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
    }, []);

    const value = useMemo(() => ({theme, toggleTheme}), [theme, toggleTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
