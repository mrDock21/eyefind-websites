'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchHeader = function (_React$Component) {
    _inherits(SearchHeader, _React$Component);

    function SearchHeader(props) {
        _classCallCheck(this, SearchHeader);

        var _this = _possibleConstructorReturn(this, (SearchHeader.__proto__ || Object.getPrototypeOf(SearchHeader)).call(this, props));

        _this.state = {
            searchPageUrl: _this.props.ownerUrl,
            showControls: false
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    /**
     * Updates URL text
     */


    _createClass(SearchHeader, [{
        key: 'handleChange',
        value: function handleChange(event) {
            var state = Object.assign({}, this.state);
            state.searchPageUrl = event.target.value;
            this.setState(state);
        }

        /**
         * Redirects to "GTA-URL" requested
         */

    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            alert('Requested search: ' + this.state.value);
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            // GRAY HEADER
            return React.createElement(
                'header',
                { className: 'main-search-header' },
                React.createElement(
                    'div',
                    { className: 'split space-between' },
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'form',
                            { onSubmit: this.handleSubmit },
                            React.createElement('input', { type: 'text',
                                name: 'page-search',
                                className: 'border-black page-search-bar',
                                placeholder: 'www.eyefind-url.net',
                                onChange: this.handleChange,
                                value: this.state.searchPageUrl })
                        )
                    ),
                    React.createElement(
                        'div',
                        { id: 'btns-header' },
                        React.createElement(
                            'div',
                            { className: 'border-black border-radius-10 btn-header' },
                            React.createElement(
                                'a',
                                { id: 'email-btn', href: './eyefind_emails.html' },
                                React.createElement('img', { src: './../img/msg-img.png' })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'border-black border-radius-10 btn-header' },
                            React.createElement(
                                'a',
                                { id: 'home-btn', href: './index.html' },
                                React.createElement('img', { src: './../img/home-img.png' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SearchHeader;
}(React.Component);