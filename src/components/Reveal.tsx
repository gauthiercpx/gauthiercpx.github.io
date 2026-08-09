import type {CSSProperties, ReactNode} from 'react';
import {useReveal} from '../hooks/useReveal';

interface RevealProps {
    children: ReactNode;
    /** Décalage en millisecondes, pour échelonner l'apparition d'une liste. */
    delay?: number;
    className?: string;
    style?: CSSProperties;
}

/** Enveloppe un bloc pour le faire apparaître en fondu quand il entre à l'écran. */
export default function Reveal({children, delay = 0, className, style}: RevealProps) {
    const ref = useReveal<HTMLDivElement>();

    return (
        <div
            ref={ref}
            className={className ? `reveal ${className}` : 'reveal'}
            style={{'--reveal-delay': `${delay}ms`, ...style} as CSSProperties}
        >
            {children}
        </div>
    );
}
