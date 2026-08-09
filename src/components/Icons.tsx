/**
 * Icônes inline. Elles héritent de la couleur du texte (`stroke="currentColor"`)
 * et sont décoratives : le libellé est toujours porté par le texte à côté.
 */

type IconProps = {className?: string};

const base = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: false,
};

export function MailIcon({className}: IconProps) {
    return (
        <svg {...base} className={className}>
            <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
            <path d="m3 7 8.2 5.6a1.5 1.5 0 0 0 1.6 0L21 7" />
        </svg>
    );
}

export function PhoneIcon({className}: IconProps) {
    return (
        <svg {...base} className={className}>
            <path d="M6.5 3h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3Z" />
        </svg>
    );
}

export function LinkedInIcon({className}: IconProps) {
    return (
        <svg {...base} className={className}>
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M7.5 10.5V17" />
            <path d="M7.5 7.2v.1" />
            <path d="M11.5 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" />
            <path d="M11.5 10.5V17" />
        </svg>
    );
}

export function GitHubIcon({className}: IconProps) {
    return (
        <svg {...base} className={className}>
            <path d="M9 19c-4.3 1.4-4.3-2.2-6-2.6m12 4.6v-3.5c0-1 .1-1.4-.5-2 2.3-.3 4.5-1.2 4.5-5a3.9 3.9 0 0 0-1.1-2.7 3.6 3.6 0 0 0-.1-2.7s-.9-.3-3 1.1a10.3 10.3 0 0 0-5.5 0C7.2 4.7 6.3 5 6.3 5a3.6 3.6 0 0 0-.1 2.7A3.9 3.9 0 0 0 5 10.4c0 3.8 2.2 4.7 4.5 5-.6.6-.6 1.2-.5 2V21" />
        </svg>
    );
}

export function DownloadIcon({className}: IconProps) {
    return (
        <svg {...base} className={className}>
            <path d="M12 3v12" />
            <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
            <path d="M4 20h16" />
        </svg>
    );
}

export function ArrowUpRightIcon({className}: IconProps) {
    return (
        <svg {...base} className={className}>
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
        </svg>
    );
}

export function ArrowUpIcon({className}: IconProps) {
    return (
        <svg {...base} className={className}>
            <path d="M12 20V5" />
            <path d="m6 11 6-6 6 6" />
        </svg>
    );
}

export function SunIcon({className}: IconProps) {
    return (
        <svg {...base} className={className}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
        </svg>
    );
}

export function MoonIcon({className}: IconProps) {
    return (
        <svg {...base} className={className}>
            <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
        </svg>
    );
}

export const CONTACT_ICONS = {
    mail: MailIcon,
    phone: PhoneIcon,
    linkedin: LinkedInIcon,
    github: GitHubIcon,
} as const;
