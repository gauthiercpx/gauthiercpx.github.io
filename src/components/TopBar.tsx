import {useEffect, useState} from 'react';
import {SECTION_IDS} from '../content/types';
import {useLanguage} from '../hooks/useLanguage';
import {useTheme} from '../hooks/useTheme';
import {useActiveSection} from '../hooks/useReveal';
import {MoonIcon, SunIcon} from './Icons';

export default function TopBar() {
    const {t, locale, toggleLocale} = useLanguage();
    const {theme, toggleTheme} = useTheme();
    const active = useActiveSection(SECTION_IDS);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className="topbar" data-scrolled={scrolled}>
            <div className="shell topbar__inner">
                <a href="#top" className="topbar__mark">
                    <span>Gauthier Coppeaux</span>
                    <span aria-hidden="true">.</span>
                </a>

                <nav className="topbar__nav" aria-label={t.a11y.mainNavigation}>
                    {SECTION_IDS.map((id) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="topbar__link"
                            aria-current={active === id ? 'true' : undefined}
                        >
                            {t.nav[id]}
                        </a>
                    ))}
                </nav>

                <div className="topbar__actions">
                    <button
                        type="button"
                        className="icon-button"
                        onClick={toggleLocale}
                        aria-label={t.a11y.toggleLanguage}
                        title={t.a11y.toggleLanguage}
                    >
                        {locale === 'fr' ? 'EN' : 'FR'}
                    </button>
                    <button
                        type="button"
                        className="icon-button"
                        onClick={toggleTheme}
                        aria-label={t.a11y.toggleTheme}
                        title={t.a11y.toggleTheme}
                    >
                        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                    </button>
                </div>
            </div>
        </header>
    );
}
