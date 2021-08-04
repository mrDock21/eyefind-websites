'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoEroticar = function (_React$Component) {
    _inherits(AutoEroticar, _React$Component);

    function AutoEroticar(props) {
        _classCallCheck(this, AutoEroticar);

        var _this = _possibleConstructorReturn(this, (AutoEroticar.__proto__ || Object.getPrototypeOf(AutoEroticar)).call(this, props));

        _this.state = {
            currPage: 0
        };
        return _this;
    }

    _createClass(AutoEroticar, [{
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
                    return React.createElement(AutoEroticarHome, null);
                case 1:
                    return React.createElement(AutoEroticarCheckCars, null);
                case 2:
                    return React.createElement(AutoEroticarHome, null);
                case 3:
                    return React.createElement(AutoEroticarHome, null);
            }
        }
    }, {
        key: "getHeaderBtn",
        value: function getHeaderBtn(index, text) {
            var _this2 = this;

            var btnState = this.state.currPage === index ? "active" : "";
            var isFirst = index === 0 ? "first" : "";
            return React.createElement(
                "button",
                { className: "btn " + isFirst + " " + btnState,
                    onClick: function onClick() {
                        return _this2.onChangePage(index);
                    } },
                text
            );
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "page" },
                React.createElement(SearchHeader, { ownerUrl: 'www.autoeroticar.net' }),
                React.createElement(
                    "div",
                    { className: "container", id: "logo-header" },
                    React.createElement(
                        "div",
                        { className: "row mb-2" },
                        React.createElement(
                            "div",
                            { className: "col-4" },
                            React.createElement(
                                "a",
                                null,
                                React.createElement(SVGFile, { svgId: "svg-name-logo",
                                    svgPath: './../img/autoeroticar/autoeroticar-name-logo.svg'
                                })
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-8 d-flex justify-content-end" },
                            React.createElement(SVGFile, { svgId: "svg-car-logo",
                                svgPath: './../img/autoeroticar/autoeroticar-car-logo.svg'
                            })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row", id: "page-btns-header" },
                        React.createElement(
                            "div",
                            { className: "col d-flex flex-row justify-content-center" },
                            this.getHeaderBtn(0, "Home"),
                            this.getHeaderBtn(1, "Check cars"),
                            this.getHeaderBtn(2, "About"),
                            this.getHeaderBtn(3, "Contact")
                        )
                    )
                ),
                this.getPage(),
                React.createElement(
                    "div",
                    { className: "container mb-5", id: "trademarks-display" },
                    React.createElement("hr", null),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-6 d-flex flex-row col-left" },
                            React.createElement(SVGFile, { svgId: "svg-file-1",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_1.svg'
                            }),
                            React.createElement(SVGFile, { svgId: "svg-file-2",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_2.svg'
                            }),
                            React.createElement(SVGFile, { svgId: "svg-file-3",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_3.svg'
                            }),
                            React.createElement(SVGFile, { svgId: "svg-file-4",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_4.svg'
                            })
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-6 d-flex flex-row col-right" },
                            React.createElement(SVGFile, { svgId: "svg-file-5",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_5.svg'
                            }),
                            React.createElement(SVGFile, { svgId: "svg-file-6",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_6.svg'
                            }),
                            React.createElement(SVGFile, { svgId: "svg-file-7",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_7.svg'
                            }),
                            React.createElement(SVGFile, { svgId: "svg-file-8",
                                classes: "trademark-logo",
                                svgPath: './../img/autoeroticar/autoeroticar_logo_8.svg'
                            })
                        )
                    ),
                    React.createElement("hr", null)
                ),
                React.createElement(
                    "div",
                    { className: "container row" },
                    React.createElement("div", { className: "col-4" }),
                    React.createElement(
                        "div",
                        { className: "col-8 d-flex flex-row" },
                        React.createElement(
                            "p",
                            null,
                            React.createElement(
                                "a",
                                { className: "autoeroticar-link",
                                    href: "https://skfb.ly/o6JVZ" },
                                "Ferrari 458 Italia"
                            ),
                            "\xA0by DatJones is licensed under\xA0",
                            React.createElement(
                                "a",
                                { className: "autoeroticar-link",
                                    href: "http://creativecommons.org/licenses/by/4.0/" },
                                "Creative Commons Attribution"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AutoEroticar;
}(React.Component);

var domContainer = document.querySelector('#main_container');
ReactDOM.render(React.createElement(AutoEroticar, null), domContainer);