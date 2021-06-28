'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page(props) {
        _classCallCheck(this, Page);

        var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

        _this.state = {
            emails: [{
                sender: "Cuellariano Master",
                email: "masterCuellariano@eyefind.io",
                subject: "Lengua perdida?",
                body: 'Con un lenguaje así, todos los temas tienen un lugar en el mundo cuellariano: “El pelo alborotado de la lluvia / no tiene la intención de acariciarnos” (p. 328), “Oculta entre la bruma / la tarde anaranjada” (p. 301), “Con la saliva que gastan mis enemigos / para injuriarme / construyo un río” (p. 41).\n Hay autores que se ocultan en su obra y la convierten en fortaleza inexpugnable, pero para Margarito su poesía es como su bitácora, todo está allí: familia, viajes, enfermedades, amores, lecturas, sueños, amigos, venturas, aventuras y desventuras: “La claridad se marcha con su oro a otra parte / y deja como herencia el traje de la noche” (p. 68), “Hablan lenguas extrañas los hoteles. Despiden al viajero con / aire de falsa cortesía” (p. 50), “No vendas tu alma a cualquier diablo; prefiere los mercados, las rifas, la subasta” (p. 225).',
                viewed: false
            }, {
                sender: "Niko bellic",
                email: "niko@eyefind.io",
                subject: "Are you inbred or just stupid?",
                body: "¿Qué es el sueño americano? Para Niko Bellic, que acaba de llegar de Europa en barco, es la esperanza de poder dejar atrás su pasado. Para su primo, Roman, es la visión de que, juntos, podrán encontrar la fortuna en Liberty City, la entrada a la tierra de las oportunidades.",
                viewed: false
            }, {
                sender: "Carl Johnson",
                email: "cj_gta@eyefind.io",
                subject: "Ah shit! Here we go again...",
                body: "Script\n(Carl \"CJ\" Johnson delivers his bag at the Francis International Airport, Liberty City.) \n CJ: After five years on the East Coast, it was time to go home. \n (Carl is arriving at Los Santos International Airport, and his phone rings. His brother, Sean \"Sweet\" Johnson, has called.) \n CJ: (on phone) 'Sup? \n Sweet: Carl, it's Sweet. \n CJ: Wassup, Sweet, what you want? \n Sweet: It's Momma... She's dead, bro. \n (Carl takes a cab, which is being pulled over by a police car, containing corrupt C.R.A.S.H. officers Frank Tenpenny, Edward \"Eddie\" Pulaski and rookie recruit Jimmy Hernandez.) \n Tenpenny: Passenger, show us your hands. (Carl exits the cab and slowly walks backwards towards the police car.) Stop. Get down on your knees. Now down on your stomach. (Carl does what he is told by Tenpenny) There you go. I'll take that, Hernandez. \n (Hernandez gives Carl's money to Tenpenny as Pulaski handcuffs him down.) \n CJ: Hey, that's my paper, man. That's money. \n Tenpenny: This is drug money. \n CJ: My money, man. \n Pulaski: (to Hernandez, apparently, as he gets Carl to stand up straight and face Tenpenny) Hey, don't worry about it, I'll fill it out later. \n Tenpenny: Welcome home, Carl. Glad to be back? You haven't forgotten about us, have you boy? \n CJ: Hell no, officer Tenpenny. I was just wondering what took y'all so long. \n Tenpenny: Get in the car. \n (Hernandez and Pulaski take Carl to the back seat of the police car.) \n CJ: Ease up, man. Damn. \n Tenpenny: Watch your head. \n (Pulaski bangs Carl's head against the rim of the car.) \n Tenpenny: Oh! My bad. (Pulaski laughs) \n Pulaski: (yells at cab driver) Get outta here, you greaseball bastard! (normal voice) Stupid Mexican. (looks at Hernandez) Oh, hey, sorry. \n CJ: My bag. Hey, man, my bag! \n (The car zooms off. Tenpenny and Pulaski are apparently driving Carl through East Los Santos.) \n Tenpenny: How you been, Carl? How's your wonderful family? \n CJ: I'm here to bury my Moms. You know that. \n Tenpenny: Yeah, I guess I do. So what else you got shakin' Carl? \n CJ: Nothing. I live in Liberty City now. I'm clean. Legit. \n Tenpenny: No, you ain't never been clean, Carl. \n Pulaski: (finds a gun) Well, what've we got here? \n Tenpenny: This is a weapon, Officer Pulaski, that was used to gun down a police officer not ten minutes ago. Officer Pendelbury. A fine man, I might add. You work fast, nigga. \n CJ: You know I just got off the plane. \n Pulaski: It's a good thing we found you and retrieved the murder weapon. \n CJ: That ain't my gun. \n Tenpenny: Don't bullshit me, Carl. \n Pulaski: Yeah, don't bullshit him, Carl. \n CJ: What the fuck you want from me this time? \n Tenpenny: When we want you, we'll find you. In the meantime, try not to gun down any more officers of the law. (laughing) \n CJ: You all can't leave me here. This Ballas' country. \n Tenpenny: I thought you said you was innocent, Carl? That you don't bang? \n Pulaski: (o n the police radio) This is car 58... \n Tenpenny: See you around, like a donut, Carl. (laughing) \n (Carl is thrown out of the police car.) \n Pulaski : (still on the police radio) WHAT? Officer Pendelbury's down? We'll be right over. \n (The police car drives out of sight.) \n CJ (to himself): Ah shit, here we go again. Worst place in the world. Rollin Heights Balla country. I ain't represented Grove Street in five years, but the Ballas won't give a shit.",
                viewed: false
            }],
            currentEmail: 0,
            searchPageUrl: 'mail.eyefind.info'
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Page, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var emails = this.state.emails.map(function (email, index) {
                return React.createElement(PendantEmail, {
                    key: index,
                    email: email,
                    onClick: function onClick() {
                        return _this2.onEmailSelected(index);
                    }
                });
            });
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
                                    placeholder: "eyefind.info",
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
                                    React.createElement("img", { src: "img/msg-img.png" })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "border-black border-radius-10 btn-header" },
                                React.createElement(
                                    "a",
                                    { id: "home-btn", href: "#" },
                                    React.createElement("img", { src: "img/home-img.png" })
                                )
                            )
                        )
                    )
                ),
                React.createElement(EmailHeader, {
                    sender: this.getCurrentEmail().sender,
                    subject: this.getCurrentEmail().subject
                }),
                React.createElement(EmailView, { text: this.getCurrentEmail().body }),
                React.createElement(
                    "section",
                    { className: "mx-1 mx-md-5", id: "email-view-list" },
                    React.createElement(
                        "div",
                        { className: "d-flex justify-content-between text-bold" },
                        React.createElement(
                            "p",
                            null,
                            "14 EMAILS"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "1 UNREAD"
                        )
                    ),
                    React.createElement(
                        "div",
                        { id: "email-list" },
                        React.createElement(
                            "div",
                            { className: "p-3" },
                            emails
                        ),
                        React.createElement("div", { style: { width: "10%", backgroundColor: "gray" } })
                    )
                )
            );
        }
    }, {
        key: "getCurrentEmail",
        value: function getCurrentEmail() {
            return this.state.emails[this.state.currentEmail];
        }
    }, {
        key: "handleChange",
        value: function handleChange(event) {
            var state = Object.assign({}, this.state);
            state.searchPageUrl = event.target.value;
            this.setState(state);
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            alert('Requested search: ' + this.state.value);
            event.preventDefault();
        }
    }, {
        key: "onEmailSelected",
        value: function onEmailSelected(index) {
            var state = Object.assign({}, this.state);
            state.currentEmail = index;
            this.setState(state);
        }
    }], [{
        key: "getDerivedStateFromError",
        value: function getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            console.log(error);
        }
    }]);

    return Page;
}(React.Component);

var domContainer = document.querySelector('#main_container');
ReactDOM.render(React.createElement(Page, null), domContainer);