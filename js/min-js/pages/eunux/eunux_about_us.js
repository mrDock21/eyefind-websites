'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EunuxAboutUs = function (_React$Component) {
    _inherits(EunuxAboutUs, _React$Component);

    function EunuxAboutUs(props) {
        _classCallCheck(this, EunuxAboutUs);

        return _possibleConstructorReturn(this, (EunuxAboutUs.__proto__ || Object.getPrototypeOf(EunuxAboutUs)).call(this, props));
    }

    _createClass(EunuxAboutUs, [{
        key: "render",
        value: function render() {
            return React.createElement(
                EunuxArticleTemplate,
                {
                    onPageSelected: this.props.onPageSelected,
                    selectedTab: this.props.selectedTab },
                React.createElement(
                    "p",
                    null,
                    "Welcome to one of the thousands of official websites for Eunux, the open source operating system that geeks love! Just imagine your car being put together by hundreds of people in their spare time. That's the same as the open source movement."
                ),
                React.createElement(
                    "p",
                    null,
                    "Eunux, masturbation, vandalism... all the best things in life are free. Why pay $300 to a mega-corporation so you can run $oftware compatible with 99% of computers on the planet when you can join the open source insurgency and be at the ground floor of a revolution?! The underlying source code is available for anyone to modify and redistribute freely which means that you can see how the system works! Doesn't this excite you?! Compiling code roxxOrz! We're going to bankrupt the Software monopoly."
                ),
                React.createElement(
                    "p",
                    null,
                    "Just imagine what would happen if all the fancy clothing stores released copies of their designs?!"
                ),
                React.createElement(
                    "p",
                    null,
                    "You would never buy clothes again, right?"
                ),
                React.createElement(
                    "p",
                    null,
                    "Only a fool would pay for something when he can get it for free."
                ),
                React.createElement(
                    "p",
                    null,
                    "Why buy a house when you can make one out of scrap?"
                ),
                React.createElement(
                    "p",
                    null,
                    "Why go to a supermarket when you can home-farm?"
                ),
                React.createElement(
                    "p",
                    null,
                    "Why buy a car when you can make one yourself?"
                ),
                React.createElement(
                    "p",
                    null,
                    "At Eunux.net, we all drive around in wooden go-carts powered by hairdryers that we made in our backyards."
                ),
                React.createElement(
                    "p",
                    { className: "highlight-pink" },
                    "L33t!"
                ),
                React.createElement(
                    "p",
                    null,
                    "There are literally millions of different versions of Eunux called distributions or 'distresses', such as RedTwat 328.4, Ucuntu 293.6, Slackcrack 784.9 and Knobbix 136.7. A few of them actually work but we're not going to tell you which ones - that's all part of the fun! Eunux is compatible with almost everything. apart from a sex life, and can do almost anything, except music, movies, games or fun in general. It is the best operating system in the world."
                ),
                React.createElement(
                    "p",
                    null,
                    "But, before you shit the tighty-whities your Mom bought you, it gets even better: as a Eunux user, you will have the chance to be part of a cult-like community and learn a secret handshake. You will finally belong somewhere!"
                ),
                React.createElement(
                    "p",
                    null,
                    "Why would you want a glitzy, out-of-the-box, plug-and-play, one-size-fits-all desktop solution when you can buy a computer a piece at a time and build it from scratch?"
                ),
                React.createElement(
                    "p",
                    null,
                    "Eunux is easy - after about six months of getting flamed on message boards when asking for help, you'll finally figure out the answer to your questions, and, after a few weeks of online tutorials, you should be able to play a DVD."
                ),
                React.createElement(
                    "p",
                    null,
                    "Can you think of anything better than spending your weekend recompiling a kernel? Do you even know what we're talking about? A fucking kernel man! Eunux is completely free, so long as time has no value to you. All we ask in return is that you worship our founder. He is a geek god. If you speak to him nicely, he will tell you the meaning of life. Just don't mispronounce Eunux or he will make the system even less intuitive."
                ),
                React.createElement(
                    "p",
                    null,
                    "Come on! What better way to fuck capitalism in the ass than an operating system used by nobody?!! Don't kid yourselves - you're never going to get laid. Join the free software subculture instead."
                ),
                React.createElement(
                    "p",
                    { className: "highlight-pink" },
                    "Become Eunux today!"
                )
            );
        }
    }]);

    return EunuxAboutUs;
}(React.Component);