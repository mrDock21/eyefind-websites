'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LifestyleAutosSupplements = function (_React$Component) {
    _inherits(LifestyleAutosSupplements, _React$Component);

    function LifestyleAutosSupplements(props) {
        _classCallCheck(this, LifestyleAutosSupplements);

        return _possibleConstructorReturn(this, (LifestyleAutosSupplements.__proto__ || Object.getPrototypeOf(LifestyleAutosSupplements)).call(this, props));
    }

    _createClass(LifestyleAutosSupplements, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "article",
                { className: "mt-5" },
                React.createElement(
                    "h2",
                    { className: "article-title letter-space-3" },
                    "SUPPLEMENTS"
                ),
                React.createElement(
                    "article",
                    { className: "article-body" },
                    React.createElement(
                        "p",
                        null,
                        "Think outside the botox!"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Don't get me wrong. Stuffing your face with paralyzing chemicals rocks! I use it every week. It gives you that permanent expression of startled awe, which is great for poker games. But paralyzing your facial muscles is only going to get you so far along the road to becoming the ultimate male specimen."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Everyone likes some juice in the morning! Twice a day I inject myself with a stacked combination of supplements and growth hormones. My real secret weapon, though, is bull shark testosterone. It's like putting a nitrous injection in a moped! Every day my workouts get harder and harder and I remain undefeated on the Broker underground cage-fighting scene. Experts have predicted that I will live to 160. Personally, I think this is a conservative estimate."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "You have to put oil in your car. Steroids keep you young, on the edge, aggressive. Bad breath, high blood pressure and vicious mood swings are a small price to pay for physical perfection. Who cares that I need a catheter to urinate when I can make love for 9 hours straight? I am as close as a human can get to being immortal and invincible."
                    )
                )
            );
        }
    }]);

    return LifestyleAutosSupplements;
}(React.Component);