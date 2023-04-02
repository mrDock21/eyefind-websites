'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LifestyleAutos = function (_React$Component) {
    _inherits(LifestyleAutos, _React$Component);

    function LifestyleAutos(props) {
        _classCallCheck(this, LifestyleAutos);

        var _this = _possibleConstructorReturn(this, (LifestyleAutos.__proto__ || Object.getPrototypeOf(LifestyleAutos)).call(this, props));

        _this.state = {
            currPage: 0
        };
        return _this;
    }

    _createClass(LifestyleAutos, [{
        key: "onChangePage",
        value: function onChangePage(index) {
            var state = Object.assign({}, this.state);

            state.currPage = index;

            this.setState(state);
        }
    }, {
        key: "getPage",
        value: function getPage() {
            switch (this.state.currPage) {
                case 0:
                    return React.createElement(LifestyleAutosHome, null);
            }
        }
    }, {
        key: "getFooterAd",
        value: function getFooterAd() {
            if (Math.random() > 0.5) {
                return React.createElement("img", { alt: "ad", src: "./../img/brucies_ela/b-ad-4.jpg" });
            }
            return React.createElement("img", { alt: "ad", src: "./../img/brucies_ela/b-ad-5.jpg" });
        }
    }, {
        key: "getHeaderBtn",
        value: function getHeaderBtn(index, text) {
            var _this2 = this;

            var btnState = this.state.currPage === index ? "active" : "";
            return React.createElement(
                "button",
                { className: "btn my-0 py-0 bela-header-btn ml-3 mr-1 " + btnState,
                    onClick: function onClick() {
                        return _this2.onChangePage(index);
                    },
                    type: "button",
                    key: index },
                React.createElement(
                    "p",
                    { className: "h4 my-0" },
                    text
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var btns = ["Home", "Style", "Motivation", "Supplements", "Cosmetic surgery", "Relantionships", "Emotional support", "Fitness/Body", "Special Status", "Nutrition", "Personal Grow"];
            var header_btns_ui = btns.map(function (val, i) {
                return _this3.getHeaderBtn(i, val);
            });

            return React.createElement(
                "div",
                { className: "page" },
                React.createElement(SearchHeader, { ownerUrl: 'www.bruciesexecutivelifestyleautos.com' }),
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row", id: "heading-imgs" },
                        React.createElement("img", { src: "./../img/brucies_ela/bmain-header.jpg" })
                    ),
                    React.createElement(
                        "div",
                        { className: "row mb-5" },
                        React.createElement(
                            "div",
                            { className: "col-md-8 pl-5 pr-1" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                header_btns_ui
                            ),
                            React.createElement(
                                "div",
                                { className: "row" },
                                this.getPage()
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-4" },
                            React.createElement(LifestyleAutosSideAds, null)
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        this.getFooterAd()
                    ),
                    React.createElement(
                        "div",
                        { className: "row mt-5 py-5" },
                        React.createElement(
                            "div",
                            { className: "col" },
                            React.createElement("img", { alt: "logo", src: "./../img/brucies_ela/blogo.jpg" })
                        ),
                        React.createElement(
                            "div",
                            { className: "col" },
                            React.createElement(
                                "p",
                                { className: "text-end text-bold text-white" },
                                "Brucie Executive Lifestyle Autos.\xAE ",
                                React.createElement("br", null),
                                "2008 All rights reserved ",
                                React.createElement("br", null),
                                "P.D. Andrew Tate is a Bitch"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LifestyleAutos;
}(React.Component);

var domContainer = document.querySelector('#main_container');
ReactDOM.render(React.createElement(LifestyleAutos, null), domContainer);