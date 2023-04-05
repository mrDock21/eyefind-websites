'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LifestyleAutosEmotionalSupport = function (_React$Component) {
    _inherits(LifestyleAutosEmotionalSupport, _React$Component);

    function LifestyleAutosEmotionalSupport(props) {
        _classCallCheck(this, LifestyleAutosEmotionalSupport);

        return _possibleConstructorReturn(this, (LifestyleAutosEmotionalSupport.__proto__ || Object.getPrototypeOf(LifestyleAutosEmotionalSupport)).call(this, props));
    }

    _createClass(LifestyleAutosEmotionalSupport, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "article",
                { className: "mt-5" },
                React.createElement(
                    "h2",
                    { className: "article-title letter-space-3" },
                    "EMOTIONAL SUPPORT"
                ),
                React.createElement(
                    "article",
                    { className: "article-body" },
                    React.createElement(
                        "p",
                        null,
                        "Yeah, right!! Don't come to me with your feeble insecurities and petty neuroses. I will laugh in your face and crack open a low carb beer and a high protein snack. I'm a real man."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "I don't want to talk about feelings and emotion. Power ballads get no play. I'm talking seriously misogynistic hip hop, I'm talking lap dancers. I'm talking blood sports and kung fu movies. Don't pay a therapist thousands of dollars to dredge up the painful events of your miserable past. Spend it on a fat spoiler and a night on the town with Brucie instead!!"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Forget about the past - this is your future. Grab it by the balls until it winces in pain. I don't care if you were beaten as a child. I don't want to hear about your desperation, loneliness, drunk uncle, rage and fear. I just want to know that you're ready to step up to the plate and get PUMPED!! WIN! WIN! WIN!"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Be ",
                        React.createElement(
                            "p",
                            { className: "important-word" },
                            "GENETICALLY DIFFERENT"
                        ),
                        "."
                    )
                )
            );
        }
    }]);

    return LifestyleAutosEmotionalSupport;
}(React.Component);