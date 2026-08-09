import {useState, type FormEvent} from 'react';
import {useLanguage} from '../hooks/useLanguage';

const ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Clé publique Web3Forms, injectée au build (`VITE_WEB3FORMS_KEY`).
 * Elle est publique par conception : elle n'autorise que l'envoi vers la boîte mail associée.
 */
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
    const {t, locale} = useLanguage();
    const [status, setStatus] = useState<Status>('idle');
    const form = t.contact.form;

    // Sans clé configurée, mieux vaut le dire que d'afficher un formulaire qui échouera.
    if (!ACCESS_KEY) {
        return (
            <div className="form form--disabled">
                <p>{form.disabled}</p>
            </div>
        );
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const element = event.currentTarget;
        setStatus('sending');

        try {
            const response = await fetch(ENDPOINT, {
                method: 'POST',
                headers: {Accept: 'application/json'},
                body: new FormData(element),
            });

            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const result: {success?: boolean} = await response.json();
            if (!result.success) throw new Error('Web3Forms a rejeté la soumission');

            setStatus('success');
            element.reset();
        } catch {
            setStatus('error');
        }
    }

    const sending = status === 'sending';

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3 className="form__title">{form.title}</h3>

            <input type="hidden" name="access_key" value={ACCESS_KEY} />
            <input
                type="hidden"
                name="subject"
                value={`Message depuis gauthiercpx.github.io (${locale.toUpperCase()})`}
            />
            <input type="hidden" name="from_name" value="Site CV — Gauthier Coppeaux" />

            {/* Honeypot : les robots remplissent ce champ, les humains ne le voient pas. */}
            <div className="honeypot" aria-hidden="true">
                <label htmlFor="botcheck">Ne pas remplir</label>
                <input id="botcheck" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="field">
                <label htmlFor="contact-name">{form.name}</label>
                <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={form.namePlaceholder}
                    disabled={sending}
                />
            </div>

            <div className="field">
                <label htmlFor="contact-email">{form.email}</label>
                <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={form.emailPlaceholder}
                    disabled={sending}
                />
            </div>

            <div className="field">
                <label htmlFor="contact-message">{form.message}</label>
                <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    placeholder={form.messagePlaceholder}
                    disabled={sending}
                />
            </div>

            <button type="submit" className="button button--primary form__submit" disabled={sending}>
                {sending ? form.sending : form.submit}
            </button>

            <p role="status" aria-live="polite">
                {status === 'success' && (
                    <span className="form__status form__status--success">{form.success}</span>
                )}
                {status === 'error' && (
                    <span className="form__status form__status--error">{form.error}</span>
                )}
            </p>
        </form>
    );
}
