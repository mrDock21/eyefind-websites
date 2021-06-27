'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PendantEmail = function (_React$Component) {
    _inherits(PendantEmail, _React$Component);

    function PendantEmail() {
        _classCallCheck(this, PendantEmail);

        return _possibleConstructorReturn(this, (PendantEmail.__proto__ || Object.getPrototypeOf(PendantEmail)).apply(this, arguments));
    }

    _createClass(PendantEmail, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "split email-item" },
                React.createElement(
                    "div",
                    { className: "email-status-icon" },
                    React.createElement("img", { src: "img/yellow-circle.png",
                        alt: "Status icon",
                        className: "w-50 h-50" })
                ),
                React.createElement(
                    "div",
                    { className: "email-sender p-2" },
                    React.createElement(
                        "p",
                        { className: "mb-0",
                            onClick: function onClick() {
                                return _this2.props.onClick();
                            } },
                        this.props.email.sender
                    )
                ),
                React.createElement(
                    "div",
                    { className: "email-subject p-2" },
                    React.createElement(
                        "p",
                        { className: "mb-0" },
                        this.props.email.subject
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

    return PendantEmail;
}(React.Component);