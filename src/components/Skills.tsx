import type {CSSProperties} from 'react';
import {useLanguage} from '../hooks/useLanguage';
import Reveal from './Reveal';
import Section from './Section';

export default function Skills() {
    const {t} = useLanguage();

    return (
        <Section id="skills" heading={t.sections.skills}>
            <Reveal>
                <div className="skills">
                    {t.skills.map((group) => (
                        <div key={group.title} className="skill-group">
                            <h3>{group.title}</h3>
                            <ul className="chips">
                                {group.items.map((item) => (
                                    <li key={item} className="chip">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Reveal>

            <Reveal delay={120} className="languages">
                <h3 className="languages__title">{t.languagesTitle}</h3>
                <ul className="languages__list">
                    {t.languages.map((language) => (
                        <li key={language.name}>
                            <div className="language__head">
                                <span className="language__name">{language.name}</span>
                                <span className="language__level">{language.level}</span>
                            </div>
                            <div
                                className="language__track"
                                role="img"
                                aria-label={`${language.name} — ${language.level}`}
                            >
                                <div
                                    className="language__fill"
                                    style={{'--level': language.value / 100} as CSSProperties}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </Reveal>
        </Section>
    );
}
