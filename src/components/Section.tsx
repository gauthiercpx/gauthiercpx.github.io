import type {ReactNode} from 'react';
import type {SectionHeading, SectionId} from '../content/types';
import Reveal from './Reveal';

interface SectionProps {
    id: SectionId;
    heading: SectionHeading;
    children: ReactNode;
    className?: string;
}

/** Section de page avec son en-tête éditorial numéroté. */
export default function Section({id, heading, children, className}: SectionProps) {
    return (
        <section id={id} className={className ? `section ${className}` : 'section'}>
            <div className="shell">
                <Reveal>
                    <div className="section__head">
                        <span className="section__index">{heading.index}</span>
                        <h2 className="section__title">{heading.title}</h2>
                        {heading.lead && <p className="section__lead">{heading.lead}</p>}
                    </div>
                </Reveal>
                {children}
            </div>
        </section>
    );
}
