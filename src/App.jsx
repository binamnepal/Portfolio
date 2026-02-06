import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './utils/store.js';  
import AppRoute from './routes/AppRoute.jsx';

export default function App() {
    return (
        
        <Provider store={store}> 
            <BrowserRouter>
                <AppRoute />
            </BrowserRouter>
        </Provider>
    );
}