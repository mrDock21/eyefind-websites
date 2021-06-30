'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TvCarousel = function (_React$Component) {
    _inherits(TvCarousel, _React$Component);

    function TvCarousel(props) {
        _classCallCheck(this, TvCarousel);

        var _this = _possibleConstructorReturn(this, (TvCarousel.__proto__ || Object.getPrototypeOf(TvCarousel)).call(this, props));

        _this.state = {
            current: 0
        };
        return _this;
    }

    _createClass(TvCarousel, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "d-flex flex-column w-100 h-100" },
                React.createElement(
                    "div",
                    { id: "carousel-imgs", className: "d-flex w-100 flex-row p-2 justify-content-between" },
                    React.createElement(
                        "div",
                        { className: "carousel-img" },
                        React.createElement("img", { className: "w-100 h-100",
                            src: "https://cruhidrogeno2021.com/upload/expositores/e32dd32e0c2550f969e84ca79eff4bf9.jpg" })
                    ),
                    React.createElement(
                        "div",
                        { className: "carousel-img" },
                        React.createElement("img", { className: "w-100 h-100",
                            src: "https://cruhidrogeno2021.com/upload/expositores/e32dd32e0c2550f969e84ca79eff4bf9.jpg" })
                    ),
                    React.createElement(
                        "div",
                        { className: "carousel-img" },
                        React.createElement("img", { className: "w-100 h-100",
                            src: "https://cruhidrogeno2021.com/upload/expositores/e32dd32e0c2550f969e84ca79eff4bf9.jpg" })
                    )
                ),
                React.createElement(
                    "div",
                    { id: "carousel-btns",
                        className: "d-flex flex-row justify-content-center align-items-center mt-2 p-2" },
                    React.createElement(
                        "div",
                        { className: "carousel-btn carousel-btn-active" },
                        "\xA0"
                    ),
                    React.createElement(
                        "div",
                        { className: "carousel-btn" },
                        "\xA0"
                    ),
                    React.createElement(
                        "div",
                        { className: "carousel-btn" },
                        "\xA0"
                    ),
                    React.createElement(
                        "div",
                        { className: "carousel-btn" },
                        "\xA0"
                    )
                )
            );
        }
    }]);

    return TvCarousel;
}(React.Component);

var domContainer = document.querySelector('#tv_carousel_container');
ReactDOM.render(React.createElement(TvCarousel, null), domContainer);