"use strict";
exports.__esModule = true;
require("./styles.css");
var instagram_svg_1 = require("./instagram.svg");
var linkedin_svg_1 = require("./linkedin.svg");
function Footer() {
    return (React.createElement("footer", { className: "main-footer" },
        "App desenvolvido por Fl\u00E1vio Gon\u00E7alves durante a 2\u00B0 ed. do evento Semana DevSuperior",
        React.createElement("div", { className: "footer-icons" },
            React.createElement("a", { href: "https://www.linkedin.com/in/fl%C3%A1vio-gon%C3%A7alves-606235188/", target: "_new" },
                React.createElement(linkedin_svg_1.ReactComponent, null)),
            React.createElement("a", { href: "https://www.instagram.com/flavingf/", target: "_new" },
                React.createElement(instagram_svg_1.ReactComponent, null)))));
}
exports["default"] = Footer;
