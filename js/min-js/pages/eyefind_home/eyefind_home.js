'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EyefindHome = function (_React$Component) {
    _inherits(EyefindHome, _React$Component);

    function EyefindHome(props) {
        _classCallCheck(this, EyefindHome);

        var _this = _possibleConstructorReturn(this, (EyefindHome.__proto__ || Object.getPrototypeOf(EyefindHome)).call(this, props));

        _this.state = {
            //currPage: -1,
        };
        return _this;
    }

    _createClass(EyefindHome, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'page' },
                React.createElement(SearchHeader, { ownerUrl: 'www.eyefind.net' }),
                React.createElement(
                    'nav',
                    { className: 'navbar navbar-light bg-primary ' },
                    React.createElement(
                        'a',
                        { href: './../pages/eyefind_home.html', className: 'navbar-brand', style: { marginLeft: "5%" } },
                        React.createElement('img', { height: '60', alt: '', src: './../img/eyefind-logo.png' })
                    )
                ),
                React.createElement(
                    'p',
                    { className: 'h3-md text-info mx-5' },
                    'Welcome Niko Bellic to eyefind.info!'
                ),
                React.createElement(
                    'div',
                    { className: 'container mt-3' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-md-12' },
                            React.createElement(
                                'div',
                                { className: 'row', id: 'search-email-panel' },
                                React.createElement(
                                    'div',
                                    { className: 'col-md-6 pl-0 pr-0 pl-md-3' },
                                    React.createElement(
                                        'div',
                                        { className: 'd-md-flex flex-column se-panel h-100' },
                                        React.createElement(
                                            'div',
                                            { className: 'container mb-2 mt-2 label-background' },
                                            React.createElement(
                                                'form',
                                                { className: 'form-inline' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'input-group w-90 mx-auto' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'input-group-prepend' },
                                                        React.createElement(
                                                            'button',
                                                            { type: 'button', className: 'btn my-auto' },
                                                            React.createElement('img', { className: 'img-fluid', width: '25px', height: '25px', src: 'https://www.nicepng.com/png/full/88-881641_research-search-icon-png-yellow.png' })
                                                        )
                                                    ),
                                                    React.createElement('input', { className: 'form-control text-uppercase my-2', type: 'text', placeholder: 'Lucky search' })
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'container mb-3 mt-1 label-background' },
                                            React.createElement(
                                                'div',
                                                { className: 'text-white text-uppercase text-center font-weight-bold my-2' },
                                                'Explore eyefind.info services'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'container mb-3 d-flex flex-row flex-wrap text-left pl-md-5' },
                                            React.createElement(
                                                'div',
                                                { className: 'w-50 my-2' },
                                                React.createElement(
                                                    'a',
                                                    { href: '#', className: 'list-group-item-action ' },
                                                    React.createElement('img', { height: '50px', src: 'http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_police-car/classica_police-car_flat-circle-white-on-yellow_512x512.png' }),
                                                    'AUTOS'
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'w-50 my-2' },
                                                React.createElement(
                                                    'a',
                                                    { href: '#', className: 'list-group-item-action ' },
                                                    React.createElement('img', { height: '50px', src: 'http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_music-cleft/classica_music-cleft_flat-circle-white-on-yellow_256x256.png' }),
                                                    'RING TONES'
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'w-50 mb-1' },
                                                React.createElement(
                                                    'a',
                                                    { href: '#', className: 'list-group-item-action ' },
                                                    React.createElement('img', { height: '50px', src: 'http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_hot-tea-cup/classica_hot-tea-cup_flat-circle-white-on-yellow_512x512.png' }),
                                                    'EATING OUT'
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'w-50 mb-1' },
                                                React.createElement(
                                                    'a',
                                                    { href: '#', className: 'list-group-item-action ' },
                                                    React.createElement('img', { height: '50px', src: 'http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_at-sign/classica_at-sign_flat-circle-white-on-yellow_512x512.png' }),
                                                    'SHARING'
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'w-50 mb-1' },
                                                React.createElement(
                                                    'a',
                                                    { href: '#', className: 'list-group-item-action ' },
                                                    React.createElement('img', { height: '50px', src: 'http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_crown-2/classica_crown-2_flat-circle-white-on-yellow_256x256.png' }),
                                                    'MONEY'
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'w-50 mb-1' },
                                                React.createElement(
                                                    'a',
                                                    { href: '#', className: 'list-group-item-action ' },
                                                    React.createElement('img', { height: '50px', src: 'http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_shopping-cart-3/classica_shopping-cart-3_flat-circle-white-on-yellow_256x256.png' }),
                                                    'SHOPPING'
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'w-50' },
                                                React.createElement(
                                                    'a',
                                                    { href: '#', className: 'list-group-item-action ' },
                                                    React.createElement('img', { height: '50px', src: 'http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_pencil-1/classica_pencil-1_flat-circle-white-on-yellow_256x256.png' }),
                                                    'NEWS'
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'w-50' },
                                                React.createElement(
                                                    'a',
                                                    { href: '#', className: 'list-group-item-action ' },
                                                    React.createElement('img', { height: '50px', src: 'http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/classica/classica_sun-glasses/classica_sun-glasses_flat-circle-white-on-yellow_256x256.png' }),
                                                    'TRAVEL'
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-md-3 mt-3 mt-md-0', id: 'email-panel' },
                                    React.createElement(
                                        'div',
                                        { className: 'd-flex flex-column justify-content-between p-0' },
                                        React.createElement(
                                            'div',
                                            { className: 'container d-flex justify-content-center' },
                                            React.createElement('img', { alt: '',
                                                className: 'mt-3 w-100',
                                                src: './../img/eyefind-logo.png' })
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'display-1 text-center' },
                                            React.createElement(
                                                'p',
                                                { className: 'text-bolder' },
                                                '10'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { id: 'check-email-btn', className: 'd-flex align-items-center' },
                                            React.createElement(
                                                'div',
                                                { className: 'p-2 w-100' },
                                                React.createElement(
                                                    'a',
                                                    { href: './eyefind_emails.html',
                                                        className: 'btn rounded-0 w-100 h-100 text-center text-uppercase text-white' },
                                                    'Check email'
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { id: 'lovemeet-panel', className: 'col-md-3 mt-3 mt-md-0' },
                                    React.createElement(
                                        'div',
                                        { className: 'd-flex flex-column justify-content-between p-0' },
                                        React.createElement(
                                            'div',
                                            { className: 'container d-flex justify-content-center' },
                                            React.createElement('img', { alt: '',
                                                className: 'mt-3 w-100',
                                                src: './../img/lovemeet/lovemeet-logo.jpg' })
                                        ),
                                        React.createElement(
                                            'div',
                                            { id: 'panel-img' },
                                            React.createElement('img', { alt: '',
                                                className: 'p-2 w-100 mx-auto d-block',
                                                src: './../img/lovemeet/male.jpg' })
                                        ),
                                        React.createElement(
                                            'div',
                                            { id: 'lovemeet-btn', className: 'd-flex align-items-center' },
                                            React.createElement(
                                                'div',
                                                { className: 'p-2 w-100' },
                                                React.createElement(
                                                    'a',
                                                    { href: './lovemeet.html',
                                                        className: 'btn rounded-0 w-100 h-100 text-center text-uppercase text-white' },
                                                    'Find love now'
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'row mt-4' },
                                React.createElement(
                                    'div',
                                    { className: 'col-md-9 pr-md-0', id: 'news_ad' },
                                    React.createElement(NewsAd, null)
                                ),
                                React.createElement(
                                    'div',
                                    { id: 'ad-middle-side', className: 'col-md-3' },
                                    React.createElement(SideAd, { images: AD_NEWS })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'row mt-4' },
                                React.createElement(
                                    'div',
                                    { className: 'col-md-9 pr-md-0 d-flex flex-column' },
                                    React.createElement(
                                        'div',
                                        { className: 'mb-2' },
                                        React.createElement(
                                            'p',
                                            { className: 'w-100 h-100 text-center text-white h5 text-uppercase',
                                                style: { background: "#5a98c9" } },
                                            'Eyefind.info hot tv topics'
                                        )
                                    ),
                                    React.createElement('div', { id: 'tv_carousel_container' })
                                ),
                                React.createElement(
                                    'div',
                                    { id: 'ad-bottom-side', className: 'col-md-3' },
                                    React.createElement(RandomAd, null)
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'row mt-3' },
                                React.createElement(
                                    'div',
                                    { className: 'col-md-12' },
                                    React.createElement(
                                        'p',
                                        { className: 'w-100 h-100 text-center text-white h5 text-uppercase',
                                            style: { background: "#5a98c9" } },
                                        'Also on eyefind.info'
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { id: 'bottom-ads-container' },
                                React.createElement(BottomAds, null)
                            ),
                            React.createElement(
                                'footer',
                                { className: 'row mt-3' },
                                React.createElement(
                                    'div',
                                    { className: 'col-md-12', style: { background: "#5a98c9" } },
                                    React.createElement(
                                        'p',
                                        { className: 'w-100 h-100 text-center text-white' },
                                        'We collect your personal information on this site eyefind.info'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return EyefindHome;
}(React.Component);

var domContainer = document.querySelector('#main_container');
ReactDOM.render(React.createElement(EyefindHome, null), domContainer);