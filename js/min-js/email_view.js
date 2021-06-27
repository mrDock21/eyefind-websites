'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailView = function (_React$Component) {
    _inherits(EmailView, _React$Component);

    function EmailView() {
        _classCallCheck(this, EmailView);

        return _possibleConstructorReturn(this, (EmailView.__proto__ || Object.getPrototypeOf(EmailView)).apply(this, arguments));
    }

    _createClass(EmailView, [{
        key: "render",
        value: function render() {
            return (
                //  Email view
                React.createElement(
                    "section",
                    { className: "split mx-5 d-flex align-items-start",
                        id: "email-view" },
                    React.createElement(
                        "div",
                        { className: "m-2 text-bold" },
                        React.createElement(FormatText, { text: this.props.text, delimiter: '\n' })
                    ),
                    React.createElement(
                        "div",
                        { className: "px-2" },
                        React.createElement(
                            "div",
                            { className: "d-flex align-items-end" },
                            React.createElement(
                                "p",
                                { className: "m-0 w-100 text-center" },
                                "Respond"
                            )
                        ),
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "button",
                                { className: "btn w-100 h-100" },
                                "Respond"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "d-flex align-items-end" },
                            React.createElement(
                                "p",
                                { className: "m-0 w-100 text-center" },
                                "Delete"
                            )
                        ),
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "button",
                                { className: "btn w-100 h-100" },
                                "Delete"
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

    return EmailView;
}(React.Component);