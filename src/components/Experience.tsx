import {useLanguage} from '../hooks/useLanguage';
import Reveal from './Reveal';
import Section from './Section';

export default function Experience() {
    const {t} = useLanguage();

    return (
        <Section id="experience" heading={t.sections.experience}>
            <div className="timeline">
                {t.experience.map((item, index) => (
                    <Reveal key={`${item.company}-${item.role}`} delay={index * 100}>
                        <article className="timeline__item">
                            <div className="timeline__header">
                                <div>
                                    <h3 className="timeline__role">{item.role}</h3>
                                    <p className="timeline__company">{item.company}</p>
                                </div>
                                <p className="timeline__location">{item.location}</p>
                            </div>

                            <ul className="timeline__periods">
                                {item.periods.map((period) => (
                                    <li key={period} className="timeline__period">
                                        {period}
                                    </li>
                                ))}
                            </ul>

                            <p className="timeline__summary">{item.summary}</p>

                            <ul className="timeline__bullets">
                                {item.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>

                            <ul className="chips timeline__tags">
                                {item.tags.map((tag) => (
                                    <li key={tag} className="chip">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
