import {useLanguage} from '../hooks/useLanguage';
import Reveal from './Reveal';
import Section from './Section';

export default function About() {
    const {t} = useLanguage();

    return (
        <Section id="about" heading={t.sections.about}>
            <div className="about">
                <Reveal className="about__prose">
                    {t.about.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </Reveal>

                <div className="about__focus">
                    {t.about.focus.map((item, index) => (
                        <Reveal key={item.title} delay={100 + index * 90}>
                            <article className="focus-card">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </Section>
    );
}
