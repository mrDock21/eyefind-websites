'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RandomAd = function (_React$Component) {
    _inherits(RandomAd, _React$Component);

    function RandomAd() {
        _classCallCheck(this, RandomAd);

        return _possibleConstructorReturn(this, (RandomAd.__proto__ || Object.getPrototypeOf(RandomAd)).apply(this, arguments));
    }

    _createClass(RandomAd, [{
        key: "render",
        value: function render() {
            var index = Math.floor(Math.random() * (IMAGES.length - 1)) + 0;
            var style = "";

            if (this.props.classAttributes != null) style = this.props.classAttributes;

            return React.createElement(AdCard, { page: IMAGES[index], classAttributes: style });
        }
    }]);

    return RandomAd;
}(React.Component);