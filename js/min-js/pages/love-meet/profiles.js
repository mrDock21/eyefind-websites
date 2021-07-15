'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileCard = function ProfileCard(info) {
    return React.createElement(
        "div",
        { className: "col" },
        React.createElement(
            "div",
            { className: "card lovemeet-card" },
            React.createElement(
                "div",
                { className: "card-header" },
                React.createElement("img", { src: info.profile.image, className: "card-img-top pt-2", alt: info.profile.nickname })
            ),
            React.createElement(
                "div",
                { className: "card-body" },
                React.createElement(
                    "p",
                    { className: "card-text text-center" },
                    info.profile.nickname
                ),
                React.createElement(
                    "h5",
                    { className: "card-title text-center mb-3" },
                    info.profile.age
                ),
                React.createElement(
                    "button",
                    null,
                    " MORE "
                )
            )
        )
    );
};

var Profiles = function (_React$Component) {
    _inherits(Profiles, _React$Component);

    function Profiles(props) {
        _classCallCheck(this, Profiles);

        var _this = _possibleConstructorReturn(this, (Profiles.__proto__ || Object.getPrototypeOf(Profiles)).call(this, props));

        _this.state = {
            males: MALES
        };
        return _this;
    }

    _createClass(Profiles, [{
        key: "render",
        value: function render() {
            var profiles = this.state.males.map(function (info) {
                return React.createElement(ProfileCard, { key: info.ID, profile: info });
            });

            return React.createElement(
                "div",
                { className: "row row-cols-1 row-cols-md-3 g-4" },
                profiles
            );
        }
    }]);

    return Profiles;
}(React.Component);

var domContainer = document.querySelector('#profiles-page');
ReactDOM.render(React.createElement(Profiles, null), domContainer);