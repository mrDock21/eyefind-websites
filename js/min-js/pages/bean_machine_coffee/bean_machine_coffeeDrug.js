'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeanMachineCoffeeCoffeeDrug = function (_React$Component) {
    _inherits(BeanMachineCoffeeCoffeeDrug, _React$Component);

    function BeanMachineCoffeeCoffeeDrug(props) {
        _classCallCheck(this, BeanMachineCoffeeCoffeeDrug);

        return _possibleConstructorReturn(this, (BeanMachineCoffeeCoffeeDrug.__proto__ || Object.getPrototypeOf(BeanMachineCoffeeCoffeeDrug)).call(this, props));
    }

    _createClass(BeanMachineCoffeeCoffeeDrug, [{
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
                            "A HEALTHY DEPENDENCY FOR YOUR MIND AND BODY"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "px-5 text-bold" },
                        React.createElement(
                            "p",
                            null,
                            "How can something that suppresses hunger, increases levels of dopamine, causes rapid flow of thought and produces rambling, incoherent speech be considered a drug? How can anything grown in Central America be addictive? This is just evil propaganda from the health food industry, a desperate marketing gimmick to sell more fruit smoothies and granola bars and make you shit corn. Drugs are nasty, illegal things that come in little plastic bags. Have you ever seen a guy lying in the gutter injecting cappuccino into his eyeball or a coffee whore blasting java beans through a glass pipe?"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "90% of adults in the USA consume caffeine on a daily basis for a reason: you cannot function without it. Scientists have proven that without coffee, the body just wants to lie around yelling at the TV and inappropriately enjoying reruns of Just the Five of Us."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Ever tried multi-tasking without coffee? It's impossible, especially for men. Some people drink coffee, others shop for shoes, others go barebacking: we all get our kicks in different ways but that does not make them drugs. Isn't caffeine just a natural bean extract? What's the big deal? If coffee had been discovered today. It would no doubt be touted as a ground-breaking herbal brain tonic by the same people who are trying to brainwash you into swapping your double-espresso for a carrot Juice."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Caffeine isn't a drug. It's a survival tool that cuts through fatigue like a Samurai sword and stops you from crashing your car after a night on the cocktails."
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

    return BeanMachineCoffeeCoffeeDrug;
}(React.Component);