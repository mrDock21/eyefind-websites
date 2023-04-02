'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BELA_AD = ["./../img/brucies_ela/b-ad-1.jpg", "./../img/brucies_ela/b-ad-2.jpg"];

var LifestyleAutosSideAds = function (_React$Component) {
    _inherits(LifestyleAutosSideAds, _React$Component);

    function LifestyleAutosSideAds(props) {
        _classCallCheck(this, LifestyleAutosSideAds);

        return _possibleConstructorReturn(this, (LifestyleAutosSideAds.__proto__ || Object.getPrototypeOf(LifestyleAutosSideAds)).call(this, props));
    }

    _createClass(LifestyleAutosSideAds, [{
        key: "getTopThumbnail",
        value: function getTopThumbnail() {
            if (Math.random() > 0.5) {
                return React.createElement("img", { alt: "ad", className: "w-100 mb-5",
                    src: "./../img/brucies_ela/b-ad-3.jpg" });
            }

            return null;
        }
    }, {
        key: "getSideAd",
        value: function getSideAd() {
            // since there are only two...
            return React.createElement("img", { alt: "ad", className: "w-100",
                src: BELA_AD[Math.round(Math.random())]
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "bela-side-ad w-100" },
                this.getTopThumbnail(),
                this.getSideAd()
            );
        }
    }]);

    return LifestyleAutosSideAds;
}(React.Component);