import {useLanguage} from '../hooks/useLanguage';
import {ArrowUpIcon} from './Icons';

export default function Footer() {
    const {t} = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="shell footer__inner">
                <p>
                    © {year} {t.footer.rights} — {t.footer.builtWith}
                </p>
                <a href="#top" className="footer__top">
                    {t.footer.backToTop}
                    <ArrowUpIcon />
                </a>
            </div>
        </footer>
    );
}
