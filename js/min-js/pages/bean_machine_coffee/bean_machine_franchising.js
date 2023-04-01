'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeanMachineCoffeeFranchising = function (_React$Component) {
    _inherits(BeanMachineCoffeeFranchising, _React$Component);

    function BeanMachineCoffeeFranchising(props) {
        _classCallCheck(this, BeanMachineCoffeeFranchising);

        return _possibleConstructorReturn(this, (BeanMachineCoffeeFranchising.__proto__ || Object.getPrototypeOf(BeanMachineCoffeeFranchising)).call(this, props));
    }

    _createClass(BeanMachineCoffeeFranchising, [{
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
                            "234 LOCATIONS OPENING EVERY DAY!"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "px-5 text-bold" },
                        React.createElement(
                            "p",
                            null,
                            "Nothing can stop the Bean Machine. We have a product people drink at night, during the day... coffee isn't just for morning anymore. We have built our global empire around one simple premise: annihilate the competition. As a Bean Machine Franchisee, you will quickly learn the secrets of sabotaging mom and pop coffee shops, how to plant explosives, and the fine art of puffing out your chest, grabbing your nuts and threatening people."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Welcome to capitalism the Bean Machine way - with market cannibalization and cluster-bombing campaigns that show you how to flex the corporate muscle and drive family businesses into the ground."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "As soon as your life savings hit our bank account, we will ship out the Bean Machine Starter Identi-KIT to your chosen location:"
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
                                    "3 distressed leather sofas"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "10 velvet-effect armchairs"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "1 Reggae CD"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "1 bookcase full of dog-eared paperbacks"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "1 rack of travel mugs with exotic prints"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "4 pieces of terrible abstract art"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "6 tins of paint in assorted earthy colors"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "5 over-privileged students"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "7 yuppies on cell phones"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "12 failed dot-com entrepreneurs"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "p",
                                    null,
                                    "8 soccer moms"
                                )
                            )
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Monopolize your local market in a matter of weeks!"
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

    return BeanMachineCoffeeFranchising;
}(React.Component);