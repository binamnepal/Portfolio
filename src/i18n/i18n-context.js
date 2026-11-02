import { createContext } from 'react';

/*
 * Kept separate from the provider component so the provider file only
 * exports a component (required by eslint-plugin-react-refresh / Fast Refresh).
 */
export const I18nContext = createContext(null);
