import {useLanguage} from './hooks/useLanguage';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    const {t} = useLanguage();

    return (
        <>
            <a href="#main" className="skip-link">
                {t.a11y.skipToContent}
            </a>

            <TopBar />

            <main id="main">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Contact />
            </main>

            <Footer />
        </>
    );
}
