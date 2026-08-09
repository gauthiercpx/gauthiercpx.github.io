import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './styles/global.css';
import App from './App';
import {LanguageProvider} from './context/LanguageProvider';
import {ThemeProvider} from './context/ThemeProvider';

const container = document.getElementById('root');
if (!container) throw new Error('Élément racine #root introuvable');

createRoot(container).render(
    <StrictMode>
        <ThemeProvider>
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </ThemeProvider>
    </StrictMode>,
);
