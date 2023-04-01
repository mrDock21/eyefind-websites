'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BMC_PAGES = [{
    tittle: "Home", subtittle: "TASTES LIKE FUEL, KICKS LIKE A MUEL", img: "img/bean-machine-coffee/bmc_public-store.PNG"
}, {
    tittle: "Specials", subtittle: "SPECIAL COFFEE FOR SPECIAL PEOPLE", img: "img/bean-machine-coffee/bmc_public-store.PNG"
}, {
    tittle: "Cup Sizes", subtittle: "THE BIGGER, THE BETTER", img: "img/bean-machine-coffee/bmc_public-store.PNG"
}, {
    tittle: "Franchising Opportunities", subtittle: "SO PROFITABLE THAT YOU'LL THINK TI'S A PYRAMID SCHEME!", img: "img/bean-machine-coffee/bmc_public-store.PNG"
}, {
    tittle: "Buy Our Coffees", subtittle: "I DIDN'T WANT TO TELL YOU, BUT IF YOU DON'T BUY FROM US, YOU'LL DIE!", img: "img/bean-machine-coffee/bmc_public-store.PNG"
}, {
    tittle: "Caffeine Is Not a Drug", subtittle: "COFFEE IS POISONOUS TO THE REPTILIANS. IT'S A DRUG FOR THEM NOT FOR US! DON'T FALL FOR THEIR LIES!", img: "img/bean-machine-coffee/bmc_public-store.PNG"
}, {
    tittle: "10 Reasons To Boycott Your Local Coffeehouse", subtittle: "THEIR COFFEE IS, INDEED, A DRUG!", img: "img/bean-machine-coffee/bmc_public-store.PNG"
}];

var BeanMachineCoffee = function (_React$Component) {
    _inherits(BeanMachineCoffee, _React$Component);

    function BeanMachineCoffee(props) {
        _classCallCheck(this, BeanMachineCoffee);

        var _this = _possibleConstructorReturn(this, (BeanMachineCoffee.__proto__ || Object.getPrototypeOf(BeanMachineCoffee)).call(this, props));

        _this.state = {
            currPage: 0,
            wndSize: window.innerWidth,
            showingBtns: false
        };

        window.addEventListener('resize', function () {
            return _this.setWndSize(window.innerWidth);
        });
        return _this;
    }

    _createClass(BeanMachineCoffee, [{
        key: "getAsset",
        value: function getAsset(rootPath) {
            return "./../" + rootPath;
        }
    }, {
        key: "onPageChange",
        value: function onPageChange(index) {
            var state = Object.assign({}, this.state);
            state.currPage = index;
            this.setState(state);
        }
    }, {
        key: "setWndSize",
        value: function setWndSize(width) {
            var state = Object.assign({}, this.state);
            state.wndSize = width;
            this.setState(state);
        }
    }, {
        key: "toggleHeaderBtns",
        value: function toggleHeaderBtns() {
            var state = Object.assign({}, this.state);
            state.showingBtns = !state.showingBtns;
            console.log("[DEBUG]    Toggle buttons");
            this.setState(state);
        }
    }, {
        key: "getBtnState",
        value: function getBtnState(index) {
            return index === this.state.currPage ? "bmc-header-btn-active" : "";
        }
    }, {
        key: "getCurrentPage",
        value: function getCurrentPage() {
            switch (this.state.currPage) {
                case 0:
                    return React.createElement(BeanMachineCoffeeHome, null);
                case 1:
                    return React.createElement(BeanMachineCoffeeSpecials, null);
                case 2:
                    return React.createElement(BeanMachineCoffeeCupSizes, null);
                case 3:
                    return React.createElement(BeanMachineCoffeeFranchising, null);
                case 4:
                    return React.createElement(BeanMachineCoffeeBuyOurCoffees, null);
                case 5:
                    return React.createElement(BeanMachineCoffeeCoffeeDrug, null);
                case 6:
                    return React.createElement(BeanMachineCoffeeBecomeRep, null);
                case 7:
                    return React.createElement(BeanMachineCoffeeTenReasons, null);
                default:
                    return null;
            }
        }
    }, {
        key: "ifHomeReturn",
        value: function ifHomeReturn(value) {
            return this.state.currPage === 0 ? value : null;
        }
    }, {
        key: "ifElseHomeReturn",
        value: function ifElseHomeReturn(value, elseVal) {
            return this.state.currPage === 0 ? value : elseVal;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var isMobile = this.state.wndSize < 768;
            var showingHamburgerBtns = this.state.showingBtns;
            var currPage = this.state.currPage;
            var page = this.getCurrentPage();
            var headerBtns = BMC_PAGES.map(function (val, index) {
                return React.createElement(
                    "div",
                    { key: index },
                    React.createElement(
                        "button",
                        { onClick: function onClick() {
                                return _this2.onPageChange(index);
                            },
                            className: "bmc-header-btn text-brown " + _this2.getBtnState(index) },
                        val.tittle
                    )
                );
            });
            var hamburgerBtns = null;
            var hamburgerIcon = null;
            if (isMobile) {
                hamburgerBtns = headerBtns;
                headerBtns = null;
                hamburgerIcon = React.createElement(
                    "div",
                    { className: "bmc-hamburger " + (showingHamburgerBtns ? "bmc-hamburger-selected" : "") },
                    React.createElement("img", { onClick: function onClick() {
                            return _this2.toggleHeaderBtns();
                        },
                        className: "w-100",
                        src: this.getAsset("img/hamburger-button-icon.png")
                    })
                );
            }

            return React.createElement(
                "div",
                { className: "page" },
                React.createElement(SearchHeader, { ownerUrl: 'www.bean-machine-coffee.net' }),
                React.createElement(
                    "div",
                    { className: "p-relative" },
                    React.createElement(
                        "div",
                        { className: "px-1 py-2 bmc-bg-white w-100 bmc-border-top-pink",
                            id: "bmc-slogan-label" },
                        React.createElement(
                            "div",
                            { className: "d-flex flex-row justify-content-between justify-content-md-end" },
                            hamburgerIcon,
                            React.createElement(
                                "div",
                                { className: "w-50" },
                                React.createElement(
                                    "h3",
                                    { className: "bmc-text-dark bmc-font bmc-text-right" },
                                    BMC_PAGES[currPage].subtittle
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "bmc-hamburger-btns " + (showingHamburgerBtns ? "bmc-hamburger-btns-show" : "") },
                            hamburgerBtns
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "container px-0" },
                    React.createElement(
                        "div",
                        { className: "row " + this.ifHomeReturn("px-md-5") },
                        React.createElement(
                            "div",
                            { className: "col-4 d-flex flex-column" },
                            React.createElement(
                                "div",
                                { className: "z-index-1 p-relative" },
                                React.createElement("img", { id: "bmc-logo-background",
                                    className: "w-100 h-100",
                                    src: this.getAsset("img/bean-machine-coffee/bmc_logo-background.png") }),
                                React.createElement("img", { id: "bmc-logo-foreground",
                                    className: "w-100 h-100",
                                    src: this.getAsset("img/bean-machine-coffee/bmc_logo-foreground.png")
                                })
                            ),
                            headerBtns
                        ),
                        React.createElement(
                            "div",
                            { className: "col-8 px-0" },
                            React.createElement("img", { className: "w-100 " + this.ifHomeReturn("h-100"),
                                src: this.getAsset(BMC_PAGES[currPage].img) }),
                            isMobile ? null : this.ifElseHomeReturn(null, page)
                        )
                    ),
                    isMobile ? page : this.ifElseHomeReturn(page, null),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-4 d-flex justify-content-center" },
                            React.createElement("img", { className: "w-50", src: this.getAsset("img/bean-machine-coffee/bmc_logo.png") })
                        ),
                        React.createElement(
                            "div",
                            { className: "col-8 bmc-text-white p-2" },
                            React.createElement(
                                "p",
                                null,
                                "Bean Machine Coffee"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "All rights reserved"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return BeanMachineCoffee;
}(React.Component);

var domContainer = document.querySelector('#main_container');
ReactDOM.render(React.createElement(BeanMachineCoffee, null), domContainer);