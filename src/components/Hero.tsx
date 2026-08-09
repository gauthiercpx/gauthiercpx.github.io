import {useLanguage} from '../hooks/useLanguage';
import {DownloadIcon, MailIcon} from './Icons';
import Reveal from './Reveal';

/** Fichier servi depuis `public/` — chemin absolu, valable aussi sur un domaine personnalisé. */
const RESUME_PATH = '/Gauthier_Coppeaux_CV.pdf';

export default function Hero() {
    const {t} = useLanguage();

    return (
        <div className="hero" id="top">
            <div className="shell">
                <Reveal>
                    <p className="hero__eyebrow">
                        <span className="hero__dot" aria-hidden="true" />
                        {t.hero.eyebrow}
                    </p>
                </Reveal>

                <Reveal delay={80}>
                    <h1 className="hero__name">{t.hero.name}</h1>
                </Reveal>

                <Reveal delay={140}>
                    <p className="hero__role">{t.hero.role}</p>
                </Reveal>

                <Reveal delay={200}>
                    <p className="hero__objective">{t.hero.objective}</p>
                </Reveal>

                <Reveal delay={260}>
                    <p className="hero__intro">{t.hero.intro}</p>
                </Reveal>

                <Reveal delay={320}>
                    <div className="hero__actions">
                        <a href="#contact" className="button button--primary">
                            <MailIcon />
                            {t.hero.ctaContact}
                        </a>
                        <a
                            href={RESUME_PATH}
                            className="button button--ghost"
                            download
                        >
                            <DownloadIcon />
                            {t.hero.ctaResume}
                            <span className="button__meta">{t.hero.ctaResumeFile}</span>
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={380}>
                    <dl className="hero__facts">
                        {t.hero.facts.map((fact) => (
                            <div key={fact.label} className="hero__fact">
                                <dt>{fact.label}</dt>
                                <dd>{fact.value}</dd>
                            </div>
                        ))}
                    </dl>
                </Reveal>
            </div>
        </div>
    );
}
