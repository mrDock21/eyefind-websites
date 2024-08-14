'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EunuxArticleTemplate = function (_React$Component) {
    _inherits(EunuxArticleTemplate, _React$Component);

    function EunuxArticleTemplate(props) {
        _classCallCheck(this, EunuxArticleTemplate);

        return _possibleConstructorReturn(this, (EunuxArticleTemplate.__proto__ || Object.getPrototypeOf(EunuxArticleTemplate)).call(this, props));
    }

    _createClass(EunuxArticleTemplate, [{
        key: "getButtonStyle",
        value: function getButtonStyle(btnIndex) {
            var style = "camel-case enx-header-btn";

            if (this.props.selectedTab === btnIndex) style += " selected";

            return style;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "page-content article-page" },
                React.createElement(
                    "section",
                    { className: "ads-section" },
                    React.createElement("img", { className: "ad-eunux-mascot", src: "./../img/eunux/mascot-eunux-article.png" })
                ),
                React.createElement(
                    "section",
                    null,
                    React.createElement(
                        "header",
                        { className: "article-header" },
                        React.createElement(
                            "button",
                            { onClick: function onClick() {
                                    return _this2.props.onPageSelected(-1);
                                } },
                            React.createElement("img", { className: "w-100", src: "./../img/eunux/header-logo.jpg", alt: "header-logo" })
                        ),
                        React.createElement(
                            "div",
                            { className: "header-buttons" },
                            React.createElement(
                                "button",
                                { className: this.getButtonStyle(0),
                                    onClick: function onClick() {
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
                                "s",
                                React.createElement(
                                    "span",
                                    null,
                                    "/"
                                )
                            ),
                            React.createElement(
                                "button",
                                { className: this.getButtonStyle(1),
                                    onClick: function onClick() {
                                        return _this2.props.onPageSelected(1);
                                    } },
                                React.createElement(
                                    "span",
                                    null,
                                    "H"
                                ),
                                "istory",
                                React.createElement(
                                    "span",
                                    null,
                                    "/"
                                )
                            ),
                            React.createElement(
                                "button",
                                { className: this.getButtonStyle(2),
                                    onClick: function onClick() {
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
                                "ovement",
                                React.createElement(
                                    "span",
                                    null,
                                    "/"
                                )
                            ),
                            React.createElement(
                                "button",
                                { className: this.getButtonStyle(3),
                                    onClick: function onClick() {
                                        return _this2.props.onPageSelected(3);
                                    } },
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
                                "ucumber",
                                React.createElement(
                                    "span",
                                    null,
                                    "/"
                                )
                            ),
                            React.createElement(
                                "button",
                                { className: this.getButtonStyle(4),
                                    onClick: function onClick() {
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
                            )
                        )
                    ),
                    React.createElement(
                        "section",
                        null,
                        React.createElement(
                            "article",
                            null,
                            this.props.children
                        )
                    )
                )
            );
        }
    }]);

    return EunuxArticleTemplate;
}(React.Component);