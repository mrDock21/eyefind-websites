'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LifestyleAutosFitnessBodyShaping = function (_React$Component) {
    _inherits(LifestyleAutosFitnessBodyShaping, _React$Component);

    function LifestyleAutosFitnessBodyShaping(props) {
        _classCallCheck(this, LifestyleAutosFitnessBodyShaping);

        return _possibleConstructorReturn(this, (LifestyleAutosFitnessBodyShaping.__proto__ || Object.getPrototypeOf(LifestyleAutosFitnessBodyShaping)).call(this, props));
    }

    _createClass(LifestyleAutosFitnessBodyShaping, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "article",
                { className: "mt-5" },
                React.createElement(
                    "h2",
                    { className: "article-title letter-space-3" },
                    "FITNESS/BODY SHAPING"
                ),
                React.createElement(
                    "article",
                    { className: "article-body" },
                    React.createElement(
                        "p",
                        null,
                        "Dial it in!!! The first rule of being a player is - get ripped. The second rule of being a player is - GET RIPPED!!! I treat my body like I treat my cars. Chest, calves, pecks, lats, stomach, pipes, glutes, hams, delts: you're going to have to pump some serious iron to look like Brucie. I do 2 hours of cardio every morning followed by 1 hour of aggressive masturbating in front of a mirror and then 3 hours of weight training in the evening. I'm 1% body fat, 100% sliced and diced muscle. Buff as fuck!!! Women love muscles and it's essential to look full and shredded at all times. Let Brucie show you how to transform your life, one abdominal at a time."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "You'll know when you've been Bruced!"
                    )
                )
            );
        }
    }]);

    return LifestyleAutosFitnessBodyShaping;
}(React.Component);