'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainPage = function MainPage(_ref) {
    var updatePage = _ref.updatePage;

    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "row mb-md-3", id: "main-page" },
            React.createElement(
                "div",
                { className: "row d-flex justify-content-center" },
                React.createElement(
                    "div",
                    { className: "col-md-12 text-center" },
                    React.createElement("img", { src: "../img/krapea/furniture_1.jpg", className: "w-100" })
                )
            ),
            React.createElement(
                "div",
                { className: "row mt-3 d-flex justify-content-center" },
                React.createElement(
                    "div",
                    { className: "col-md-6 mt-2" },
                    React.createElement(
                        "p",
                        { id: "title" },
                        "Welcome to Krapea, america's number 1 swedish furniture company."
                    )
                ),
                React.createElement("div", { className: "col-md-6" })
            ),
            React.createElement(
                "div",
                { className: "row mt-3" },
                React.createElement(
                    "div",
                    { className: "col-md-6" },
                    React.createElement(
                        "p",
                        null,
                        "Imagine an inside city of furniture, no windows, and everything bathed in halogen! A visit to KRAPEA is a unique experience. Stores the size of a university campus. Quirky and amusing product names like Wonki, Plankfog, Higgyendraght, Slipshod, Douchenflegen, Flimsi, Totter and other names we've slipped in. If you only knew what you were saying in Swedish. When you ask for the Plankfog, little do you know you just asked for a violent rectal exam in Swedish. How we laugh, and then we are melancholy and we miss the sun for 6 months. This is why floor staff will glare at you like you just felt up their kids when you dare to ask them a question. You will wander for hours in a maze of post-modern doom past miles of veneered pressboard that, like a can of Sprunk or a banana down the trousers, looks like wood from a distance. You will think that you're getting a great deal when you find an MDF chest in leopard-skin veneer for $20, not realizing that the bottom of the drawers will buckle under the weight of a pair of socks within the first week. You put it together so don't blame us when it falls apart. How we laugh, and then we are melancholy. We are rich, but still there is no sun for 6 months."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-6 d-flex flex-column " },
                    React.createElement(
                        "a",
                        { href: "#", alt: "Click here", className: "d-flex justify-content-center justify-content-md-end w-100" },
                        React.createElement("img", { src: "../img/krapea/click_here_1.jpg" })
                    ),
                    React.createElement(
                        "a",
                        { href: "#", alt: "Questions?", className: "d-flex mt-3 justify-content-center justify-content-md-end w-100" },
                        React.createElement("img", { src: "../img/krapea/questions.jpg" })
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "row mt-3" },
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "p",
                        { id: "special-text" },
                        "Special offers"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "row", id: "offers-row" },
                React.createElement(
                    "div",
                    { className: "col-md-12 z-index-1 d-flex justify-content-around flex-md-row flex-column" },
                    React.createElement(
                        "a",
                        { href: "#", alt: "Click here" },
                        React.createElement("img", { src: "../img/krapea/offer_1.jpg", className: "w-100" })
                    ),
                    React.createElement(
                        "a",
                        { href: "#", alt: "Questions?" },
                        React.createElement("img", { src: "../img/krapea/offer_2.jpg", className: "ml-3 w-100 " })
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "row mt-3" },
                React.createElement(
                    "div",
                    { className: "col-12" },
                    React.createElement(
                        "p",
                        null,
                        "Our mission at KRAPEA is to sell you low-quality home furnishings and to steal as many hours of your life as possible in the process. We believe that the whole shopping experience should last longer than a transatlantic flight. Which is why it's a maze! It is also melancholy, because that suits our temperament, even though we pretend to be cheerful. If you're going to steal our wooden pencils, we're going to make you work for your cut-price furniture. If you're going to leave your grandmother to quietly soil herself on our Wonki sofa for the entire day, we're going to mess with your mind a little. A visit to KRAPEA will take you to the extremes of physical and emotional endurance. Like a coke binge or a night at the in-laws, you'll swear that you'll never do it again but, for some inexplicable reason, you'll be back within a couple of months to fill up your car with shiny particle board. It's the sadomasochistic allure of self-assembly furniture. Flat-pack crack, all in a cheerful but melancholy package. We are laughing, and missing the sun at the same time."
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "row mt-3" },
                React.createElement(
                    "div",
                    { className: "col-12" },
                    React.createElement(
                        "p",
                        null,
                        "Nobody loves a homogenized corporate monoculture more than the Americans! Recent studies have shown that everyone in the state of San Andreas now owns an identical laundry basket. KRAPEA is taking over the world. Congratulations, world!"
                    )
                )
            )
        )
    );
};

var Krapea = function (_React$Component) {
    _inherits(Krapea, _React$Component);

    function Krapea(props) {
        _classCallCheck(this, Krapea);

        var _this = _possibleConstructorReturn(this, (Krapea.__proto__ || Object.getPrototypeOf(Krapea)).call(this, props));

        _this.state = {
            currentPage: 'main',
            searchPageUrl: 'www.krapea.com'
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    /**
     * Updates URL text
     */


    _createClass(Krapea, [{
        key: "handleChange",
        value: function handleChange(event) {
            var state = Object.assign({}, this.state);
            state.searchPageUrl = event.target.value;
            this.setState(state);
        }

        /**
         * Redirects to "GTA-URL" requested
         */

    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            alert('Requested search: ' + this.state.value);
            event.preventDefault();
        }

        /**
         * Updates current page re-rendering the content
         */

    }, {
        key: "updatePage",
        value: function updatePage(page) {

            this.setState({
                currentPage: page
            });

            this.render();
        }
    }, {
        key: "getComponent",
        value: function getComponent() {
            var _this2 = this;

            switch (this.state.currentPage) {
                case 'main':
                    return React.createElement(MainPage, { updatePage: function updatePage(page) {
                            return _this2.updatePage(page);
                        } });
                default:
                    return React.createElement("div", null);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var component = this.getComponent();

            return React.createElement(
                "div",
                { className: "page" },
                React.createElement(
                    "header",
                    null,
                    React.createElement(
                        "div",
                        { className: "split space-between" },
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "form",
                                { onSubmit: this.handleSubmit },
                                React.createElement("input", { type: "text",
                                    name: "page-search",
                                    className: "border-black",
                                    placeholder: "www.love-meet.net",
                                    onChange: this.handleChange,
                                    value: this.state.searchPageUrl })
                            )
                        ),
                        React.createElement(
                            "div",
                            { id: "btns-header" },
                            React.createElement(
                                "div",
                                { className: "border-black border-radius-10 btn-header" },
                                React.createElement(
                                    "a",
                                    { id: "email-btn", href: "#" },
                                    React.createElement("img", { src: "./../img/msg-img.png" })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "border-black border-radius-10 btn-header" },
                                React.createElement(
                                    "a",
                                    { id: "home-btn", href: "./../index.html" },
                                    React.createElement("img", { src: "./../img/home-img.png" })
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-6 w-100" },
                        React.createElement("img", { src: "../img/krapea/top_banner.jpg", className: "img-fluid mx-auto w-75 d-block" })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "container mt-3" },
                    component
                ),
                React.createElement(
                    "div",
                    { className: "row", id: "footer" },
                    React.createElement(
                        "div",
                        { className: "col-12 d-flex justify-content-center" },
                        React.createElement("img", { src: "../img/krapea/footer.jpg", className: "w-100" })
                    )
                )
            );
        }
    }]);

    return Krapea;
}(React.Component);

var domContainer = document.querySelector('#main_container');
ReactDOM.render(React.createElement(Krapea, null), domContainer);