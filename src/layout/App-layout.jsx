import Header from '../components/Homepage/Header';
import About from '../components/Homepage/About';
import Skills from '../components/Homepage/Skills';
import Work from '../components/Homepage/Work';
import Services from '../components/Homepage/Services';
import Testimonials from '../components/Homepage/Testimonials';
import Notes from '../components/Homepage/Notes';
import Contact from '../components/Homepage/Contact';

/**
 * The whole portfolio is one scrolling page. The navbar anchor-links
 * between these sections rather than navigating to separate routes.
 * Testimonials and Notes render nothing (return null) until their data
 * files have content — see src/data/posts.js and Testimonials.jsx.
 */
export default function HomePage() {
    return (
        <>
            <Header />
            <About />
            <Skills />
            <Work />
            <Services />
            <Testimonials />
            <Notes />
            <Contact />
        </>
    );
}
