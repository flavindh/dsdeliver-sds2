"use strict";
exports.__esModule = true;
require("./styles.css");
var main_svg_1 = require("./main.svg");
var Footer_1 = require("../Footer");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "home-container" },
            React.createElement("div", { className: "home-content" },
                React.createElement("div", { className: "home-actions" },
                    React.createElement("h1", { className: "home-title" },
                        " Fa\u00E7a seu pedido ",
                        React.createElement("br", null),
                        " que entregramos ",
                        React.createElement("br", null),
                        " para voc\u00EA !"),
                    React.createElement("h3", { className: "home-subtitle" },
                        " Escolha o seu pedido e em poucos minutos ",
                        React.createElement("br", null),
                        " levaremos na sua porta"),
                    React.createElement("a", { className: "home-btn-order", href: "orders" }, " FAZER PEDIDO ")),
                React.createElement("div", { className: "home-image" },
                    React.createElement(main_svg_1.ReactComponent, null)))),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Home;
