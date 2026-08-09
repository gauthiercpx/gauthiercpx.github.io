import {useContext} from 'react';
import {LanguageContext, type LanguageContextValue} from '../context/LanguageContext';

export function useLanguage(): LanguageContextValue {
    const value = useContext(LanguageContext);
    if (!value) {
        throw new Error('useLanguage doit être utilisé à l’intérieur de <LanguageProvider>');
    }
    return value;
}
