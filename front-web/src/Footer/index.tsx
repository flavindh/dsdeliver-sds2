import "./styles.css";
import { ReactComponent as IconInstagram } from "./instagram.svg";
import { ReactComponent as IconLinkedin } from "./linkedin.svg";

function Footer() {
    return (
        <footer className="main-footer">
           Flávio Gonçalves
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/fl%C3%A1vio-gon%C3%A7alves-606235188/" target="_new"><IconLinkedin /></a>
                <a href="https://www.instagram.com/flavingf/" target="_new"><IconInstagram /></a>
            </div>
        </footer>
    )
}

export default Footer;