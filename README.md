# gauthiercpx.github.io

Site vitrine et CV en ligne de **Gauthier Coppeaux** — bilingue FR/EN, thème sombre/clair,
formulaire de contact.

**En ligne :** https://gauthiercpx.github.io

## Stack

Vite 7 · React 19 · TypeScript strict · CSS natif avec jetons de design.
Aucune dépendance runtime en dehors de `react` et `react-dom` — pas de framework CSS,
pas de bibliothèque d'animation, polices auto-hébergées. Le bundle fait ~69 Ko gzip.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:5173
```

| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Vérification TypeScript puis build de production dans `dist/` |
| `npm run preview` | Sert le contenu de `dist/` localement |
| `npm run lint` | ESLint |

## Modifier le contenu

Tout le texte du site vit dans **`src/content/`** — aucun texte n'est écrit en dur dans les
composants :

- `types.ts` — la forme du contenu (`SiteContent`)
- `fr.ts` — version française
- `en.ts` — version anglaise

`fr.ts` et `en.ts` implémentent tous les deux `SiteContent`. **Si une clé manque d'un côté,
`npm run build` échoue** : les deux langues ne peuvent pas se désynchroniser silencieusement.

Pour remplacer le CV téléchargeable, écraser `public/Gauthier_Coppeaux_CV.pdf`
(et mettre à jour `hero.ctaResumeFile` dans les deux fichiers de contenu si la taille change).

## Design

Les couleurs, rayons, ombres et polices sont des variables CSS dans **`src/styles/tokens.css`**.
Le thème clair ne redéfinit que les couleurs, sous `[data-theme="light"]`. Aucune valeur de
couleur ne doit être écrite en dur ailleurs.

- `src/styles/global.css` — mise en page et composants
- `src/styles/print.css` — feuille d'impression (le site sort en CV propre via Ctrl+P)
- `src/styles/fonts.css` — déclarations `@font-face` des polices servies depuis `public/fonts/`

## Formulaire de contact

Le formulaire passe par [Web3Forms](https://web3forms.com) : pas de backend, les messages
arrivent directement par email.

1. Récupérer une clé d'accès gratuite sur https://web3forms.com (elle arrive par email).
2. Dans le repo : **Settings → Secrets and variables → Actions → New repository secret**
   - Nom : `VITE_WEB3FORMS_KEY`
   - Valeur : la clé reçue
3. Relancer le workflow *Deploy to GitHub Pages*.

En local, créer un fichier `.env.local` (ignoré par git) :

```
VITE_WEB3FORMS_KEY=votre-cle
```

Sans clé, le formulaire s'affiche désactivé avec un message renvoyant vers les coordonnées
directes — le site reste entièrement fonctionnel.

> La clé Web3Forms est publique par conception : elle n'autorise que l'envoi vers la boîte
> mail associée. Elle apparaît dans le bundle, c'est normal.

## Déploiement

`.github/workflows/deploy.yml` construit et publie le site à chaque push sur `main` ou `develop`.

**Activation, à faire une fois :** *Settings → Pages → Build and deployment → Source :*
**GitHub Actions**.

## Domaine personnalisé

Quand le domaine sera prêt :

1. Créer un fichier `public/CNAME` contenant uniquement le domaine (ex. `gauthier-coppeaux.fr`).
   Vite le recopie tel quel dans `dist/`, GitHub Pages le lit à chaque déploiement.
2. Chez le registrar, pour un domaine racine, 4 enregistrements `A` :
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   (et un `AAAA` vers `2606:50c0:8000::153` … `8003::153` si l'IPv6 est proposée).
   Pour un sous-domaine `www`, un seul `CNAME` vers `gauthiercpx.github.io`.
3. *Settings → Pages → Custom domain* : renseigner le domaine et cocher **Enforce HTTPS**.
4. Mettre à jour les URLs absolues dans `index.html` (`og:url`, `canonical`, `og:image`).

Aucune autre modification n'est nécessaire : `base: '/'` dans `vite.config.ts` fonctionne
aussi bien sur `gauthiercpx.github.io` que sur un domaine propre.

> Un fichier `CNAME` pointant vers `stakr.me` traînait dans ce repo. Il forçait GitHub Pages à
> servir ce site sur le domaine de l'application Stakr (hébergée sur Azure) et rendait
> `gauthiercpx.github.io` inaccessible : il a été supprimé.

## Accessibilité

Lien d'évitement, `lang` mis à jour au changement de langue, navigation au clavier avec
anneaux de focus visibles, `aria-live` sur le retour du formulaire, et respect de
`prefers-reduced-motion` (toutes les animations sont neutralisées).
