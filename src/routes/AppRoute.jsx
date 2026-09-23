import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import HomePage from '../layout/App-layout';
import ProjectDetail from '../pages/ProjectDetail';
import PostDetail from '../pages/PostDetail';
import NotFound from '../pages/NotFound';

export default function AppRoute() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/work/:slug" element={<ProjectDetail />} />
                <Route path="/notes/:slug" element={<PostDetail />} />
                <Route path="/404" element={<NotFound />} />
                {/* Anything unmatched shows the 404 page rather than silently redirecting home */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
