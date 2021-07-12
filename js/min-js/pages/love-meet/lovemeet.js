'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoveMeet = function (_React$Component) {
    _inherits(LoveMeet, _React$Component);

    function LoveMeet(props) {
        _classCallCheck(this, LoveMeet);

        var _this = _possibleConstructorReturn(this, (LoveMeet.__proto__ || Object.getPrototypeOf(LoveMeet)).call(this, props));

        _this.state = {
            searchPageUrl: 'mail.eyefind.info'
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    /**
     * Updates URL text
     */


    _createClass(LoveMeet, [{
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
            return React.createElement(
                'div',
                { className: 'page' },
                React.createElement(
                    'header',
                    null,
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
                                    className: 'border-black',
                                    placeholder: 'www.love-meet.net',
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
                                    { id: 'email-btn', href: '#' },
                                    React.createElement('img', { src: './../img/msg-img.png' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'border-black border-radius-10 btn-header' },
                                React.createElement(
                                    'a',
                                    { id: 'home-btn', href: './../index.html' },
                                    React.createElement('img', { src: './../img/home-img.png' })
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('img', { src: '../img/lovemeet/banner/lovemeet.png', className: 'img-fluid mx-auto d-block', alt: 'Responsive image' })
                ),
                React.createElement(
                    'div',
                    { className: 'container mt-3' },
                    React.createElement(
                        'div',
                        { className: 'row mb-md-3' },
                        React.createElement(
                            'div',
                            { className: 'col-md-12' },
                            React.createElement(
                                'div',
                                { className: 'row', id: 'find-date-panel' },
                                React.createElement(
                                    'div',
                                    { className: 'card col-md-5 lovemeet-card' },
                                    React.createElement(
                                        'div',
                                        { className: 'card-header' },
                                        React.createElement('img', { className: 'card-img-top  w-50', src: './../img/lovemeet/find_love.png', alt: 'Find love' })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'card-body' },
                                        React.createElement(
                                            'h3',
                                            { className: 'card-title' },
                                            'DON\'T BE SHY!'
                                        ),
                                        React.createElement(
                                            'p',
                                            { className: 'card-text' },
                                            'You can search for Singles in your area. ',
                                            React.createElement('br', null),
                                            'Just select your fancies below.          ',
                                            React.createElement('br', null),
                                            'Mr Fackler, `LoveMeet` Founder.          ',
                                            React.createElement('br', null)
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'row' },
                                            React.createElement('input', { type: 'image', className: 'w-50', src: './../img/lovemeet/male_btn.png', alt: 'Male' }),
                                            React.createElement('input', { type: 'image', className: 'w-50', src: './../img/lovemeet/female_btn.png', alt: 'Female' })
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'card mt-1 mt-md-0 col-md-7 lovemeet-card' },
                                    React.createElement(
                                        'div',
                                        { className: 'card-header' },
                                        React.createElement('img', { className: 'card-img-top w-50', src: './../img/lovemeet/true_love.png', alt: 'Card image cap' })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'card-body' },
                                        React.createElement('img', { className: 'card-img-top', src: './../img/lovemeet/female/female_1.png', alt: 'Card image cap' }),
                                        React.createElement(
                                            'p',
                                            { className: 'card-text' },
                                            'No pre-nups ',
                                            React.createElement('br', null),
                                            'From Rusia Without Love'
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'a',
                                    { 'class': 'btn btn-primary', 'data-bs-toggle': 'collapse', href: '#collapseExample', role: 'button', 'aria-expanded': 'false', 'aria-controls': 'collapseExample' },
                                    'Link with href'
                                ),
                                React.createElement(
                                    'button',
                                    { 'class': 'btn btn-primary', type: 'button', 'data-bs-toggle': 'collapse', 'data-bs-target': '#collapseExample', 'aria-expanded': 'false', 'aria-controls': 'collapseExample' },
                                    'Button with data-bs-target'
                                )
                            ),
                            React.createElement(
                                'div',
                                { 'class': 'collapse', id: 'collapseExample' },
                                React.createElement(
                                    'div',
                                    { 'class': 'card card-body' },
                                    'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.'
                                )
                            ),
                            React.createElement('hr', { className: 'middle-line' }),
                            React.createElement(
                                'div',
                                { className: 'row mt-3' },
                                React.createElement(
                                    'div',
                                    { className: 'col-md-12' },
                                    React.createElement(
                                        'p',
                                        { className: 'w-100 h-100 text-center text-bold' },
                                        'IN PARTNERSHIP WITH'
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'row mt-3' },
                                React.createElement('div', { id: 'bottom-ads-container' })
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row', id: 'footer' },
                        React.createElement(
                            'div',
                            { className: 'col-md-12 d-flex justify-content-center align-items-center' },
                            React.createElement(
                                'a',
                                { href: '#find-date-panel' },
                                'love-meet.net'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LoveMeet;
}(React.Component);

var domContainer = document.querySelector('#main_container');
ReactDOM.render(React.createElement(LoveMeet, null), domContainer);