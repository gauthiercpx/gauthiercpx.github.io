import {useLanguage} from '../hooks/useLanguage';
import {ArrowUpRightIcon} from './Icons';
import Reveal from './Reveal';
import Section from './Section';

export default function Projects() {
    const {t} = useLanguage();

    return (
        <Section id="projects" heading={t.sections.projects}>
            <div className="projects">
                {t.projects.map((project, index) => (
                    <Reveal key={project.name} delay={index * 120}>
                        <article className="project">
                            <div>
                                <h3 className="project__name">{project.name}</h3>
                                <p className="project__tagline">{project.tagline}</p>

                                {project.links.length > 0 && (
                                    <div className="project__links">
                                        {project.links.map((link) => (
                                            <a
                                                key={link.href}
                                                href={link.href}
                                                className="project__link"
                                                target="_blank"
                                                rel="noreferrer noopener"
                                            >
                                                {link.label}
                                                <ArrowUpRightIcon />
                                            </a>
                                        ))}
                                    </div>
                                )}

                                <ul className="chips project__stack">
                                    {project.stack.map((tech) => (
                                        <li key={tech} className="chip">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <dl className="project__highlights">
                                {project.highlights.map((highlight) => (
                                    <div key={highlight.label} className="project__highlight">
                                        <dt>{highlight.label}</dt>
                                        <dd>{highlight.text}</dd>
                                    </div>
                                ))}
                            </dl>
                        </article>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
