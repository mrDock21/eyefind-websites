'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoEroticarAbout = function (_React$Component) {
    _inherits(AutoEroticarAbout, _React$Component);

    function AutoEroticarAbout(props) {
        _classCallCheck(this, AutoEroticarAbout);

        return _possibleConstructorReturn(this, (AutoEroticarAbout.__proto__ || Object.getPrototypeOf(AutoEroticarAbout)).call(this, props));
    }

    _createClass(AutoEroticarAbout, [{
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
                        "ABOUT US"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "AutoEroticar was set up in 2007 to cater to a very special market: people who are smart enough to realize the important connection between sexual drive and the car you drive."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "h3",
                        { className: "text-red-light" },
                        "IF YOU ARE AN AUTOEROTICAR CUSTOMER:"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "You shave with the Excelsior Extreme 9 razor."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "You consume only the most heart-palpitating energy drinks."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "You don't trust anything that wasn't created today for the world of tomorrow because you're always in the driving seat."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Everything you do says 'sleep with me' and you know your car should be no different."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "We know that when your hands on that stick, anything could happen - let's make it happen together."
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

    return AutoEroticarAbout;
}(React.Component);