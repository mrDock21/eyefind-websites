'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailHeader = function (_React$Component) {
    _inherits(EmailHeader, _React$Component);

    function EmailHeader() {
        _classCallCheck(this, EmailHeader);

        return _possibleConstructorReturn(this, (EmailHeader.__proto__ || Object.getPrototypeOf(EmailHeader)).apply(this, arguments));
    }

    _createClass(EmailHeader, [{
        key: "render",
        value: function render() {
            return (
                // Email header
                React.createElement(
                    "nav",
                    { className: "navbar bg-primary split px-2" },
                    React.createElement(
                        "a",
                        { href: "#",
                            className: "navbar-brand w-auto" },
                        React.createElement("img", { height: "60",
                            alt: "Eyefind logo",
                            src: "https://vignette.wikia.nocookie.net/gtawiki/images/b/bc/Eyefind.info-GTA4-logo.PNG/revision/latest?cb=20100527053722" })
                    ),
                    React.createElement(
                        "div",
                        { className: "text-large" },
                        React.createElement(
                            "div",
                            { className: "split" },
                            React.createElement(
                                "p",
                                { className: "w-25 text-bold text-dark-blue" },
                                "FROM:"
                            ),
                            React.createElement(
                                "p",
                                { className: "-w-auto text-white" },
                                this.props.sender ? this.props.sender : "Nobody"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "split" },
                            React.createElement(
                                "p",
                                { className: "w-25 text-bold text-dark-blue" },
                                "SUBJECT:"
                            ),
                            React.createElement(
                                "p",
                                { className: "w-auto text-white" },
                                this.props.subject ? this.props.subject : "None"
                            )
                        )
                    )
                )
            );
        }
    }], [{
        key: "getDerivedStateFromError",
        value: function getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            console.log(error);
        }
    }]);

    return EmailHeader;
}(React.Component);