'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeanMachineCoffeeHome = function (_React$Component) {
    _inherits(BeanMachineCoffeeHome, _React$Component);

    function BeanMachineCoffeeHome(props) {
        _classCallCheck(this, BeanMachineCoffeeHome);

        return _possibleConstructorReturn(this, (BeanMachineCoffeeHome.__proto__ || Object.getPrototypeOf(BeanMachineCoffeeHome)).call(this, props));
    }

    _createClass(BeanMachineCoffeeHome, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "container px-5 py-2 bmc-bg-dark bmc-border-top-pink" },
                        React.createElement(
                            "h3",
                            { className: "bmc-text-white bmc-font" },
                            "ABOUT BEAN MACHINE"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "container px-5 text-bold" },
                        React.createElement(
                            "p",
                            null,
                            "Do you feel restless, irritable and paranoid? Has your morning been dominated by panic attacks, mood swings, outbursts at strangers and psychotic behavior? Must be time for another coffee! Coffee is an ancient extract that the Mayans used to stay focused when sacrificing virgins. Or so we tell ourselves. We actually don't know. Unlike the Mayans, you are never more than 500 yards away from a Bean Machine coffee shop and we are always on hand to pump up your heart rate and send you on your way with a smile on your face and a burning need to piss every ten minutes. It's the end point of civilization."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "The perma-grin of a glassy-eyed barista after eight espressos, the noise of teeth-grinding and leg-tapping mingled with putrid soft jazz, the grainy photos of smiling plantation workers, the warm feeling when a disgruntled teenager calls you by the name scrawled on the side of a plastic cup... Our coffee shops are so much more than just great places to take a crap and surf online auctions: they are a lifestyle choice for the status-conscious consumer the kind of go-getter who really cares about his beverage choice, because the rest of life is completely pointless. Carry your paper cup like a badge of honor on the subway. Show your co-workers you mean business by ingesting 20 ounces of caffeine. Nothing screams \"upwardly-mobile sophisticate\" like a logoed polystyrene yuppie bucket of muddy brown water."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "We depend on you; you depend on caffeine. Customer satisfaction is a top priority at Bean Machine Coffee and we are dedicated to providing efficient and courteous service at all times, except if there is a line, or when there isn't. Just don't ask us to wash out your personal mug or we will turn on you in a heartbeat. We know from watching you clawing at the window and twitching nervously at the counter every morning that your coffee is important and we pledge to serve every drink within three minutes or sack one of our minimum wage employees on the spot. Or both."
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row container d-flex justify-content-center my-5" },
                    React.createElement(
                        "div",
                        { className: "bmc-bg-dark bmc-text-white w-75", style: { height: "8rem" } },
                        React.createElement(
                            "p",
                            null,
                            "Ad HERE"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row bmc-bg-white" },
                    React.createElement(
                        "div",
                        { className: "col-md-4 p-0" },
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "div",
                                { className: "bmc-bg-pink p-2 bmc-border-top-dark" },
                                React.createElement(
                                    "h3",
                                    { className: "bmc-text-dark bmc-font" },
                                    "GET A DAY PASS"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "p-3" },
                                React.createElement(
                                    "p",
                                    { className: "text-bold" },
                                    "Pick up a Bean Machine Day Pass at a store near you. Buy 9 coffees over the course of a day and we will give you the 10th for free!"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "div",
                                { className: "bmc-bg-pink p-2 bmc-border-top-dark" },
                                React.createElement(
                                    "h3",
                                    { className: "bmc-text-dark bmc-font" },
                                    "NEWS FLASH!"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "p-3" },
                                React.createElement(
                                    "ul",
                                    null,
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "p",
                                            { className: "text-bold" },
                                            "Bean Machine opens coffee houses at Machu Picchu and the Taj Mahal! Next stop, Everest."
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "p",
                                            { className: "text-bold" },
                                            "John Cena signs contract to become the new CEO of bean machine coffee!"
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-8 p-0 mb-3" },
                        React.createElement(
                            "div",
                            { className: "bmc-bg-dark p-2 bmc-border-top-pink" },
                            React.createElement(
                                "h3",
                                { className: "bmc-text-white bmc-font" },
                                "WORK FOR BEAN MACHINE COFFEE"
                            )
                        ),
                        React.createElement(
                            "div",
                            null,
                            React.createElement("img", { className: "w-100", src: this.getAsset("img/bean-machine-coffee/bmc_work-for-us.png") })
                        ),
                        React.createElement(
                            "div",
                            { className: "px-4 mt-2" },
                            React.createElement(
                                "p",
                                { className: "text-bold" },
                                "No experience required. Bean Machine is always looking for unskilled, part-time workers, primarily because all our staff turns over every three weeks. We prefer to use the term 'friends' rather than 'employees' and 'protectors' rather than 'managers'. We find that this helps to foster the illusion of a warm, fuzzy working environment and masks the exploitation at the core of our business model. We are not going to insult you with training. This is coffee, not rocket science. Don't worry: you'll soon learn the art of looking down your nose when someone orders a regular coffee. Join the biggest company in the world! We will hire anyone, so long as they look young. If you listen to emo music and have great tits, that's a plus, but a tattoo or facial piercing is preferred to give us that \"edge.\""
                            ),
                            React.createElement(
                                "button",
                                { className: "bmc-btn-dark py-3 bmc-font w-100" },
                                React.createElement(
                                    "h2",
                                    null,
                                    " Apply Now! "
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
                        { className: "col-4 d-flex justify-content-center" },
                        React.createElement("img", { className: "w-50", src: this.getAsset("img/bean-machine-coffee/bmc_logo.png") })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-8 bmc-text-white p-2" },
                        React.createElement(
                            "p",
                            null,
                            "Bean Machine Coffee"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "All rights reserved"
                        )
                    )
                )
            );
        }
    }]);

    return BeanMachineCoffeeHome;
}(React.Component);

var domContainer = document.querySelector('#main_container');
ReactDOM.render(React.createElement(BeanMachineCoffee, null), domContainer);