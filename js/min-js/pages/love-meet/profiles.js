'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function Profile(_ref) {
    var profile = _ref.profile,
        updatePage = _ref.updatePage;

    return React.createElement(
        "div",
        { className: "row row-cols-1" },
        React.createElement(
            "div",
            { className: "col" },
            React.createElement(
                "div",
                { className: "card lovemeet-card mt-4 mx-5" },
                React.createElement(
                    "div",
                    { className: "card-body" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-4" },
                            React.createElement("img", { src: profile.image, className: "w-100", alt: profile.nickname }),
                            React.createElement(
                                "p",
                                { className: "card-text text-center" },
                                profile.nickname
                            ),
                            React.createElement(
                                "p",
                                { className: "card-text text-center" },
                                profile.age
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-8" },
                            React.createElement(FormatText, { className: "card-description", text: 'LOC:|' + profile.location, delimiter: '|' }),
                            React.createElement("br", null),
                            React.createElement(FormatText, { className: "card-description", text: 'JOB:|' + profile.job, delimiter: '|' }),
                            React.createElement("br", null),
                            React.createElement(FormatText, { className: "card-description", text: 'SEXUALITY:|' + profile.sexuality, delimiter: '|' }),
                            React.createElement("br", null),
                            React.createElement(FormatText, { className: "card-description", text: 'BUILD:|' + profile.build, delimiter: '|' }),
                            React.createElement("br", null),
                            React.createElement(FormatText, { className: "card-description", text: 'ABOUT ME:|' + profile.about, delimiter: '|' }),
                            React.createElement("br", null),
                            React.createElement(FormatText, { className: "card-description", text: 'LIKES:|' + profile.likes, delimiter: '|' }),
                            React.createElement("br", null),
                            React.createElement(FormatText, { className: "card-description", text: 'DISLIKES:|' + profile.dislikes, delimiter: '|' }),
                            React.createElement("br", null)
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "card-body" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-4" },
                            React.createElement(
                                "button",
                                { onClick: function onClick() {
                                        return updatePage('main');
                                    } },
                                " BACK "
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-4 offset-4" },
                            React.createElement(
                                "button",
                                null,
                                " DATE "
                            )
                        )
                    )
                )
            )
        ),
        React.createElement("div", { className: "mt-5" })
    );
};

var ProfileCard = function ProfileCard(_ref2) {
    var profile = _ref2.profile,
        updatePage = _ref2.updatePage;

    return React.createElement(
        "div",
        { className: "col" },
        React.createElement(
            "div",
            { className: "card lovemeet-card mt-4" },
            React.createElement(
                "div",
                { className: "card-header" },
                React.createElement("img", { src: profile.image, className: "card-img-top pt-2", alt: profile.nickname })
            ),
            React.createElement(
                "div",
                { className: "card-body" },
                React.createElement(
                    "p",
                    { className: "card-text text-center" },
                    profile.nickname
                ),
                React.createElement(
                    "h5",
                    { className: "card-title text-center mb-3" },
                    profile.age
                ),
                React.createElement(
                    "button",
                    { onClick: function onClick() {
                            return updatePage(profile);
                        } },
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

        console.log(props);
        _this.state = {
            males: props.type === 'male' ? MALES.sort(function () {
                return Math.random() - 0.5;
            }) : FEMALES.sort(function () {
                return Math.random() - 0.5;
            })
        };
        return _this;
    }

    _createClass(Profiles, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var profiles = this.state.males.map(function (info) {
                return React.createElement(ProfileCard, { key: info.ID, profile: info, updatePage: _this2.props.updatePage });
            });

            return React.createElement(
                "div",
                { className: "row row-cols-1 row-cols-md-3 g-4 mx-5" },
                profiles,
                React.createElement("div", { className: "mt-5" })
            );
        }
    }]);

    return Profiles;
}(React.Component);