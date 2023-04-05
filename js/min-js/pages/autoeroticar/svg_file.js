'use strict';

/** Reads SVG file and inserts it into the div */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVGFile = function (_React$Component) {
    _inherits(SVGFile, _React$Component);

    function SVGFile(props) {
        _classCallCheck(this, SVGFile);

        var _this = _possibleConstructorReturn(this, (SVGFile.__proto__ || Object.getPrototypeOf(SVGFile)).call(this, props));

        _this.state = {
            svgContents: null
        };

        fetch(_this.props.svgPath).then(function (r) {
            return r.text();
        }).then(function (text) {
            return _this.onSvgResponse(text);
        }).catch(console.error.bind(console));
        return _this;
    }

    _createClass(SVGFile, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement('div', { id: this.props.svgId,
                className: this.props.classes,
                onAnimationEnd: function onAnimationEnd() {
                    return _this2.props.onAnimEnd();
                }
            });
        }
    }, {
        key: 'onSvgResponse',
        value: function onSvgResponse(text) {
            var state = Object.assign({}, this.state);
            var dom = document.getElementById(this.props.svgId);

            dom.innerHTML = state.svgContents = text;

            this.setState(state);
        }
    }]);

    return SVGFile;
}(React.Component);