'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeanMachineCoffeeTenReasons = function (_React$Component) {
    _inherits(BeanMachineCoffeeTenReasons, _React$Component);

    function BeanMachineCoffeeTenReasons(props) {
        _classCallCheck(this, BeanMachineCoffeeTenReasons);

        return _possibleConstructorReturn(this, (BeanMachineCoffeeTenReasons.__proto__ || Object.getPrototypeOf(BeanMachineCoffeeTenReasons)).call(this, props));
    }

    _createClass(BeanMachineCoffeeTenReasons, [{
        key: "getAsset",
        value: function getAsset(rootPath) {
            return "./../" + rootPath;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "row bmc-bg-white w-100 mx-0" },
                    React.createElement(
                        "div",
                        { className: "container px-5 py-2 bmc-bg-dark bmc-border-top-pink" },
                        React.createElement(
                            "h3",
                            { className: "bmc-text-white bmc-font" },
                            "STAND UP FOR WHAT YOU BELJIVE IN"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "px-5 text-bold" },
                        React.createElement(
                            "p",
                            null,
                            "A few independently-owned coffee houses have proven to be surprisingly stubborn in the face of bribes and intimidation and threaten to undermine the American dream of a homogeneous society. Remember the dark old days of the 1990's when coffeehouses were the beating heart of the community, an expression of unique local identity? Sheer anarchy! Don't let these dens of iniquity make a mockery of our plans for world domination. Here are ten reasons to boycott your local coffeehouses:"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "1) They do not look the same."
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "2) They do not have a condiment bar."
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "3) They hate your religion and they think your girlfriend is a dog"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "4) They show live sports - so uncouth."
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "5) They are frequented by blue collar workers who fornicate like animals in pens and smell."
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "6) They encourage social interaction - the last thing that you want when you're anxious and paranoid."
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "7) They do not provide corrugated insulating sleeves in a dirty-brown, eco-friendly color."
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "8) They offer free re-fills, insulting your status as an upscale urban consumer. Think how great you feel paying $4 for 4 cents worth of bean juice?"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "10) They do not use foreign names for their collees."
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row d-flex justify-content-center my-5" },
                        React.createElement(
                            "div",
                            { className: "bmc-bg-dark bmc-text-white w-75", style: { height: "8rem" } },
                            React.createElement(
                                "p",
                                null,
                                "Ad HERE"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return BeanMachineCoffeeTenReasons;
}(React.Component);