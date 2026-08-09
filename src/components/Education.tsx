import {useLanguage} from '../hooks/useLanguage';
import Reveal from './Reveal';
import Section from './Section';

export default function Education() {
    const {t} = useLanguage();

    return (
        <Section id="education" heading={t.sections.education} className="education">
            <div className="timeline">
                {t.education.map((item, index) => (
                    <Reveal key={item.degree} delay={index * 90}>
                        <article className="timeline__item">
                            <div className="timeline__header">
                                <div>
                                    <h3 className="education__degree">{item.degree}</h3>
                                    <p className="education__school">{item.school}</p>
                                </div>
                                <p className="timeline__period">{item.period}</p>
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
