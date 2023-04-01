'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeanMachineCoffeeSpecials = function (_React$Component) {
    _inherits(BeanMachineCoffeeSpecials, _React$Component);

    function BeanMachineCoffeeSpecials(props) {
        _classCallCheck(this, BeanMachineCoffeeSpecials);

        return _possibleConstructorReturn(this, (BeanMachineCoffeeSpecials.__proto__ || Object.getPrototypeOf(BeanMachineCoffeeSpecials)).call(this, props));
    }

    _createClass(BeanMachineCoffeeSpecials, [{
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
                            "NOT FOR THE FAINT-HEARTED"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "px-5 text-bold" },
                        React.createElement(
                            "p",
                            null,
                            "Bean Machine is proud to announce some heart-thumping additions to our world-famous mono-menu:"
                        ),
                        React.createElement(
                            "h1",
                            null,
                            "The Bratte"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "New to the Kids Board, the Bratte (a double-shot latte with ten pumps of caramel) packs a punch that will send even the most lethargic child running off to school. By the time that they crash, you will be miles away on your third gin and tonic."
                        ),
                        React.createElement(
                            "h1",
                            null,
                            "The Gunkaccino"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Start your day with dessert) Imagine the calorific equivalent of 5 cheeseburgers in a plastic cupl Bean Machine's new Gunkaccino contains the four major food groups - caffeine, refined sugar, trans fat and high-fructose corn syrup - and is available in a range of healthy flavors such as tiramisu, cheesecake, brownie, fudge and sticky toffee pudding. Do you like a buzz but hate the bitter taste of coffee? Try a Triple Extra-Hot Upside-Down Double-Blended Whipped Cream Tiramisu Colossale with wings today! Only 2000 calories! Perfect with one of our low-fat pastries or when on your period."
                        ),
                        React.createElement(
                            "h1",
                            null,
                            "The Speedball"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Guaranteed to have you rocking in a darkened room by 10 aml A triple shot of weapons-grade coffee, guarana, bat guano and mate that will hit your central nervous system like a steam train. You'll be sweating like a lonely gym teacher on the first day of school. Knock a couple of these back and you'll feel like you've been wired up to the national power grid."
                        ),
                        React.createElement(
                            "h1",
                            null,
                            "High Noon"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "It's 11am, your blood-sugar levels have crashed and you've lost the will to live. You've spent the last 20 minutes staring at the wall and your ears are ringing like you just stumbled out of a punk rock club. One visit to Bean Machine and we will have you back on track, for a couple of hours at least. The 'High Noon' special combines a pint of drip coffee, half a pint of carbonated water, a taurine depth charge and a choice of 134 different fruit syrups. You'll feel like you've crossed a time-zone by mid afternoon! Not responsible for anal leakage."
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

    return BeanMachineCoffeeSpecials;
}(React.Component);