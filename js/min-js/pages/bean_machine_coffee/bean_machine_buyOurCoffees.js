'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeanMachineCoffeeBuyOurCoffees = function (_React$Component) {
    _inherits(BeanMachineCoffeeBuyOurCoffees, _React$Component);

    function BeanMachineCoffeeBuyOurCoffees(props) {
        _classCallCheck(this, BeanMachineCoffeeBuyOurCoffees);

        return _possibleConstructorReturn(this, (BeanMachineCoffeeBuyOurCoffees.__proto__ || Object.getPrototypeOf(BeanMachineCoffeeBuyOurCoffees)).call(this, props));
    }

    _createClass(BeanMachineCoffeeBuyOurCoffees, [{
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
                            "FRESH BEANS FOR YOUR HOME"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "px-5 text-bold" },
                        React.createElement(
                            "p",
                            null,
                            "We understand that tolerance to caffeine develops quickly and we spend millions of dollars each year on developing genetically-modified coffee blends guaranteed to make even the most depraved caffeine fiend sneeze with his eyes open. Bean Machine buys only the richest coffee beans from the poorest nations in the world. Poor people make great stimulants."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "All our stores offer a wide range of fresh coffee by the bag. Only $20 per pound. We are firmly committed to fair trade and for every pound of coffee purchased, we ensure that no less than 7 cents is returned to the local farmer. Buy 4 pounds of coffee today and we will throw in a free coffee enema and a Colossale Gunkuccino T-Shirt (sizes start in XL)"
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

    return BeanMachineCoffeeBuyOurCoffees;
}(React.Component);