'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LifestyleAutosCosmeticSurgery = function (_React$Component) {
    _inherits(LifestyleAutosCosmeticSurgery, _React$Component);

    function LifestyleAutosCosmeticSurgery(props) {
        _classCallCheck(this, LifestyleAutosCosmeticSurgery);

        return _possibleConstructorReturn(this, (LifestyleAutosCosmeticSurgery.__proto__ || Object.getPrototypeOf(LifestyleAutosCosmeticSurgery)).call(this, props));
    }

    _createClass(LifestyleAutosCosmeticSurgery, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "article",
                { className: "mt-5" },
                React.createElement(
                    "h2",
                    { className: "article-title letter-space-3" },
                    "COSMETIC SURGERY"
                ),
                React.createElement(
                    "article",
                    { className: "article-body" },
                    React.createElement(
                        "p",
                        null,
                        "Is your hairline receding as quickly as your waistline is expanding? These days there are no excuses for being ugly. Last year, I spent over $100,000 on calf implants, a hair transplant and a set of veneers made from imported Chinese porcelain. I think that the results speak for themselves. My cock-job was the best $20,000 I ever spent. Remember - girth and mirth rhyme for a reason."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Cosmetic surgery allows you to be anyone you want."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Think of it like auto modification, a new tricked-out body kit for an aging ride. Whether you want a chrome grill or nose reshaping, a racing spoiler or butt implants, Brucie can hook you up."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Don't be part of the cosmetic underclass."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Call Brucie's Executive Lifestyle Autos today."
                    )
                )
            );
        }
    }]);

    return LifestyleAutosCosmeticSurgery;
}(React.Component);