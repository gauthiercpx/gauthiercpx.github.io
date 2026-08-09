import type {Locale, SiteContent} from './types';
import {fr} from './fr';
import {en} from './en';

export const content: Record<Locale, SiteContent> = {fr, en};

export const LOCALES: readonly Locale[] = ['fr', 'en'] as const;

export function isLocale(value: unknown): value is Locale {
    return value === 'fr' || value === 'en';
}
