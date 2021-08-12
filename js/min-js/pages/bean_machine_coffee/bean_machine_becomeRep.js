'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeanMachineCoffeeBecomeRep = function (_React$Component) {
    _inherits(BeanMachineCoffeeBecomeRep, _React$Component);

    function BeanMachineCoffeeBecomeRep(props) {
        _classCallCheck(this, BeanMachineCoffeeBecomeRep);

        return _possibleConstructorReturn(this, (BeanMachineCoffeeBecomeRep.__proto__ || Object.getPrototypeOf(BeanMachineCoffeeBecomeRep)).call(this, props));
    }

    _createClass(BeanMachineCoffeeBecomeRep, [{
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
                            "COFFEE ISN'T JUST FOR GROWNUPS"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "px-5 text-bold" },
                        React.createElement(
                            "p",
                            null,
                            "Hi Kids! Looking to make some extra pocket money on the side? The teen market has huge growth potential for Bean Machine and we are recruiting budding entrepreneurs to sell our products across the school yards of America. Become a Bean Machine dealer."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Guys, find out what girls will do for a latte! It's a lot! It's well known that dealers get a lot of attention from the opposite sex. Listen to your parents and take your vitamin C Caffeine! ADD is a small price to pay for something that sends you into math class wound up like a coiled spring."
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

    return BeanMachineCoffeeBecomeRep;
}(React.Component);