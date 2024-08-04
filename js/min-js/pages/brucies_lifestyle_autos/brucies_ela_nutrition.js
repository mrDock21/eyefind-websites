'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LifestyleAutosNutrition = function (_React$Component) {
    _inherits(LifestyleAutosNutrition, _React$Component);

    function LifestyleAutosNutrition(props) {
        _classCallCheck(this, LifestyleAutosNutrition);

        return _possibleConstructorReturn(this, (LifestyleAutosNutrition.__proto__ || Object.getPrototypeOf(LifestyleAutosNutrition)).call(this, props));
    }

    _createClass(LifestyleAutosNutrition, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "article",
                { className: "mt-5" },
                React.createElement(
                    "h2",
                    { className: "article-title letter-space-3" },
                    "DIET/NUTRITION"
                ),
                React.createElement(
                    "article",
                    { className: "article-body" },
                    React.createElement(
                        "p",
                        null,
                        "I pride myself on being able to list out the calorie count of every item on a restaurant menu and I often do this to impress girls on dates. To achieve Brucie-like proportions, you are going to need the right diet."
                    ),
                    React.createElement(
                        "ul",
                        { className: "blist" },
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "p",
                                null,
                                React.createElement(
                                    "span",
                                    { className: "important-word" },
                                    "BREAKFAST -\xA0"
                                ),
                                "20 Egg Whites"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "p",
                                null,
                                React.createElement(
                                    "span",
                                    { className: "important-word" },
                                    "MID-MORNING -\xA0"
                                ),
                                "16oz. Steak"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "p",
                                null,
                                React.createElement(
                                    "span",
                                    { className: "important-word" },
                                    "LUNCH -\xA0"
                                ),
                                "2 Roast Chickens"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "p",
                                null,
                                React.createElement(
                                    "span",
                                    { className: "important-word" },
                                    "MID-AFTERNOON -\xA0"
                                ),
                                "16oz. Steak"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "p",
                                null,
                                React.createElement(
                                    "span",
                                    { className: "important-word" },
                                    "DINNER -\xA0"
                                ),
                                "Green Salad"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "p",
                                null,
                                React.createElement(
                                    "span",
                                    { className: "important-word" },
                                    "DRINKS -\xA0"
                                ),
                                "Protein Shake"
                            )
                        )
                    ),
                    React.createElement(
                        "p",
                        null,
                        "No exceptions, no excuses. I took this girl out last night, a stacked little hardbody with blow-job lips. She ordered spaghetti alfredo and I dumped her on the spot. There's no room in my life for a chick who is going to stuff herself with carbs."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Even if she is 18."
                    )
                )
            );
        }
    }]);

    return LifestyleAutosNutrition;
}(React.Component);