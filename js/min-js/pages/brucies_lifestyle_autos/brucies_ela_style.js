'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LifestyleAutosStyle = function (_React$Component) {
    _inherits(LifestyleAutosStyle, _React$Component);

    function LifestyleAutosStyle(props) {
        _classCallCheck(this, LifestyleAutosStyle);

        return _possibleConstructorReturn(this, (LifestyleAutosStyle.__proto__ || Object.getPrototypeOf(LifestyleAutosStyle)).call(this, props));
    }

    _createClass(LifestyleAutosStyle, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "article",
                { className: "mt-5" },
                React.createElement(
                    "h2",
                    { className: "article-title letter-space-3" },
                    "STYLE"
                ),
                React.createElement(
                    "article",
                    { className: "article-body" },
                    React.createElement(
                        "p",
                        null,
                        "It's life, not a dress rehearsal. Dress to impress, not to distress. I think nothing of dropping $200 on a pair of silk boxer shorts."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "When I head out in the evening, I go with a pair of Gutter & Blood trousers, a Derriere shirt, Didier Sachs loafers and a Crowex watch. All black, all very tight. It has to be tight. You need to show off the body. Oil it up and get out there. Sometimes I mix things up with some fitted Unleaded jeans and a leisure blazer. Or some Hinterland camo pants, a low-cut white tanktop and sandals (work that pedicure!). I'm urban as fuck! I'm street style, but I'm also VIP. I invented hip hop."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Most importantly... Accessorize! Never forget the bling. Women love jewelry on a man just as much as they love the spinning rims on your pimped-out ride. Jewelry says - I've arrived', 'I am the fucking man'."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Don't be afraid of pink, especially salmon pink."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Remember - you're metromacho now! I couldn't be any more heterosexual but I certainly don't mind being a gay icon. If guys want to watch me take my post-workout shower, I'm not going to draw the curtain. The only cock I love is my own, but I don't mind showing it off."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Get ready for the Brucie makeover!!"
                    )
                )
            );
        }
    }]);

    return LifestyleAutosStyle;
}(React.Component);