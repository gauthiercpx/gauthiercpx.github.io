/// <reference types="vite/client" />

interface ImportMetaEnv {
    /** Clé publique Web3Forms pour le formulaire de contact. Absente = formulaire désactivé. */
    readonly VITE_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
