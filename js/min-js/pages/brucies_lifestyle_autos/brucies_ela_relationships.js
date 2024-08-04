'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LifestyleAutosRelationships = function (_React$Component) {
    _inherits(LifestyleAutosRelationships, _React$Component);

    function LifestyleAutosRelationships(props) {
        _classCallCheck(this, LifestyleAutosRelationships);

        return _possibleConstructorReturn(this, (LifestyleAutosRelationships.__proto__ || Object.getPrototypeOf(LifestyleAutosRelationships)).call(this, props));
    }

    _createClass(LifestyleAutosRelationships, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "article",
                { className: "mt-5" },
                React.createElement(
                    "h2",
                    { className: "article-title letter-space-3" },
                    "RELATIONSHIPS"
                ),
                React.createElement(
                    "article",
                    { className: "article-body" },
                    React.createElement(
                        "p",
                        null,
                        "It's not rocket science."
                    ),
                    React.createElement(
                        "p",
                        null,
                        React.createElement(
                            "span",
                            { className: "text-highlight-orange" },
                            "Q. Why do most men never meet the woman of their dreams?",
                            React.createElement("br", null)
                        ),
                        "A. Stop dreaming and start living. Beautiful women only sleep with fat, bald or ugly men if they are 1) rich or 2) famous."
                    ),
                    React.createElement(
                        "p",
                        null,
                        React.createElement(
                            "span",
                            { className: "text-highlight-orange" },
                            "Q. Why is the divorce rate so high?",
                            React.createElement("br", null)
                        ),
                        "A. Because men are marrying women who do not live up to the porn ideal. Marry someone who cares about the things that matter to you - success, superficiality, good looks, and material possessions."
                    ),
                    React.createElement(
                        "p",
                        null,
                        React.createElement(
                            "span",
                            { className: "text-highlight-orange" },
                            "Q. Why does Brucie only date blonde models with fake breasts?",
                            React.createElement("br", null)
                        ),
                        "A. Because I can."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Imagine what would happen to your life if you were rich, famous and good-looking! More pussy than you can shake a stick-shift at, that's what. Women love having their reproductive organs waved at by a stick. Believe me, it worked for our ancestors and it works now. Welcome to my world. I'm a winner. Are you?"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Don't settle for second best. Don't kid yourself that you can be happy with droopy tits and cottage cheese thighs."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "I know I can't."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Let Brucie show you how a pimp rolls."
                    )
                )
            );
        }
    }]);

    return LifestyleAutosRelationships;
}(React.Component);