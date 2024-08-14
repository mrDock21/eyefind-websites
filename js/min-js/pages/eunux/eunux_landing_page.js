'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EunuxLandingPage = function (_React$Component) {
    _inherits(EunuxLandingPage, _React$Component);

    function EunuxLandingPage(props) {
        _classCallCheck(this, EunuxLandingPage);

        return _possibleConstructorReturn(this, (EunuxLandingPage.__proto__ || Object.getPrototypeOf(EunuxLandingPage)).call(this, props));
    }

    _createClass(EunuxLandingPage, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "page-content" },
                React.createElement(
                    "section",
                    { className: "lp-header-logo" },
                    React.createElement(
                        "a",
                        null,
                        React.createElement("img", { src: "./../img/eunux/header-logo.jpg", alt: "header-logo" })
                    )
                ),
                React.createElement(
                    "section",
                    { className: "lp-grid bebas-neue-regular" },
                    React.createElement(
                        "button",
                        { className: "camel-case", onClick: function onClick() {
                                return _this2.props.onPageSelected(0);
                            } },
                        React.createElement(
                            "span",
                            null,
                            "A"
                        ),
                        "bout ",
                        React.createElement(
                            "span",
                            null,
                            "U"
                        ),
                        "s"
                    ),
                    React.createElement(
                        "button",
                        { className: "camel-case", onClick: function onClick() {
                                return _this2.props.onPageSelected(1);
                            } },
                        React.createElement(
                            "span",
                            null,
                            "H"
                        ),
                        "istory"
                    ),
                    React.createElement(
                        "button",
                        { className: "camel-case", onClick: function onClick() {
                                return _this2.props.onPageSelected(2);
                            } },
                        React.createElement(
                            "span",
                            null,
                            "O"
                        ),
                        "pen ",
                        React.createElement(
                            "span",
                            null,
                            "S"
                        ),
                        "ource ",
                        React.createElement(
                            "span",
                            null,
                            "M"
                        ),
                        "ovement"
                    ),
                    React.createElement(
                        "button",
                        { className: "camel-case", onClick: function onClick() {
                                return _this2.props.onPageSelected(4);
                            } },
                        React.createElement(
                            "span",
                            null,
                            "Q"
                        ),
                        " and ",
                        React.createElement(
                            "span",
                            null,
                            "A"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "lp-logo" },
                        React.createElement("img", { src: "./../img/eunux/mascot-eunux-background.png" }),
                        React.createElement(
                            "p",
                            { className: "camel-case" },
                            React.createElement(
                                "span",
                                null,
                                "S"
                            ),
                            "ux ",
                            React.createElement(
                                "span",
                                null,
                                "T"
                            ),
                            "he ",
                            React.createElement(
                                "span",
                                null,
                                "S"
                            ),
                            "ea ",
                            React.createElement(
                                "span",
                                null,
                                "C"
                            ),
                            "ucumber"
                        )
                    )
                )
            );
        }
    }]);

    return EunuxLandingPage;
}(React.Component);