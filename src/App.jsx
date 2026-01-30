import AppRoute from './routes/AppRoute.jsx'
import {Routes} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
export default function App() {
    return (
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
    );
}
