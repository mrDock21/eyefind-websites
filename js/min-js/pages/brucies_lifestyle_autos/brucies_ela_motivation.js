'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LifestyleAutosMotivation = function (_React$Component) {
    _inherits(LifestyleAutosMotivation, _React$Component);

    function LifestyleAutosMotivation(props) {
        _classCallCheck(this, LifestyleAutosMotivation);

        return _possibleConstructorReturn(this, (LifestyleAutosMotivation.__proto__ || Object.getPrototypeOf(LifestyleAutosMotivation)).call(this, props));
    }

    _createClass(LifestyleAutosMotivation, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "article",
                { className: "mt-5" },
                React.createElement(
                    "h2",
                    { className: "article-title letter-space-3" },
                    "MOTIVATION"
                ),
                React.createElement(
                    "article",
                    { className: "article-body" },
                    React.createElement(
                        "p",
                        null,
                        "Motivation is my middle name. Bruce Motivation Kibbutz. You think I'm joking but I had it changed legally last year."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "I also have G tattooed on my left buttock and D on my right buttock to remind me that I am\xA0",
                        React.createElement(
                            "span",
                            { className: "important-word" },
                            "GENETICALLY DIFFERENT"
                        ),
                        ". Every morning I touch my toes, look through my legs and see GOD reflected in the full-length mirror. Powerful."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "If you can't believe in yourself, believe in me. I inspire."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Self-esteem is my drug. I show men what they can be and women what they can have. Carry a picture of me in your wallet and take a look whenever you feel your fat ass drawn to a slice of pizza, an item of non-branded clothing, or a fuel efficient car."
                    )
                )
            );
        }
    }]);

    return LifestyleAutosMotivation;
}(React.Component);