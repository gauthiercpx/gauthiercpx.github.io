import {useEffect, useRef, useState} from 'react';

/**
 * Ajoute la classe `is-visible` quand l'élément entre dans le viewport.
 * L'observation s'arrête après le premier déclenchement : l'animation ne se rejoue pas au scroll.
 */
export function useReveal<T extends HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        // Sans IntersectionObserver, on affiche immédiatement plutôt que de laisser
        // un contenu définitivement invisible.
        if (typeof IntersectionObserver === 'undefined') {
            node.classList.add('is-visible');
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                node.classList.add('is-visible');
                observer.disconnect();
            },
            {threshold: 0.12, rootMargin: '0px 0px -8% 0px'},
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return ref;
}

/**
 * Renvoie l'identifiant de la section actuellement au centre du viewport,
 * pour surligner le lien de navigation correspondant.
 */
export function useActiveSection(ids: readonly string[]): string | null {
    const [active, setActive] = useState<string | null>(null);

    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visible) setActive(visible.target.id);
            },
            // Bande étroite au centre de l'écran : une seule section est « active » à la fois.
            {rootMargin: '-45% 0px -45% 0px', threshold: 0},
        );

        for (const id of ids) {
            const node = document.getElementById(id);
            if (node) observer.observe(node);
        }

        return () => observer.disconnect();
    }, [ids]);

    return active;
}
