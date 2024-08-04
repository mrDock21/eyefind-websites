'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LifestyleAutosPersonalGrooming = function (_React$Component) {
    _inherits(LifestyleAutosPersonalGrooming, _React$Component);

    function LifestyleAutosPersonalGrooming(props) {
        _classCallCheck(this, LifestyleAutosPersonalGrooming);

        return _possibleConstructorReturn(this, (LifestyleAutosPersonalGrooming.__proto__ || Object.getPrototypeOf(LifestyleAutosPersonalGrooming)).call(this, props));
    }

    _createClass(LifestyleAutosPersonalGrooming, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "article",
                { className: "mt-5" },
                React.createElement(
                    "h2",
                    { className: "article-title letter-space-3" },
                    "PERSONAL GROOMING"
                ),
                React.createElement(
                    "article",
                    { className: "article-body" },
                    React.createElement(
                        "p",
                        null,
                        "Ever noticed how those people who claim that beauty is only skin-deep are the ones not getting laid?!!"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Image is everything. There are no second chances at first impressions. Hair frosting, eyebrow plucking, MANicures, pedicures, facials... in order to be a player, you have to look like a player. I don't have a single hair on my body and I tan twice a day."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "I heard a girl say to her mother last week - \"Look that man's made of mahogany!\" I was so flattered that I gave her a pair of my signed workout briefs. It takes work and dedication to look this good. I have to combine three different moisturizers to get the right results. It's all about products. Products, products, products."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Check out the Max Renda for Men line. Because you work it!"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Because you're \xA0",
                        React.createElement(
                            "span",
                            { className: "important-word" },
                            "GENETICALLY DIFFERENT"
                        ),
                        "."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "My aesthetician told me that she feels like Michelangelo working on the statue of David when she is waxing my back. I looked at a picture of that statue. He's got good definition but I'm so much more pumped. He also has a tiny cock. Unlike me. Mine is massive. That bitch will never work in the beauty industry again."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Let Brucie show you how to step up your game."
                    )
                )
            );
        }
    }]);

    return LifestyleAutosPersonalGrooming;
}(React.Component);