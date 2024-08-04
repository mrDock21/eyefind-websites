'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LifestyleAutosSocialStatus = function (_React$Component) {
    _inherits(LifestyleAutosSocialStatus, _React$Component);

    function LifestyleAutosSocialStatus(props) {
        _classCallCheck(this, LifestyleAutosSocialStatus);

        return _possibleConstructorReturn(this, (LifestyleAutosSocialStatus.__proto__ || Object.getPrototypeOf(LifestyleAutosSocialStatus)).call(this, props));
    }

    _createClass(LifestyleAutosSocialStatus, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "article",
                { className: "mt-5" },
                React.createElement(
                    "h2",
                    { className: "article-title letter-space-3" },
                    "SOCIAL STATUS"
                ),
                React.createElement(
                    "article",
                    { className: "article-body" },
                    React.createElement(
                        "p",
                        null,
                        "Come on! Scrape yourself off the bottom of the Z-list barrel. Life is all about status. Everyone on the scene in Liberty City knows Brucie. I'm the ultimate VIP, a promoter's wet dream."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "People want me in their clubs because I attract attention. Flashing the cash is essential. Spend, spend, spend! Ever seen that guy who walks to the front of every line, gets ushered to a private table, drinks Chateau de Buff and spends the whole night surrounded by porn stars? That's me. That could be you."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Let Brucie show you how a big player rolls."
                    )
                )
            );
        }
    }]);

    return LifestyleAutosSocialStatus;
}(React.Component);