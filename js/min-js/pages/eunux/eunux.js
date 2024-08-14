'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Eunux = function (_React$Component) {
    _inherits(Eunux, _React$Component);

    function Eunux(props) {
        _classCallCheck(this, Eunux);

        var _this = _possibleConstructorReturn(this, (Eunux.__proto__ || Object.getPrototypeOf(Eunux)).call(this, props));

        _this.state = {
            currPage: -1
        };
        return _this;
    }

    _createClass(Eunux, [{
        key: "getPage",
        value: function getPage() {
            var _this2 = this;

            var changePage = function changePage(x) {
                return _this2.onChangePage(x);
            };
            var currPage = this.state.currPage;

            switch (currPage) {
                case 0:
                    return React.createElement(EunuxAboutUs, { selectedTab: currPage, onPageSelected: changePage });
                case 1:
                case 2:
                case 3:
                default:
                    return React.createElement(EunuxLandingPage, { onPageSelected: changePage });
            }
        }
    }, {
        key: "onChangePage",
        value: function onChangePage(index) {
            var state = Object.assign({}, this.state);

            state.currPage = index;
            console.log("[DEBUG SELECTS PAGE %d]", index);
            this.setState(state);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "page" },
                React.createElement(SearchHeader, { ownerUrl: 'www.eunux.net' }),
                this.getPage()
            );
        }
    }]);

    return Eunux;
}(React.Component);

var domContainer = document.querySelector('#main_container');
ReactDOM.render(React.createElement(Eunux, null), domContainer);