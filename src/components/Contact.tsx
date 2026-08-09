import {useLanguage} from '../hooks/useLanguage';
import {CONTACT_ICONS} from './Icons';
import ContactForm from './ContactForm';
import Reveal from './Reveal';
import Section from './Section';

export default function Contact() {
    const {t} = useLanguage();

    return (
        <Section id="contact" heading={t.sections.contact}>
            <div className="contact">
                <Reveal>
                    <p className="contact__lead">{t.contact.lead}</p>

                    <ul className="contact__links">
                        {t.contact.links.map((link) => {
                            const Icon = CONTACT_ICONS[link.icon];
                            const external = link.href.startsWith('http');

                            return (
                                <li key={link.href}>
                                    <a
                                        className="contact__link"
                                        href={link.href}
                                        {...(external
                                            ? {target: '_blank', rel: 'noreferrer noopener'}
                                            : {})}
                                    >
                                        <Icon />
                                        <span>
                                            <span className="contact__link-label">{link.label}</span>
                                            <br />
                                            <span className="contact__link-value">{link.value}</span>
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </Reveal>

                <Reveal delay={120}>
                    <ContactForm />
                </Reveal>
            </div>
        </Section>
    );
}
