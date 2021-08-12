'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeanMachineCoffeeCupSizes = function (_React$Component) {
    _inherits(BeanMachineCoffeeCupSizes, _React$Component);

    function BeanMachineCoffeeCupSizes(props) {
        _classCallCheck(this, BeanMachineCoffeeCupSizes);

        return _possibleConstructorReturn(this, (BeanMachineCoffeeCupSizes.__proto__ || Object.getPrototypeOf(BeanMachineCoffeeCupSizes)).call(this, props));
    }

    _createClass(BeanMachineCoffeeCupSizes, [{
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
                            "THERE'S A SIZE JUST RIGHT FOR YOU"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "px-5 text-bold" },
                        React.createElement(
                            "p",
                            null,
                            "Bean Machine's drinks are served in the following cup sizes:"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Medio: 24 oz."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Enorme: 32 oz."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Colossale: 80 oz."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Look, here is the reality: our patience is hanging by a very thin thread. We provide you with a faux-bohemian environment in which to escape the emptiness of your miserable lives and we tolerate you nursing a ghetto latte all day, taking up seats while fleecing the free WiFi. All we request in return is that you order your drinks using the Italian-Columbian terminology above. Is that too much to ask?"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "We created this ridiculous lingo to give you morons the illusion of a cosmopolitan lifestyle but you insist on throwing it back in our face. We don't care if you think that it makes no sense. If you're too stupid to grasp the fact that 'Medio' means 'Small', then drink your coffee at Burger Shot. Please note that any attempts to order 'small, 'medium' or 'large' will be met with a derisory snicker and a booger floater. You've been warned."
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
            );
        }
    }]);

    return BeanMachineCoffeeCupSizes;
}(React.Component);