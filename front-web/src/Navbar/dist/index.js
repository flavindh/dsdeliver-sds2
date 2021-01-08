"use strict";
exports.__esModule = true;
require("./styles.css");
var logo_svg_1 = require("./logo.svg");
function Navbar() {
    return (React.createElement("nav", { className: "main-navbar" },
        React.createElement(logo_svg_1.ReactComponent, null),
        React.createElement("a", { href: "home", className: "logo-text" }, "DS Delivery")));
}
exports["default"] = Navbar;
