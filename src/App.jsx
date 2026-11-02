import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routes/AppRoute.jsx';
import I18nProvider from './i18n/I18nProvider.jsx';

export default function App() {
    return (
        <I18nProvider>
            <BrowserRouter>
                <AppRoute />
            </BrowserRouter>
        </I18nProvider>
    );
}
