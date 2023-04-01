'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoEroticarContact = function (_React$Component) {
    _inherits(AutoEroticarContact, _React$Component);

    function AutoEroticarContact(props) {
        _classCallCheck(this, AutoEroticarContact);

        return _possibleConstructorReturn(this, (AutoEroticarContact.__proto__ || Object.getPrototypeOf(AutoEroticarContact)).call(this, props));
    }

    _createClass(AutoEroticarContact, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container pt-5" },
                React.createElement("img", { className: "img-fluid ae-border-red",
                    src: "./../img/autoeroticar/autoeroticar_outside.png" }),
                React.createElement(
                    "div",
                    { className: "row my-3" },
                    React.createElement(
                        "h3",
                        { className: "text-red-light" },
                        "CONTACT US"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "At AutoEroticar, it's our mission to make all our customers feel excited and satisfied - we want to give you the shittiest ride of your life. If you have any questions or comments for our team, please contact:",
                        React.createElement(
                            "a",
                            { className: "autoeroticar-link", href: "#" },
                            "customerservicing@autoeroticar.com"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "h3",
                        { className: "text-red-light" },
                        "YOU CAN FIND US:"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "On the corner of Keneckie Ave and Lockowski Ave, ",
                        React.createElement("br", null),
                        "Alderney City, ",
                        React.createElement("br", null),
                        "Liberty City"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row container d-flex justify-content-center my-5 w-100 mx-0" },
                    React.createElement(
                        "div",
                        { className: "w-75", style: { background: "gray", height: "8rem" } },
                        React.createElement(
                            "p",
                            null,
                            "Ad HERE"
                        )
                    )
                )
            );
        }
    }]);

    return AutoEroticarContact;
}(React.Component);