'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdCard = function (_React$Component) {
    _inherits(AdCard, _React$Component);

    function AdCard() {
        _classCallCheck(this, AdCard);

        return _possibleConstructorReturn(this, (AdCard.__proto__ || Object.getPrototypeOf(AdCard)).apply(this, arguments));
    }

    _createClass(AdCard, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "col-md-3" },
                React.createElement(
                    "div",
                    { className: "card" },
                    React.createElement("img", { href: "#", alt: "", className: "card-img-top", src: this.props.image })
                )
            );
        }
    }]);

    return AdCard;
}(React.Component);

var BottomAds = function (_React$Component2) {
    _inherits(BottomAds, _React$Component2);

    function BottomAds(props) {
        _classCallCheck(this, BottomAds);

        var _this2 = _possibleConstructorReturn(this, (BottomAds.__proto__ || Object.getPrototypeOf(BottomAds)).call(this, props));

        _this2.state = {
            images: new Array("img/ad_small/_1.png", "img/ad_small/_2.png", "img/ad_small/_3.png", "img/ad_small/_4.png", "img/ad_small/_5.png", "img/ad_small/_6.png", "img/ad_small/_7.png", "img/ad_small/_8.png", "img/ad_small/_9.png", "img/ad_small/_10.png", "img/ad_small/_11.png", "img/ad_small/_12.png", "img/ad_small/_13.png", "img/ad_small/_14.png", "img/ad_small/_15.png"),
            indexes: _this2.randomNum(0, 14)
        };
        return _this2;
    }

    _createClass(BottomAds, [{
        key: "randomNum",
        value: function randomNum(min, max) {
            var n = [];
            for (var i = 0; i < 4; i++) {
                n.push(Math.floor(Math.random() * max) + min);
            }
            return n;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log(this.state);
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var cards = this.state.indexes.map(function (i) {
                return React.createElement(AddCard, { image: _this3.state.images[i] });
            });

            return React.createElement(
                "div",
                { className: "row mt-3" },
                cards
            );
        }
    }]);

    return BottomAds;
}(React.Component);

var domContainer = document.querySelector('#bottom-ads-container');
ReactDOM.render(React.createElement(BottomAds, null), domContainer);