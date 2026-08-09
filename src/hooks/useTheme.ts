import {useContext} from 'react';
import {ThemeContext, type ThemeContextValue} from '../context/ThemeContext';

export function useTheme(): ThemeContextValue {
    const value = useContext(ThemeContext);
    if (!value) {
        throw new Error('useTheme doit être utilisé à l’intérieur de <ThemeProvider>');
    }
    return value;
}
