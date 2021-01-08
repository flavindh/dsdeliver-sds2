import "./styles.css";
import { ReactComponent as IconInstagram } from "./instagram.svg";
import { ReactComponent as IconLinkedin } from "./linkedin.svg";
import { ReactComponent as IconGit } from "./git.svg";

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido por Flávio Gonçalves durante a 2° ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/fl%C3%A1vio-gon%C3%A7alves-606235188/" target="_new"><IconLinkedin /></a>
                <a href="https://www.instagram.com/flavingf/" target="_new"><IconInstagram /></a>
            </div>
        </footer>
    )
}

export default Footer;