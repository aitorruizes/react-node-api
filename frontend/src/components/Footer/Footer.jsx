
const Footer = ({ developerName }) => {
    return (
        <footer className="footer">
            <p className="footer-content">Desenvolvido por <span className="footer-content-span">{ developerName }</span>.</p>
        </footer>
    );
}

export default Footer;