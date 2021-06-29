'use strict';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            emails: [
                { 
                    sender: "Cuellariano Master",
                    email: "masterCuellariano@eyefind.io",
                    subject: "Lengua perdida?",
                    body: 'Con un lenguaje así, todos los temas tienen un lugar en el mundo cuellariano: “El pelo alborotado de la lluvia / no tiene la intención de acariciarnos” (p. 328), “Oculta entre la bruma / la tarde anaranjada” (p. 301), “Con la saliva que gastan mis enemigos / para injuriarme / construyo un río” (p. 41).\n Hay autores que se ocultan en su obra y la convierten en fortaleza inexpugnable, pero para Margarito su poesía es como su bitácora, todo está allí: familia, viajes, enfermedades, amores, lecturas, sueños, amigos, venturas, aventuras y desventuras: “La claridad se marcha con su oro a otra parte / y deja como herencia el traje de la noche” (p. 68), “Hablan lenguas extrañas los hoteles. Despiden al viajero con / aire de falsa cortesía” (p. 50), “No vendas tu alma a cualquier diablo; prefiere los mercados, las rifas, la subasta” (p. 225).',
                    viewed : true
                },
                { 
                    sender: "Niko bellic",
                    email: "niko@eyefind.io",
                    subject: "Are you inbred or just stupid?",
                    body: "¿Qué es el sueño americano? Para Niko Bellic, que acaba de llegar de Europa en barco, es la esperanza de poder dejar atrás su pasado. Para su primo, Roman, es la visión de que, juntos, podrán encontrar la fortuna en Liberty City, la entrada a la tierra de las oportunidades.",
                    viewed : false
                },
                { 
                    sender: "Carl Johnson",
                    email: "cj_gta@eyefind.io",
                    subject: "Ah shit! Here we go again...",
                    body: "Script\n(Carl \"CJ\" Johnson delivers his bag at the Francis International Airport, Liberty City.) \n CJ: After five years on the East Coast, it was time to go home. \n (Carl is arriving at Los Santos International Airport, and his phone rings. His brother, Sean \"Sweet\" Johnson, has called.) \n CJ: (on phone) 'Sup? \n Sweet: Carl, it's Sweet. \n CJ: Wassup, Sweet, what you want? \n Sweet: It's Momma... She's dead, bro. \n (Carl takes a cab, which is being pulled over by a police car, containing corrupt C.R.A.S.H. officers Frank Tenpenny, Edward \"Eddie\" Pulaski and rookie recruit Jimmy Hernandez.) \n Tenpenny: Passenger, show us your hands. (Carl exits the cab and slowly walks backwards towards the police car.) Stop. Get down on your knees. Now down on your stomach. (Carl does what he is told by Tenpenny) There you go. I'll take that, Hernandez. \n (Hernandez gives Carl's money to Tenpenny as Pulaski handcuffs him down.) \n CJ: Hey, that's my paper, man. That's money. \n Tenpenny: This is drug money. \n CJ: My money, man. \n Pulaski: (to Hernandez, apparently, as he gets Carl to stand up straight and face Tenpenny) Hey, don't worry about it, I'll fill it out later. \n Tenpenny: Welcome home, Carl. Glad to be back? You haven't forgotten about us, have you boy? \n CJ: Hell no, officer Tenpenny. I was just wondering what took y'all so long. \n Tenpenny: Get in the car. \n (Hernandez and Pulaski take Carl to the back seat of the police car.) \n CJ: Ease up, man. Damn. \n Tenpenny: Watch your head. \n (Pulaski bangs Carl's head against the rim of the car.) \n Tenpenny: Oh! My bad. (Pulaski laughs) \n Pulaski: (yells at cab driver) Get outta here, you greaseball bastard! (normal voice) Stupid Mexican. (looks at Hernandez) Oh, hey, sorry. \n CJ: My bag. Hey, man, my bag! \n (The car zooms off. Tenpenny and Pulaski are apparently driving Carl through East Los Santos.) \n Tenpenny: How you been, Carl? How's your wonderful family? \n CJ: I'm here to bury my Moms. You know that. \n Tenpenny: Yeah, I guess I do. So what else you got shakin' Carl? \n CJ: Nothing. I live in Liberty City now. I'm clean. Legit. \n Tenpenny: No, you ain't never been clean, Carl. \n Pulaski: (finds a gun) Well, what've we got here? \n Tenpenny: This is a weapon, Officer Pulaski, that was used to gun down a police officer not ten minutes ago. Officer Pendelbury. A fine man, I might add. You work fast, nigga. \n CJ: You know I just got off the plane. \n Pulaski: It's a good thing we found you and retrieved the murder weapon. \n CJ: That ain't my gun. \n Tenpenny: Don't bullshit me, Carl. \n Pulaski: Yeah, don't bullshit him, Carl. \n CJ: What the fuck you want from me this time? \n Tenpenny: When we want you, we'll find you. In the meantime, try not to gun down any more officers of the law. (laughing) \n CJ: You all can't leave me here. This Ballas' country. \n Tenpenny: I thought you said you was innocent, Carl? That you don't bang? \n Pulaski: (o n the police radio) This is car 58... \n Tenpenny: See you around, like a donut, Carl. (laughing) \n (Carl is thrown out of the police car.) \n Pulaski : (still on the police radio) WHAT? Officer Pendelbury's down? We'll be right over. \n (The police car drives out of sight.) \n CJ (to himself): Ah shit, here we go again. Worst place in the world. Rollin Heights Balla country. I ain't represented Grove Street in five years, but the Ballas won't give a shit.",
                    viewed : false
                }
            ],
            currentEmail: 0,
            searchPageUrl: 'mail.eyefind.info'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.constructTimeout(() => this.receiveFakeEmail())
    }

    render() {
        const emails = this.state.emails.map((email, index) =>
            <PendantEmail 
                key={index} 
                email={ email }
                onClick={ () => this.onEmailSelected(index) }
            />
        );
        return (
            <div className="page">

                <header>
                    <div className="split space-between">
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" 
                                    name="page-search" 
                                    className="border-black" 
                                    placeholder="eyefind.info"
                                    onChange={this.handleChange}
                                    value={ this.state.searchPageUrl }/>
                            </form>
                        </div>
                        <div id="btns-header">
                            <div className="border-black border-radius-10 btn-header">
                                <a id="email-btn" href="#">
                                    <img src="./../img/msg-img.png"/>
                                </a>
                            </div>
                            <div className="border-black border-radius-10 btn-header">
                                <a id="home-btn" href="#">
                                    <img src="./../img/home-img.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                <EmailHeader 
                    sender={ this.getCurrentEmail().sender }
                    subject={ this.getCurrentEmail().subject }
                />
                <EmailView text={ this.getCurrentEmail().body }/>
                
                <section className="mx-1 mx-md-5" id="email-view-list">
                    <div className="d-flex justify-content-between text-bold"> 
                        <p>{ this.getNumberOfEmails() } EMAILS</p>
                        <p>{ this.getUnreadEmails() } UNREAD</p>
                    </div>
                    <div id="email-list">
                        <div className="p-3">
                            { emails }
                        </div>
                        <div style={{width: "10%", backgroundColor: "gray"}}>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    getCurrentEmail(){
        return this.state.emails[this.state.currentEmail];
    }

    getNumberOfEmails() {
        return this.state.emails.length;
    }

    getUnreadEmails() {
        var count = 0;
        for (var i = 0, len = this.getNumberOfEmails(); i < len; i++) {
            if (this.state.emails[i].viewed === false)
                count++;
        }
        return count;
    }

    /**
     * Updates URL text
     */
    handleChange(event) {
        var state = {...this.state};
        state.searchPageUrl = event.target.value;
        this.setState(state);
    }

    /**
     * Redirects to "GTA-URL" requested
     */
    handleSubmit(event) {
        alert('Requested search: ' + this.state.value);
        event.preventDefault();
    }

    /**
     * Updates UI with current email
     */
    onEmailSelected(index) {
        var state = {...this.state};
        
        state.currentEmail = index;
        state.emails[index].viewed = true;

        this.setState(state);
    }

    constructTimeout(onTimeout) {
        // await randomly [10-59] seconds
        var randAwait = 10 + Math.random() * 50;
        var id = window.setTimeout(onTimeout, Math.round( randAwait * 1000 ));

        return id;
    }

    receiveFakeEmail(){
        var state = {...this.state};
        var newEmail = this.getRandomEmail();

        var emails = state.emails.concat(newEmail);

        state.emails = emails;

        console.log("[DEBUG]    Received new email!")
        // update
        this.setState(state);
        // start new timer for next email
        this.constructTimeout(() => this.receiveFakeEmail())
    }

    getRandomEmail() {
        var senders = [
            "Niko", "Roman", "Carl Johnson", "Leon Kennedy",
            "Morgan Freeman", "Sebastián Lapur", "Mario Castañeda",
            "Carlos Segundo"
        ];
        var bodies = [
            "Lorem ipsum dolor sit amet consectetur adipiscing elit magnis sociis, semper commodo eu natoque potenti a risus leo facilisi, enim in vivamus etiam lacus ultricies scelerisque nostra. Fringilla platea dis fermentum cras parturient malesuada mus, vehicula bibendum venenatis donec euismod in hac, luctus dictum vel cubilia consequat eleifend. Habitasse suscipit taciti condimentum donec duis dignissim ultrices, arcu mi mattis erat vulputate porta, dui fermentum aliquam massa magna tincidunt. Nibh facilisis facilisi litora fames tortor luctus nisl cursus eu, scelerisque erat cras semper felis dapibus lacus dictum laoreet, tempor metus per iaculis habitasse nascetur aliquam nullam.\nVulputate nulla venenatis gravida nisl at pharetra duis metus netus dapibus eget et quis, non iaculis fringilla urna lobortis fusce tortor elementum massa sociosqu varius fames. Hac fringilla donec tellus laoreet lectus leo nisi lacinia purus scelerisque mus duis, quam enim placerat tincidunt facilisis id curae velit mattis magnis pulvinar. Torquent proin hac luctus sodales nunc egestas vehicula cubilia ligula enim aliquet cras auctor, purus est dis litora ad parturient nam sed nascetur sem quis. Penatibus bibendum nam quisque luctus est sociosqu taciti habitasse, fringilla nunc maecenas sem nisl dignissim augue dapibus egestas, tortor facilisis duis mus curabitur viverra nascetur.",
            "Nam aliquam nulla tortor id auctor dictumst lectus, nec quam porta aliquet sagittis augue integer imperdiet, justo vivamus aptent in scelerisque conubia. Sociis cubilia morbi ultricies arcu orci nostra sed pulvinar per vel, phasellus nam feugiat dictumst hendrerit convallis facilisi ut at habitant, nisl felis posuere vestibulum commodo tristique cursus curabitur consequat. Nisi habitasse ornare fermentum sagittis dui natoque nisl congue aptent malesuada, nulla commodo curae iaculis pellentesque placerat morbi egestas.\n Rhoncus non facilisi curae montes semper potenti nibh, urna nisi at congue mattis ligula, sed mauris viverra placerat cras iaculis. Donec mus sed ligula placerat neque curae tellus potenti tempor, consequat vel ad eget dictum auctor venenatis facilisi mattis, eu netus lobortis etiam volutpat varius proin nullam. Massa arcu montes ut leo enim id fusce imperdiet aliquet, himenaeos hac nunc suscipit feugiat curae ligula eros, quis ultrices eleifend eget turpis eu dis ac.",
            "Rutrum posuere consequat iaculis ut vehicula scelerisque quam tellus diam, rhoncus elementum fusce non sollicitudin orci molestie sodales mi sagittis, maecenas suscipit ultrices ridiculus egestas dapibus bibendum massa. In justo consequat cum ullamcorper ante class, interdum varius praesent sed urna nullam, porttitor sapien lacinia erat lacus. Rhoncus ad mi conubia quis integer elementum, laoreet proin viverra arcu litora sagittis platea, nulla praesent ut curae parturient. Mattis ridiculus eleifend fermentum id eros ultricies lectus sociis nullam, mollis nascetur nibh dapibus tincidunt conubia risus velit phasellus blandit, nisi tempus convallis euismod nam hendrerit ut metus.\nRhoncus odio orci quam mattis cursus mus per congue a, duis euismod velit platea faucibus tempus vulputate. Neque sollicitudin penatibus metus turpis ligula vivamus curae tristique venenatis, odio inceptos conubia egestas eleifend tincidunt nostra faucibus pulvinar, porta ut ornare eros aliquet tempus molestie donec. Pellentesque mi diam posuere tempor suspendisse suscipit tortor enim, tellus netus rutrum habitant hac cubilia feugiat turpis, scelerisque morbi sapien nec venenatis montes himenaeos. Potenti aliquet malesuada libero feugiat diam ac hac quam varius natoque porta dis, nullam facilisis conubia senectus viverra fames convallis sociosqu nulla quis inceptos.\nAenean etiam mauris volutpat rhoncus natoque eleifend metus nostra cubilia congue interdum suspendisse imperdiet potenti enim quisque, bibendum mi suscipit eros nascetur dignissim nulla urna felis tincidunt per sem fusce condimentum. Rhoncus vitae aliquet accumsan est pellentesque lobortis tristique, nibh phasellus luctus pretium tempor posuere velit nascetur, cursus ornare nisi pulvinar nullam vivamus. Tempus vel hac mauris arcu vulputate nullam curabitur hendrerit sociosqu faucibus, per sollicitudin egestas pulvinar potenti cras facilisis mus metus, rhoncus quam ultrices euismod tellus phasellus eros duis dui.",
            "Ac semper fermentum dapibus eros eu faucibus hac commodo malesuada, litora purus aenean platea penatibus auctor taciti augue euismod, integer eget arcu quisque ultrices maecenas rutrum diam. Habitasse dapibus phasellus conubia rhoncus quam netus convallis platea magnis cras, eleifend montes elementum pretium facilisi nulla nec in proin curabitur, risus enim maecenas velit nostra diam eget justo hendrerit. Varius mi quam diam congue orci penatibus augue metus per feugiat semper bibendum sollicitudin est, suspendisse platea aptent ultricies fringilla ultrices pellentesque litora venenatis eu dignissim imperdiet ornare. Vestibulum velit volutpat sem auctor quam proin, mattis aenean lectus nulla malesuada porta commodo, cras magna dis posuere himenaeos.\nTellus id ornare magna molestie sociosqu suspendisse nostra netus mollis cubilia ultrices vehicula, proin tortor dis at quis dictumst purus penatibus gravida libero integer, dapibus eleifend luctus fermentum rhoncus sodales elementum a aliquam pretium conubia. Diam velit rutrum a convallis dictum nulla quis litora, aptent varius consequat eu nec auctor sagittis, duis faucibus elementum luctus molestie dui neque. Orci tempus morbi maecenas libero, etiam nec rhoncus suscipit primis, sapien enim ut. A viverra nec laoreet faucibus euismod dictum suspendisse curae fermentum urna facilisis hendrerit, magna augue libero nunc condimentum ultricies himenaeos dictumst justo phasellus."
        ];
        var emails = [
            "lorem@eyefind.info", "dapibus53@eyefind.info", "commodoMalesuada@eyefind.info",
            "namConsectetur31@eyefind.info", "rutrumAs@eyefind.info", "litoraPurus@eyefind.info",
            "semper821@eyefind.info"
        ];
        var subjects = [
            "Lorem ipsum dolor sit amet", "Auctor dictumst lectus, nec quam porta aliquet",
            "Ah shit! Here we go again...", "Nam aliquam nulla tortor id", "Ac semper fermentum dapibus eros",
            "Vehicula scelerisque quam tellus diam", "Lengua perdida?"
        ];
        var randSender = Math.round( Math.random() * 6 );
        var randBody = Math.round( Math.random() * 4 );
        var randEmail = Math.round( Math.random() * 6 );
        var randSubject = Math.round( Math.random() * 6 );
        var newEmail = {
            sender: senders[randSender],
            email: emails[randEmail],
            subject: subjects[randSubject],
            body: bodies[randBody],
            viewed: false
        };
        return newEmail;
    }
}

let domContainer = document.querySelector('#main_container');
ReactDOM.render(<Page />, domContainer);