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

        var page0 = [
        // page 1
        "./img/ad_tv/_1.png", "./img/ad_tv/_2.png", "./img/ad_tv/_3.png"];
        var page1 = [
        // page 2
        "./img/ad_tv/_4.jpg", "./img/ad_tv/_5.png", "./img/ad_tv/_6.jpg"];
        var page2 = [
        // page 3
        "./img/ad_tv/_7.png", "./img/ad_tv/_8.png", "./img/ad_tv/_9.png"];
        var page3 = [
        // page 4
        // page 1
        "./img/ad_tv/_10.jpg", "./img/ad_tv/_11.jpg", "./img/ad_tv/_12.png"];

        _this.state = {
            pages: [page0, page1, page2, page3],
            currentImg: 0,
            selectedPage: 0,
            nextSelectedPage: 0,
            animating: false
        };
        return _this;
    }

    _createClass(TvCarousel, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var currPage = this.state.pages[this.state.selectedPage];
            var nextPage = this.state.pages[this.state.nextSelectedPage];

            // circular buttons
            var carouselBtns = Array(0, 1, 2, 3).map(function (index) {
                return React.createElement(
                    "div",
                    { key: index,
                        className: "carousel-btn " + _this2.getSelectedBtnState(index),
                        onClick: function onClick() {
                            return _this2.changeCarousel(index);
                        } },
                    "\xA0"
                );
            });

            return React.createElement(
                "div",
                { className: "d-flex flex-column w-100 h-100" },
                React.createElement(
                    "div",
                    { id: "carousel-imgs", className: "d-flex w-100 flex-row p-2 justify-content-evenly" },
                    React.createElement(
                        "div",
                        { className: "carousel-img" },
                        React.createElement("img", { className: "w-100 h-100",
                            src: currPage[0] }),
                        React.createElement("img", { className: "w-100 h-100 " + this.getAnimState(),
                            onAnimationEnd: function onAnimationEnd() {
                                return _this2.onAnimationDone();
                            },
                            src: nextPage[0] })
                    ),
                    React.createElement(
                        "div",
                        { className: "carousel-img" },
                        React.createElement("img", { className: "w-100 h-100",
                            src: currPage[1] }),
                        React.createElement("img", { className: "w-100 h-100 " + this.getAnimState(),
                            src: nextPage[1] })
                    ),
                    React.createElement(
                        "div",
                        { className: "carousel-img" },
                        React.createElement("img", { className: "w-100 h-100",
                            src: currPage[2] }),
                        React.createElement("img", { className: "w-100 h-100 " + this.getAnimState(),
                            src: nextPage[2] })
                    )
                ),
                React.createElement(
                    "div",
                    { id: "carousel-btns",
                        className: "d-flex flex-row justify-content-center align-items-center mt-2 p-2" },
                    carouselBtns
                )
            );
        }
    }, {
        key: "getAnimState",
        value: function getAnimState() {
            return this.state.animating ? "carousel-visible-ad" : "invisible-ad";
        }
    }, {
        key: "getSelectedBtnState",
        value: function getSelectedBtnState(page) {
            var btnState = "";
            if (this.state.nextSelectedPage === page) btnState = "carousel-btn-active";
            return btnState;
        }
    }, {
        key: "changeCarousel",
        value: function changeCarousel(pageIndex) {
            if (pageIndex === this.state.selectedPage || this.state.animating)
                // ignore page change
                return;

            var state = Object.assign({}, this.state);

            state.nextSelectedPage = pageIndex;
            state.animating = true;
            // update
            this.setState(state);
        }
    }, {
        key: "onAnimationDone",
        value: function onAnimationDone() {
            var state = Object.assign({}, this.state);

            state.selectedPage = state.nextSelectedPage;
            state.animating = false;

            console.log("[DEBUG]    Anim done!");
            // update
            this.setState(state);
        }
    }]);

    return TvCarousel;
}(React.Component);

var domContainer = document.querySelector('#tv_carousel_container');
ReactDOM.render(React.createElement(TvCarousel, null), domContainer);