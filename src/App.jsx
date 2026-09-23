import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routes/AppRoute.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <AppRoute />
        </BrowserRouter>
    );
}
